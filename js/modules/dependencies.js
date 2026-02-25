// js/modules/dependencies.js
'use strict';

import * as DOM from './dom.js';
import { state } from './state.js';
import { HIGHLIGHT_CLASSES } from './config.js';
import { drawConnectionLines } from './lines.js';

export function clearDependencyHighlights() {
    if (state.linesVisible) {
        DOM.svgOverlay.innerHTML = '';
    }
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove(...HIGHLIGHT_CLASSES);
        card.classList.remove('opacity-40');
    });
}

export function highlightDependencies(courseId) {
    const course = state.allCoursesData.find(c => c.id === courseId);
    if (!course) return;

    clearDependencyHighlights();
    document.querySelectorAll('.card').forEach(c => c.classList.add('opacity-40'));

    const applyHighlight = (id, className) => {
        const card = document.querySelector(`.card[data-id="${id}"]`);
        if (card) {
            card.classList.remove('opacity-40');
            card.classList.add('highlight-base', className);
        }
    };

    const sourceCardElem = document.querySelector(`.card[data-id="${courseId}"]`);
    if (!sourceCardElem) return;

    applyHighlight(courseId, 'highlight-hover');

    const prereqs = (course.prerequisitos || []).map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
    const coreqs = (course.corequisitos || []).map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
    prereqs.forEach(el => applyHighlight(el.dataset.id, 'highlight-prereq'));
    coreqs.forEach(el => applyHighlight(el.dataset.id, 'highlight-coreq'));

    const successorsL1 = new Set(state.successorMap.get(courseId) || []);
    const successorsL2 = new Set();
    successorsL1.forEach(s1_id => {
        (state.successorMap.get(s1_id) || []).forEach(s2_id => {
            if (!successorsL1.has(s2_id)) successorsL2.add(s2_id);
        });
    });

    const succL1Elems = [...successorsL1].map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
    const succL2Elems = [...successorsL2].map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
    succL1Elems.forEach(el => applyHighlight(el.dataset.id, 'highlight-successor-l1'));
    succL2Elems.forEach(el => applyHighlight(el.dataset.id, 'highlight-successor-l2'));

    if (state.linesVisible) {
        const sourceRect = sourceCardElem.getBoundingClientRect();
        const leftCoreqs = [];
        const rightCoreqs = [];

        coreqs.forEach(c => {
            const rect = c.getBoundingClientRect();
            if (rect.left < sourceRect.left - 10) {
                leftCoreqs.push(c);
            } else {
                rightCoreqs.push(c);
            }
        });

        const backwardGroups = [{ targets: prereqs, lineClass: 'line-prereq' }];
        if (leftCoreqs.length > 0) {
            backwardGroups.push({ targets: leftCoreqs, lineClass: 'line-coreq' });
        }

        drawConnectionLines(sourceCardElem, backwardGroups, 'backward');

        const forwardGroups = [
            { targets: rightCoreqs, lineClass: 'line-coreq' },
            { targets: succL1Elems, lineClass: 'line-successor-l1' }
        ];
        drawConnectionLines(sourceCardElem, forwardGroups, 'forward');

        succL1Elems.forEach(s1Elem => {
            const s1_id = s1Elem.dataset.id;
            const l2_for_s1_ids = (state.successorMap.get(s1_id) || []).filter(id => successorsL2.has(id));
            const l2_for_s1_elems = l2_for_s1_ids.map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
            if (l2_for_s1_elems.length > 0) {
                drawConnectionLines(s1Elem, [{ targets: l2_for_s1_elems, lineClass: 'line-successor-l2' }], 'forward');
            }
        });
    }
}
