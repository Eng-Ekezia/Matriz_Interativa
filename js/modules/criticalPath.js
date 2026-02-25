// js/modules/criticalPath.js
'use strict';

import * as DOM from './dom.js';
import { state } from './state.js';
import { MAX_DEPTH } from './config.js';

/**
 * Renders the critical path starting from the hovered source card.
 * @param {HTMLElement} sourceCard - The currently hovered discipline card.
 */
export function renderCriticalPath(sourceCard) {
    const courseId = sourceCard.dataset.id;
    const course = state.allCoursesData.find(c => c.id === courseId);
    if (!course) return;

    // 1. Trace Ancestors (Prerequisites) By Depth
    const ancestors = new Map(); // id -> depth
    const traceAncestors = (sources, currentDepth) => {
        const nextSources = new Set();
        sources.forEach(cid => {
            const cData = state.allCoursesData.find(c => c.id === cid);
            if (!cData || !cData.prerequisitos) return;

            cData.prerequisitos.forEach(pid => {
                // If we haven't seen it, or we found a longer path to it, update it
                if (!ancestors.has(pid) || currentDepth > ancestors.get(pid)) {
                    ancestors.set(pid, currentDepth);
                    nextSources.add(pid);
                }
            });
        });
        if (nextSources.size > 0) {
            traceAncestors(Array.from(nextSources), currentDepth + 1);
        }
    };
    traceAncestors([courseId], 1);

    // 2. Trace Successors By Depth
    const successors = new Map(); // id -> depth
    const traceSuccessors = (sources, currentDepth) => {
        const nextSources = new Set();
        sources.forEach(sid => {
            const sucs = state.successorMap.get(sid) || [];
            sucs.forEach(s2id => {
                // If we haven't seen it, or we found a longer path to it, update it
                if (!successors.has(s2id) || currentDepth > successors.get(s2id)) {
                    successors.set(s2id, currentDepth);
                    nextSources.add(s2id);
                }
            });
        });
        if (nextSources.size > 0) {
            traceSuccessors(Array.from(nextSources), currentDepth + 1);
        }
    };
    traceSuccessors([courseId], 1);

    // 3. Highlight Elements based on depth
    highlightByDepth(courseId, ancestors, successors, course);

    // 4. Draw Specific SVG Lines
    if (state.linesVisible) {
        // Split coreqs for right/left drawing, keeping styling consistent with ancestors/successors
        const coreqs = (course.corequisitos || []).map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
        const leftCoreqs = [];
        const rightCoreqs = [];
        const sourceRect = sourceCard.getBoundingClientRect();

        coreqs.forEach(c => {
            const rect = c.getBoundingClientRect();
            if (rect.left < sourceRect.left - 10) {
                leftCoreqs.push(c);
            } else {
                rightCoreqs.push(c);
            }
        });

        // 4.1 Draw direct from Source
        const directPrereqsIds = (course.prerequisitos || []).filter(pid => ancestors.has(pid));
        const backwardTargets = directPrereqsIds.map(id => {
            const card = document.querySelector(`.card[data-id="${id}"]`);
            return card ? { card, depth: ancestors.get(id) || 1, type: 'ancestor' } : null;
        }).filter(Boolean).concat(leftCoreqs.map(card => {
            return { card, depth: 1, type: 'coreq' };
        }));

        const directSucsIds = (state.successorMap.get(courseId) || []).filter(sid => successors.has(sid));
        const forwardTargets = directSucsIds.map(id => {
            const card = document.querySelector(`.card[data-id="${id}"]`);
            return card ? { card, depth: successors.get(id) || 1, type: 'successor' } : null;
        }).filter(Boolean).concat(rightCoreqs.map(card => {
            return { card, depth: 1, type: 'coreq' };
        }));

        drawCriticalLines(sourceCard, backwardTargets, 'backward');
        drawCriticalLines(sourceCard, forwardTargets, 'forward');

        // 4.2 Draw ancestor chains (for each ancestor, draw to its prereqs)
        ancestors.forEach((depth, id) => {
            const currentCard = document.querySelector(`.card[data-id="${id}"]`);
            if (!currentCard) return;

            const cData = state.allCoursesData.find(c => c.id === id);
            if (!cData || !cData.prerequisitos) return;

            const prereqsOfAncestor = cData.prerequisitos.filter(pid => ancestors.has(pid));
            const targets = prereqsOfAncestor.map(pid => {
                const pCard = document.querySelector(`.card[data-id="${pid}"]`);
                // Use the prereq's depth for styling the line
                return pCard ? { card: pCard, depth: ancestors.get(pid), type: 'ancestor' } : null;
            }).filter(Boolean);

            if (targets.length > 0) {
                drawCriticalLines(currentCard, targets, 'backward');
            }
        });

        // 4.3 Draw successor chains (for each successor, draw to its successors)
        successors.forEach((depth, id) => {
            const currentCard = document.querySelector(`.card[data-id="${id}"]`);
            if (!currentCard) return;

            const directSucs = state.successorMap.get(id) || [];
            const sucsOfSuccessor = directSucs.filter(sid => successors.has(sid));
            const targets = sucsOfSuccessor.map(sid => {
                const sCard = document.querySelector(`.card[data-id="${sid}"]`);
                // Use the successor's depth for styling the line
                return sCard ? { card: sCard, depth: successors.get(sid), type: 'successor' } : null;
            }).filter(Boolean);

            if (targets.length > 0) {
                drawCriticalLines(currentCard, targets, 'forward');
            }
        });
    }
}

/**
 * Highlights cards in the DOM applying depth-specific classes.
 */
function highlightByDepth(sourceId, ancestorsMap, successorsMap, course) {
    // Clear and dim
    document.querySelectorAll('.card').forEach(c => c.classList.add('opacity-40'));

    // Highlight Source
    const sourceCard = document.querySelector(`.card[data-id="${sourceId}"]`);
    if (sourceCard) {
        sourceCard.classList.remove('opacity-40');
        sourceCard.classList.add('highlight-base', 'highlight-hover');
    }

    // Apply Ancestor Classes
    ancestorsMap.forEach((depth, id) => {
        const card = document.querySelector(`.card[data-id="${id}"]`);
        if (card) {
            card.classList.remove('opacity-40');
            card.classList.add('highlight-base');
            const depthVal = Math.min(depth, MAX_DEPTH);
            card.classList.add(`highlight-critical-ancestor-l${depthVal}`);
        }
    });

    // Coreq Highlighting (if traced recursively later, now supports l1)
    if (course && course.corequisitos) {
        course.corequisitos.forEach(cid => {
            const card = document.querySelector(`.card[data-id="${cid}"]`);
            if (card) {
                card.classList.remove('opacity-40');
                card.classList.add('highlight-base');
                card.classList.add(`highlight-critical-coreq-l1`); // Always depth 1 for now
            }
        });
    }

    // Apply Successor Classes
    successorsMap.forEach((depth, id) => {
        const card = document.querySelector(`.card[data-id="${id}"]`);
        if (card) {
            card.classList.remove('opacity-40');
            card.classList.add('highlight-base');
            const depthVal = Math.min(depth, MAX_DEPTH);
            card.classList.add(`highlight-critical-successor-l${depthVal}`);
        }
    });
}

/**
 * Draws the lines for the critical path dynamically depending on type and depth.
 */
function drawCriticalLines(sourceCard, targetsObj, direction) {
    if (!sourceCard || !targetsObj || targetsObj.length === 0) return;

    const overlayRect = DOM.svgOverlay.getBoundingClientRect();
    const sourceRect = sourceCard.getBoundingClientRect();
    const sourceCenterY = sourceRect.top + sourceRect.height / 2;
    const sourceCenterX = sourceRect.left + sourceRect.width / 2;

    const aboveTargets = [];
    const belowTargets = [];

    targetsObj.forEach(targetObj => {
        const targetRect = targetObj.card.getBoundingClientRect();
        const targetCenterY = targetRect.top + targetRect.height / 2;
        targetObj.rect = targetRect;
        targetObj.centerY = targetCenterY;

        if (targetCenterY <= sourceCenterY) {
            aboveTargets.push(targetObj);
        } else {
            belowTargets.push(targetObj);
        }
    });

    const sortX = (a, b) => {
        const aDistX = Math.abs((a.rect.left + a.rect.width / 2) - sourceCenterX);
        const bDistX = Math.abs((b.rect.left + b.rect.width / 2) - sourceCenterX);

        if (direction === 'backward') {
            return aDistX - bDistX;
        }
        return bDistX - aDistX;
    };

    aboveTargets.sort((a, b) => {
        const yDiff = a.centerY - b.centerY;
        if (Math.abs(yDiff) > 20) return yDiff;
        return sortX(a, b);
    });

    belowTargets.sort((a, b) => {
        const yDiff = a.centerY - b.centerY;
        if (Math.abs(yDiff) > 20) return yDiff;
        return -sortX(a, b);
    });

    const sortedTargets = [...aboveTargets, ...belowTargets];
    const numConnections = sortedTargets.length;

    sortedTargets.forEach((targetObj, index) => {
        const targetRect = targetObj.rect;
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const yFraction = (numConnections > 1) ? (index + 1) / (numConnections + 1) : 0.5;

        let startX, startY, endX, endY, controlX1, controlX2;

        if (direction === 'backward') {
            startY = targetRect.top + targetRect.height / 2 - overlayRect.top;
            endY = sourceRect.top + sourceRect.height * yFraction - overlayRect.top;
            startX = targetRect.right - overlayRect.left;
            endX = sourceRect.left - overlayRect.left;

            const horizontalDistance = startX - endX;
            const absoluteH = Math.abs(horizontalDistance);
            const absoluteV = Math.abs(endY - startY);

            if (horizontalDistance < 0) {
                let baseOffset = Math.max(30, absoluteH * 0.3);
                if (absoluteV < 40 && absoluteH < 150) {
                    baseOffset = Math.max(10, absoluteH * 0.15);
                }
                controlX1 = startX + baseOffset;
                controlX2 = endX - baseOffset;
            } else {
                const offset = Math.max(15, absoluteH * 0.4);
                controlX1 = startX + offset;
                controlX2 = endX - offset;
            }
        } else {
            startY = sourceRect.top + sourceRect.height * yFraction - overlayRect.top;
            endY = targetRect.top + targetRect.height / 2 - overlayRect.top;
            startX = sourceRect.right - overlayRect.left;

            if (targetObj.type === 'coreq') {
                endX = targetRect.right - overlayRect.left; // Correq recebe na direita
            } else {
                endX = targetRect.left - overlayRect.left;  // Sucessor recebe na esquerda
            }

            const horizontalDistance = endX - startX;
            const absoluteH = Math.abs(horizontalDistance);
            const absoluteV = Math.abs(endY - startY);

            if (targetObj.type === 'coreq') {
                if (Math.abs(horizontalDistance) < 20) {
                    // Correq adjacente vertical (mesmo semestre) = linha mais reta saindo pra direita e voltando
                    let offset = Math.max(30, absoluteV * 0.3);
                    controlX1 = startX + offset;
                    controlX2 = endX + offset;
                } else if (horizontalDistance < 0) {
                    // Correq no passado (à esquerda) = curva por cima voltando pra esquerda (mesma logica de prereq)
                    let offset = Math.max(30, absoluteH * 0.4);
                    if (absoluteV < 40) offset = Math.max(15, absoluteH * 0.2);
                    controlX1 = startX + offset;
                    controlX2 = endX - offset; // Volta a puxar pra trás (esquerda) pra entrar na direita do pre-req real
                } else {
                    // Correq pro futuro (fazer alça direita-direita normal)
                    let baseOffset = Math.max(40, absoluteH * 0.4);
                    if (absoluteV < 40) baseOffset = Math.max(10, absoluteH * 0.2);
                    controlX1 = startX + baseOffset;
                    controlX2 = endX + baseOffset;
                }
            } else {
                let offset = Math.max(20, absoluteH * 0.4);
                if (absoluteV > 100 && absoluteH < 100) {
                    offset = Math.max(40, absoluteH * 0.6);
                } else if (absoluteV < 50 && absoluteH < 150) {
                    offset = Math.max(10, absoluteH * 0.2);
                }
                controlX1 = startX + offset;
                controlX2 = endX - offset;
            }
        }

        path.setAttribute('d', `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`);

        // Depth-based specific lines
        const depthVal = Math.min(targetObj.depth, MAX_DEPTH);
        path.setAttribute('class', `connection-line line-critical-${targetObj.type}-l${depthVal}`);

        DOM.svgOverlay.appendChild(path);
    });
}
