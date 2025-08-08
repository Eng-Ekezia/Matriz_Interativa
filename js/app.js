// js/app.js
'use strict';

import { state } from './modules/state.js';
import { renderGrid } from './modules/card.js';
import { initializeEventListeners } from './modules/events.js';
import { renderHeader, renderAxisLegend } from './modules/ui.js'; // <-- NOVA IMPORTAÇÃO

// O caminho para o arquivo JSON.
const DATA_FILE_PATH = 'Matriz_atualizada_completa.json';

/**
 * Constrói o mapa de disciplinas sucessoras.
 */
function buildSuccessorMap() {
    state.allCoursesData.forEach(course => {
        if (!state.successorMap.has(course.id)) {
            state.successorMap.set(course.id, []);
        }
        (course.prerequisitos || []).forEach(prereqId => {
            if (!state.successorMap.has(prereqId)) {
                state.successorMap.set(prereqId, []);
            }
            state.successorMap.get(prereqId).push(course.id);
        });
    });
}

/**
 * Inicializa a aplicação com os dados das disciplinas.
 * @param {object} curriculumData - O objeto completo carregado do JSON.
 */
function initApp(curriculumData) {
    state.totalPeriods = curriculumData.totalPeriods || 10; // Usa 10 como padrão
    state.allCoursesData = curriculumData.courses || [];
    state.axisConfig = curriculumData.axisConfig || {};
    
    // --- NOVAS CHAMADAS ---
    renderHeader(curriculumData.courseInfo);
    renderAxisLegend(curriculumData.axisConfig); // <-- Usando 'axisConfig' do JSON que já existia

    buildSuccessorMap();
    renderGrid();
    initializeEventListeners();
}

/**
 * Ponto de entrada da aplicação.
 */
function main() {
    fetch(DATA_FILE_PATH)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na rede! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            initApp(data);
        })
        .catch(error => {
            console.error("Falha ao carregar ou processar o arquivo da matriz curricular:", error);
            document.body.innerHTML = `<div class="p-8 text-center text-red-500">
                <h1>Erro ao carregar dados</h1>
                <p>Não foi possível carregar a matriz curricular. Verifique o console para mais detalhes.</p>
            </div>`;
        });
}

// Inicia todo o processo quando o DOM estiver pronto.
document.addEventListener('DOMContentLoaded', main);