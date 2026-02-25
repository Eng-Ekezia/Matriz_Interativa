// js/modules/dom.js
'use strict';

export const body = document.body;
export const grid = document.getElementById('curriculum-grid');
export const svgOverlay = document.getElementById('svg-overlay');

export const courseModal = {
    element: document.getElementById('course-modal'),
    title: document.getElementById('modal-title'),
    content: document.getElementById('modal-content')
};

export const helpModal = {
    element: document.getElementById('help-modal'),
    content: document.getElementById('help-modal-content')
};

export const inputs = {
    search: document.getElementById('search-input'),
};

export const buttons = {
    help: document.getElementById('help-btn'),
    themeToggle: document.getElementById('theme-toggle-btn'),
    toggleLines: document.getElementById('toggle-lines-btn'),
    toggleCriticalPath: document.getElementById('toggle-critical-path-btn'),
    clearSearch: document.getElementById('clear-search-btn'),
};

export const themeIcons = {
    sun: document.getElementById('theme-icon-sun'),
    moon: document.getElementById('theme-icon-moon')
};

export const linkIcons = {
    on: document.getElementById('icon-link-on'),
    off: document.getElementById('icon-link-off')
};