// js/modules/ui.js
'use strict';

import * as DOM from './dom.js';

/**
 * Preenche o cabeçalho da página com informações do curso.
 * @param {object} courseInfo - O objeto courseInfo do JSON.
 */
export function renderHeader(courseInfo) {
    if (!courseInfo) return;

    // Usa '??' para fornecer um valor padrão caso a propriedade não exista no JSON
    DOM.body.querySelector('#course-title').textContent = courseInfo.title ?? 'Matriz Curricular Interativa';
    DOM.body.querySelector('#course-institution').textContent = `${courseInfo.name ?? ''} - ${courseInfo.institution ?? ''}`;
}

/**
 * Gera a legenda de eixos dinamicamente a partir da configuração.
 * @param {object} axisConfig - O objeto axisConfig do JSON.
 */
export function renderAxisLegend(axisConfig) {
    const legendContainer = DOM.body.querySelector('#axis-legend-container');
    if (!legendContainer || !axisConfig) return;

    legendContainer.innerHTML = '<span class="font-bold">Eixos:</span>'; // Limpa e adiciona o título

    for (const axisName in axisConfig) {
        const axisData = axisConfig[axisName];
        const colorClass = axisData.bg;

        const legendItem = document.createElement('div');
        legendItem.className = 'flex items-center gap-1.5 cursor-pointer hover:opacity-75 transition-opacity axis-filter-btn';
        legendItem.dataset.axis = axisName;
        legendItem.title = `Filtrar por ${axisName}`;
        // Usa diretamente a chave 'axisName' para o texto
        legendItem.innerHTML = `<div class="w-3 h-3 rounded-full ${colorClass}"></div><span>${axisName}</span>`;

        legendContainer.appendChild(legendItem);
    }
}