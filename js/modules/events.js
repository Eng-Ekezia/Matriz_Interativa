// js/modules/events.js
'use strict';

import * as DOM from './dom.js';
import { state } from './state.js';
import { HIGHLIGHT_CLASSES } from './config.js';
import { openModal, closeModal } from './modal.js';
import { clearDependencyHighlights } from './dependencies.js';

function applyTheme(isDark) {
    DOM.body.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark', isDark); // Suporte ao Tailwind

    // Força classes dark do tailwind no input de busca para evitar override do estilo raiz
    if (DOM.inputs && DOM.inputs.search) {
        DOM.inputs.search.classList.toggle('bg-[#21262d]', isDark);
        DOM.inputs.search.classList.toggle('border-[#30363d]', isDark);
        DOM.inputs.search.classList.toggle('text-gray-200', isDark);
        DOM.inputs.search.classList.toggle('bg-white', !isDark);
    }

    DOM.themeIcons.sun.classList.toggle('hidden', !isDark);
    DOM.themeIcons.moon.classList.toggle('hidden', isDark);
}

function toggleTheme() {
    const isDark = DOM.body.classList.contains('dark-mode');
    const toggleTo = !isDark;

    applyTheme(toggleTo);
    localStorage.setItem('theme', toggleTo ? 'dark' : 'light');
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

function toggleCriticalPath() {
    state.criticalPathActive = !state.criticalPathActive;
    DOM.buttons.toggleCriticalPath.classList.toggle('active', state.criticalPathActive);

    // Clear highlights when toggling off
    if (!state.criticalPathActive) {
        clearDependencyHighlights();
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

export function initializeEventListeners() {
    DOM.buttons.help.addEventListener('click', () => openModal('help-modal'));
    DOM.buttons.themeToggle.addEventListener('click', toggleTheme);
    DOM.buttons.toggleLines.addEventListener('click', toggleLines);
    if (DOM.buttons.toggleCriticalPath) {
        DOM.buttons.toggleCriticalPath.addEventListener('click', toggleCriticalPath);
    }

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