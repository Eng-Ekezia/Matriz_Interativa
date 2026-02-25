// js/modules/lines.js
'use strict';

import * as DOM from './dom.js';

export function drawConnectionLines(sourceCard, targetGroups, direction) {
    if (!sourceCard || !targetGroups || targetGroups.length === 0) return;

    // Flatten all targets to sort them together to prevent overlaps
    let allTargets = [];
    targetGroups.forEach(group => {
        if (!group.targets) return;
        group.targets.forEach(targetCard => {
            allTargets.push({
                card: targetCard,
                lineClass: group.lineClass
            });
        });
    });

    if (allTargets.length === 0) return;

    const overlayRect = DOM.svgOverlay.getBoundingClientRect();
    const sourceRect = sourceCard.getBoundingClientRect();
    const sourceCenterY = sourceRect.top + sourceRect.height / 2;
    const sourceCenterX = sourceRect.left + sourceRect.width / 2;

    // Split targets into "above" and "below" relative to source center
    const aboveTargets = [];
    const belowTargets = [];

    allTargets.forEach(targetObj => {
        const targetRect = targetObj.card.getBoundingClientRect();
        const targetCenterY = targetRect.top + targetRect.height / 2;
        targetObj.rect = targetRect; // Cache rect
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
            startX = targetRect.right - overlayRect.left; // Pré-requisito recebe na direita
            endX = sourceRect.left - overlayRect.left;    // Hover recebe na esquerda

            const horizontalDistance = startX - endX;
            const absoluteH = Math.abs(horizontalDistance);
            const absoluteV = Math.abs(endY - startY);

            if (horizontalDistance < 0) { // Alvo tá à esquerda do source, curva normal pra tras
                let baseOffset = Math.max(30, absoluteH * 0.3);

                if (absoluteV < 40 && absoluteH < 150) {
                    baseOffset = Math.max(10, absoluteH * 0.15); // Evita S em dist curtas
                }

                controlX1 = startX + baseOffset;
                controlX2 = endX - baseOffset;
            } else { // Alvo tá à direita do source
                const offset = Math.max(15, absoluteH * 0.4);
                controlX1 = startX + offset;
                controlX2 = endX - offset;
            }

        } else { // direction === 'forward'
            startY = sourceRect.top + sourceRect.height * yFraction - overlayRect.top;
            endY = targetRect.top + targetRect.height / 2 - overlayRect.top;
            startX = sourceRect.right - overlayRect.left;

            if (targetObj.lineClass === 'line-coreq') {
                endX = targetRect.right - overlayRect.left; // Correq recebe na direita
            } else {
                endX = targetRect.left - overlayRect.left;  // Sucessor recebe na esquerda
            }

            const horizontalDistance = endX - startX;
            const absoluteH = Math.abs(horizontalDistance);
            const absoluteV = Math.abs(endY - startY);

            if (targetObj.lineClass === 'line-coreq') {
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

                // Fluid curve adjustments based on distance
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
        path.setAttribute('class', `connection-line ${targetObj.lineClass}`);
        DOM.svgOverlay.appendChild(path);
    });
}