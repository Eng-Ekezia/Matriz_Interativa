// js/modules/config.js
'use strict';

/**
 * v2.2.2: Adicionadas cores para o título do modal (modalTitleText)
 */
export const MAX_DEPTH = 10;

export const HIGHLIGHT_CLASSES = [
    'opacity-40', 'highlight-base', 'highlight-hover',
    'highlight-prereq', 'highlight-coreq',
    'highlight-successor-l1', 'highlight-successor-l2'
];

for (let i = 1; i <= MAX_DEPTH; i++) {
    HIGHLIGHT_CLASSES.push(`highlight-critical-ancestor-l${i}`);
    HIGHLIGHT_CLASSES.push(`highlight-critical-successor-l${i}`);
    HIGHLIGHT_CLASSES.push(`highlight-critical-coreq-l${i}`);
}