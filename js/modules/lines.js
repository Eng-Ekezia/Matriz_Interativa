// js/modules/lines.js
'use strict';

import * as DOM from './dom.js';

export function drawConnectionLines(sourceCard, targetCards, lineClass, direction) {
    if (!sourceCard || !targetCards || targetCards.length === 0) return;

    const sortedTargets = [...targetCards].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
    const numConnections = sortedTargets.length;
    const overlayRect = DOM.svgOverlay.getBoundingClientRect();
    const sourceRect = sourceCard.getBoundingClientRect();

    sortedTargets.forEach((targetCard, index) => {
        const targetRect = targetCard.getBoundingClientRect();
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const yFraction = (numConnections > 1) ? (index + 1) / (numConnections + 1) : 0.5;

        let startX, startY, endX, endY;

        if (direction === 'backward') {
            startY = targetRect.top + targetRect.height / 2 - overlayRect.top;
            endY = sourceRect.top + sourceRect.height * yFraction - overlayRect.top;
        } else { // forward
            startY = sourceRect.top + sourceRect.height * yFraction - overlayRect.top;
            endY = targetRect.top + targetRect.height / 2 - overlayRect.top;
        }

        let horizontalDistance;
        if (direction === 'backward') {
            startX = targetRect.right - overlayRect.left;
            endX = sourceRect.left - overlayRect.left;
            horizontalDistance = Math.abs(sourceRect.left - targetRect.right);
        } else { // forward
            startX = sourceRect.right - overlayRect.left;
            endX = targetRect.left - overlayRect.left;
            horizontalDistance = Math.abs(targetRect.left - sourceRect.right);
        }

        const offset = Math.max(30, Math.min(80, horizontalDistance * 0.4));
        const controlX1 = startX + offset;
        const controlX2 = endX - offset;

        path.setAttribute('d', `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`);
        path.setAttribute('class', `connection-line ${lineClass}`);
        DOM.svgOverlay.appendChild(path);
    });
}