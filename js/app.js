// js/app.js
'use strict';

import { state } from './modules/state.js';
import { renderGrid } from './modules/card.js';
import { initializeEventListeners } from './modules/events.js';

// O caminho para o arquivo JSON. Saindo da pasta 'js' para a raiz.
const DATA_FILE_PATH = 'Matriz_atualizada_completa.json';

/**
 * Constrói o mapa de disciplinas sucessoras para otimizar a busca por dependências.
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
    // Agora pegamos os cursos de dentro do objeto JSON
    state.allCoursesData = curriculumData.courses || [];
    buildSuccessorMap();
    renderGrid();
    initializeEventListeners();
}

/**
 * Ponto de entrada da aplicação.
 * Dispara o carregamento dos dados e inicializa a aplicação.
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
            initApp(data); // Inicia a aplicação com os dados carregados
        })
        .catch(error => {
            console.error("Falha ao carregar ou processar o arquivo da matriz curricular:", error);
            // Opcional: Exibir uma mensagem de erro na interface do usuário
            document.body.innerHTML = `<div class="p-8 text-center text-red-500">
                <h1>Erro ao carregar dados</h1>
                <p>Não foi possível carregar a matriz curricular. Verifique o console para mais detalhes.</p>
            </div>`;
        });
}

// Inicia todo o processo quando o DOM estiver pronto.
document.addEventListener('DOMContentLoaded', main);