// js/modules/events.js
'use strict';

import * as DOM from './dom.js';
import { state } from './state.js';
import { HIGHLIGHT_CLASSES } from './config.js';
import { openModal, closeModal } from './modal.js';
import { drawConnectionLines } from './lines.js';

function applyTheme(isDark) {
    DOM.body.classList.toggle('dark-mode', isDark);
    DOM.themeIcons.sun.classList.toggle('hidden', !isDark);
    DOM.themeIcons.moon.classList.toggle('hidden', isDark);
}

function toggleTheme() {
    const isDark = DOM.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    applyTheme(isDark);
}

function toggleLines() {
    state.linesVisible = !state.linesVisible;
    DOM.body.classList.toggle('lines-hidden', !state.linesVisible);
    DOM.buttons.toggleLines.classList.toggle('active', state.linesVisible);
    DOM.linkIcons.on.classList.toggle('hidden', !state.linesVisible);
    DOM.linkIcons.off.classList.toggle('hidden', state.linesVisible);
    if (!state.linesVisible) {
        DOM.svgOverlay.innerHTML = '';
    }
}

function trapFocus(e, modal) {
    if (e.key !== 'Tab') return;
    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusableElements.length === 0) return;
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    if (e.shiftKey) {
        if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
        }
    } else {
        if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
        }
    }
}

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
        drawConnectionLines(sourceCardElem, prereqs, 'line-prereq', 'backward');
        drawConnectionLines(sourceCardElem, coreqs, 'line-coreq', 'backward');
        drawConnectionLines(sourceCardElem, succL1Elems, 'line-successor-l1', 'forward');
        succL1Elems.forEach(s1Elem => {
            const s1_id = s1Elem.dataset.id;
            const l2_for_s1_ids = (state.successorMap.get(s1_id) || []).filter(id => successorsL2.has(id));
            const l2_for_s1_elems = l2_for_s1_ids.map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
            if (l2_for_s1_elems.length > 0) {
                drawConnectionLines(s1Elem, l2_for_s1_elems, 'line-successor-l2', 'forward');
            }
        });
    }
}

export function initializeEventListeners() {
    DOM.buttons.help.addEventListener('click', () => openModal('help-modal'));
    DOM.buttons.themeToggle.addEventListener('click', toggleTheme);
    DOM.buttons.toggleLines.addEventListener('click', toggleLines);

    document.querySelectorAll('[data-close-modal]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modalId = e.currentTarget.closest('.fixed.inset-0').id;
            closeModal(modalId);
        });
    });

    document.querySelectorAll('.fixed.inset-0').forEach(modalEl => {
        modalEl.addEventListener('click', (e) => {
            if (e.target === modalEl) closeModal(modalEl.id);
        });
    });

    document.addEventListener('keydown', (e) => {
        const activeModal = document.querySelector('.fixed.inset-0:not(.hidden)');
        if (e.key === "Escape" && activeModal) {
            closeModal(activeModal.id);
        }
        if (activeModal) {
            trapFocus(e, activeModal);
        }
    });

    if (DOM.inputs.search) {
        DOM.inputs.search.addEventListener('input', handleSearch);
    }
    if (DOM.buttons.clearSearch) {
        DOM.buttons.clearSearch.addEventListener('click', clearSearch);
    }

    const legendContainer = document.getElementById('axis-legend-container');
    if (legendContainer) {
        legendContainer.addEventListener('click', handleAxisFilter);
    }

    // Tema inicial
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    applyTheme(savedTheme === 'dark' || (savedTheme === null && prefersDark));
}

// Variáveis de estado para filtros
let currentSearchQuery = '';
let currentAxisFilter = null;

export function applyFilters() {
    const isEditing = currentSearchQuery.length > 0 || currentAxisFilter !== null;

    if (DOM.buttons.clearSearch) {
        DOM.buttons.clearSearch.classList.toggle('hidden', currentSearchQuery.length === 0);
    }

    const allCards = document.querySelectorAll('.card');

    allCards.forEach(card => {
        const id = card.dataset.id;
        const course = state.allCoursesData.find(c => c.id === id);
        if (!course) return;

        let matchesSearch = true;
        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase();
            const textToMatch = `${course.id} ${course.nome} ${course.Sigla || ''}`.toLowerCase();
            matchesSearch = textToMatch.includes(query);
        }

        let matchesAxis = true;
        if (currentAxisFilter) {
            matchesAxis = course.eixo === currentAxisFilter;
        }

        if (isEditing && (!matchesSearch || !matchesAxis)) {
            card.classList.add('search-dimmed');
        } else {
            card.classList.remove('search-dimmed');
        }
    });
}

function handleSearch(e) {
    currentSearchQuery = e.target.value.trim();
    applyFilters();
}

function clearSearch() {
    if (DOM.inputs.search) {
        DOM.inputs.search.value = '';
    }
    currentSearchQuery = '';
    applyFilters();
}

function handleAxisFilter(e) {
    const filterBtn = e.target.closest('.axis-filter-btn');
    if (!filterBtn) return;

    const axis = filterBtn.dataset.axis;

    if (currentAxisFilter === axis) {
        currentAxisFilter = null;
        filterBtn.classList.remove('active-filter-pulse');
    } else {
        document.querySelectorAll('.axis-filter-btn').forEach(btn => btn.classList.remove('active-filter-pulse'));
        currentAxisFilter = axis;
        filterBtn.classList.add('active-filter-pulse');
    }

    applyFilters();
}