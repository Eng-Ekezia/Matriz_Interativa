// js/modules/card.js
'use strict';

import * as DOM from './dom.js';
import { state } from './state.js';
import { openModal } from './modal.js';
import { highlightDependencies, clearDependencyHighlights } from './events.js';
import { getTextColorForBackground, getRgbColorFromTailwindClass } from './utils.js';

// Cache para armazenar as cores já calculadas e evitar reprocessamento.
const colorCache = new Map();

/**
 * Cria o elemento HTML para uma única disciplina.
 * @param {object} course - O objeto da disciplina.
 * @returns {HTMLElement} O elemento do card da disciplina.
 */
function createCourseCard(course) {
    const card = document.createElement('div');
    const colors = state.axisConfig[course.eixo] || { bg: "bg-gray-500", border: "border-gray-700" };
    
    // Solução Inteligente:
    // 1. Pega a cor RGB da classe de fundo.
    const rgbColor = getRgbColorFromTailwindClass(colors.bg);
    // 2. Calcula a melhor cor de texto para o contraste.
    const textColor = getTextColorForBackground(rgbColor);

    // Verifica se a disciplina é optativa para adicionar a borda tracejada.
    const borderStyle = course.tipo === 'Optativa' ? ' border-dashed' : '';

    card.className = `card p-2 rounded-lg shadow-sm border-2 ${textColor} ${colors.bg} ${colors.border}${borderStyle}`;
    card.dataset.id = course.id;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Disciplina: ${course.nome}. Carga horária: ${course.ch}`);

    const chDiv = document.createElement('div');
    // Adicionada a classe 'card-ch-badge' para controle via CSS
    chDiv.className = `card-ch-badge absolute top-0 right-0 px-2 py-0.5 rounded-bl-lg text-[10px] font-semibold ${colors.bg} ${textColor}`;
    chDiv.style.filter = 'brightness(0.9)';
    chDiv.textContent = course.ch;

    const title = document.createElement('h3');
    title.className = 'font-semibold text-xs leading-tight px-1';

    const fullNameSpan = document.createElement('span');
    fullNameSpan.className = 'card-full-name';
    fullNameSpan.textContent = course.nome;

    const shortNameSpan = document.createElement('span');
    shortNameSpan.className = 'card-short-name';
    shortNameSpan.textContent = course.Sigla || course.nome;

    title.append(fullNameSpan, shortNameSpan);
    card.append(chDiv, title);

    // Event listeners
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

    for (let i = 1; i <= state.totalPeriods; i++) {
        const periodColumn = document.createElement('div');
        periodColumn.className = 'flex flex-col gap-2 bg-white p-2 rounded-lg shadow-inner';

        const periodTitle = document.createElement('h2');
        periodTitle.className = 'text-base font-bold mb-2 text-slate-700 text-center sticky top-0 bg-white py-1 z-10';
        
        // Adiciona spans para o título completo e abreviado do período
        const fullTitleSpan = document.createElement('span');
        fullTitleSpan.className = 'period-full-title';
        fullTitleSpan.textContent = `${i}º Período`;

        const shortTitleSpan = document.createElement('span');
        shortTitleSpan.className = 'period-short-title';
        shortTitleSpan.textContent = `${i}P`;

        periodTitle.append(fullTitleSpan, shortTitleSpan);
        periodColumn.appendChild(periodTitle);

        if (coursesByPeriod[i]) {
            coursesByPeriod[i].forEach(course => periodColumn.appendChild(createCourseCard(course)));
        }
        DOM.grid.appendChild(periodColumn);
    }
}