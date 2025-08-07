// js/modules/card.js
'use strict';

import * as DOM from './dom.js';
import { state } from './state.js';
import { AXIS_COLORS } from './config.js';
import { openModal } from './modal.js'; // Será criado no próximo passo
import { highlightDependencies, clearDependencyHighlights } from './events.js'; // Será criado no próximo passo

/**
 * Cria o elemento HTML para uma única disciplina.
 * @param {object} course - O objeto da disciplina.
 * @returns {HTMLElement} O elemento do card da disciplina.
 */
function createCourseCard(course) {
    const card = document.createElement('div');
    const colors = AXIS_COLORS[course.eixo] || { bg: "bg-gray-500", text: "text-white", border: "border-gray-700" };
    card.className = `card p-2 rounded-lg shadow-sm border-2 ${colors.text} ${colors.bg} ${colors.border}`;
    card.dataset.id = course.id;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Disciplina: ${course.nome}. Carga horária: ${course.ch}`);
    
    const chDiv = document.createElement('div');
    chDiv.className = `absolute top-0 right-0 px-2 py-0.5 rounded-bl-lg text-[10px] font-semibold ${colors.bg} ${colors.text}`;
    chDiv.style.filter = 'brightness(0.9)';
    chDiv.textContent = course.ch;

    const title = document.createElement('h3');
    title.className = 'font-semibold text-xs leading-tight px-1';
    title.textContent = course.nome;

    card.append(chDiv, title);

    // Adiciona os event listeners que chamarão funções de outros módulos
    card.addEventListener('mouseenter', () => highlightDependencies(course.id));
    card.addEventListener('mouseleave', clearDependencyHighlights);
    card.addEventListener('focus', () => highlightDependencies(course.id));
    card.addEventListener('blur', clearDependencyHighlights);
    card.addEventListener('click', () => openModal('course-modal', course.id));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openModal('course-modal', course.id);
        }
    });

    return card;
}

/**
 * Renderiza toda a grade curricular no DOM.
 */
export function renderGrid() {
    if (!DOM.grid) return;

    DOM.grid.innerHTML = '';
    const coursesByPeriod = state.allCoursesData.reduce((acc, course) => {
        (acc[course.periodo] = acc[course.periodo] || []).push(course);
        return acc;
    }, {});

    for (let i = 1; i <= 10; i++) {
        const periodColumn = document.createElement('div');
        periodColumn.className = 'flex flex-col gap-2 bg-white p-2 rounded-lg shadow-inner';
        
        const periodTitle = document.createElement('h2');
        periodTitle.className = 'text-base font-bold mb-2 text-slate-700 text-center sticky top-0 bg-white py-1 z-10';
        periodTitle.textContent = `${i}º Período`;
        periodColumn.appendChild(periodTitle);

        if (coursesByPeriod[i]) {
            coursesByPeriod[i].forEach(course => periodColumn.appendChild(createCourseCard(course)));
        }
        DOM.grid.appendChild(periodColumn);
    }
}