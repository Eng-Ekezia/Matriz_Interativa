// js/modules/modal.js
'use strict';

import * as DOM from './dom.js';
import { state } from './state.js';
import { AXIS_COLORS } from './config.js';

function createBibliographyList(bibliographyItems) {
    const ol = document.createElement('ol');
    ol.className = 'list-decimal list-inside text-gray-600 text-justify space-y-1';
    if (!bibliographyItems || bibliographyItems.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'Nenhuma bibliografia informada.';
        ol.appendChild(li);
    } else {
        bibliographyItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            ol.appendChild(li);
        });
    }
    return ol;
}

function createRequirementLinks(reqIds) {
    const container = document.createElement('div');
    container.className = 'flex flex-wrap gap-1.5';
    if (!reqIds || reqIds.length === 0) {
        const noneSpan = document.createElement('span');
        noneSpan.className = 'text-sm text-gray-500';
        noneSpan.textContent = 'Nenhum';
        container.appendChild(noneSpan);
        return container;
    }
    reqIds.forEach(id => {
        const reqCourse = state.allCoursesData.find(c => c.id === id);
        const button = document.createElement('button');
        button.dataset.id = id;
        
        const colors = reqCourse ? AXIS_COLORS[reqCourse.eixo] : null;
        const bgColor = colors ? colors.bg : 'bg-gray-400';
        const textColor = colors ? colors.text : 'text-white';
        
        button.className = `modal-req-link cursor-pointer transition-transform hover:scale-105 text-xs font-medium px-2 py-0.5 rounded ${bgColor} ${textColor}`;
        button.textContent = reqCourse ? reqCourse.nome : id;

        button.addEventListener('click', (e) => {
            const newCourseId = e.currentTarget.dataset.id;
            closeModal('course-modal');
            setTimeout(() => openModal('course-modal', newCourseId), 250);
        });
        container.appendChild(button);
    });
    return container;
}

function createModalSection(title, content) {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'mb-6';
    const h4 = document.createElement('h4');
    h4.className = 'font-semibold text-lg mb-2 help-modal-title';
    h4.textContent = title;
    let contentElement;
    if (typeof content === 'string') {
        contentElement = document.createElement('p');
        contentElement.className = 'text-gray-600 text-justify dark:text-gray-400';
        contentElement.textContent = content || 'Não informado.';
    } else {
        contentElement = content;
    }
    sectionDiv.append(h4, contentElement);
    return sectionDiv;
}

function createModalInfoGrid(course, colors) {
    const infoGrid = document.createElement('div');
    infoGrid.className = 'grid grid-cols-3 gap-x-4 gap-y-4 border-b border-gray-200 dark:border-gray-700 pb-4 mb-4';
    const createInfoBlock = (title, content, colSpan = 1) => {
        const wrapper = document.createElement('div');
        wrapper.className = colSpan === 3 ? 'col-span-3' : '';
        const strong = document.createElement('strong');
        strong.className = 'block text-gray-500 text-xs font-semibold tracking-wider mb-1';
        strong.textContent = title;
        wrapper.appendChild(strong);
        if (typeof content === 'string') {
            const span = document.createElement('span');
            span.className = 'text-gray-800';
            span.textContent = content;
            wrapper.appendChild(span);
        } else {
            wrapper.appendChild(content);
        }
        return wrapper;
    };
    const axisChip = document.createElement('span');
    const bgColor = colors.bg || 'bg-gray-500';
    const textColor = colors.text || 'text-white';
    axisChip.className = `${bgColor} ${textColor} text-sm font-medium me-2 px-2.5 py-0.5 rounded`;
    axisChip.textContent = course.eixo;
    infoGrid.append(createInfoBlock('CÓDIGO', course.id), createInfoBlock('PERÍODO', `${course.periodo}º`), createInfoBlock('C. HORÁRIA', course.ch), createInfoBlock('EIXO', axisChip, 3), createInfoBlock('PRÉ-REQUISITOS', createRequirementLinks(course.prerequisitos), 3), createInfoBlock('CO-REQUISITOS', createRequirementLinks(course.corequisitos), 3));
    return infoGrid;
}

function populateCourseModal(courseId) {
    const course = state.allCoursesData.find(c => c.id === courseId);
    if (!course) return;
    const { title, content } = DOM.courseModal;
    const colors = AXIS_COLORS[course.eixo] || {};
    content.innerHTML = '';
    title.textContent = course.nome;
    title.className = `text-xl md:text-2xl font-bold ${colors.modalTitleText || 'text-gray-800 dark:text-gray-200'}`;
    content.append(createModalInfoGrid(course, colors), createModalSection('Ementa', course.ementa), createModalSection('Bibliografia Básica', createBibliographyList(course.bibliografiaBasica)), createModalSection('Bibliografia Complementar', createBibliographyList(course.bibliografiaComplementar)));
}

export function populateHelpModal() {
    if (!DOM.helpModal.content) return;
    DOM.helpModal.content.innerHTML = `
        <div>
            <h3 class="font-bold text-lg mb-4 help-modal-title">Interações Principais</h3>
            <dl class="space-y-4">
                <div class="flex items-start gap-4">
                    <dt class="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-blue-600 dark:text-blue-300"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M21.75 12h-2.25m-7.5 0h7.5m-7.5 0-1.093-1.093M4.166 19.834 5.757 18.243M21.75 12h-2.25M12 2.25V4.5m0 13.5-3.834-3.834M12 4.5l3.834 3.834" /></svg>
                    </dt>
                    <dd>
                        <strong class="font-semibold help-modal-title">Visualizar Detalhes</strong>
                        <p class="text-sm help-modal-text">Clique em uma disciplina para abrir uma janela com sua ementa, bibliografia e outras informações. Navegue pelo teclado com <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Tab</kbd> e pressione <kbd class="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">Enter</kbd>.</p>
                    </dd>
                </div>
                <div class="flex items-start gap-4">
                    <dt class="flex-shrink-0 w-12 h-12 rounded-lg bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7 text-yellow-600 dark:text-yellow-300"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                    </dt>
                    <dd>
                        <strong class="font-semibold help-modal-title">Explorar Dependências</strong>
                        <p class="text-sm help-modal-text">Passe o mouse sobre um card (ou use as setas do teclado para focar) para destacar as disciplinas relacionadas.</p>
                    </dd>
                </div>
            </dl>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <div>
            <h3 class="font-bold text-lg mb-3 help-modal-title">Legenda de Cores das Dependências</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div class="flex items-center gap-3 p-2 rounded-lg help-modal-legend-bg"><div class="w-5 h-5 rounded-full flex-shrink-0 highlight-hover"></div><div><strong class="help-modal-title">Disciplina Selecionada</strong></div></div>
                <div class="flex items-center gap-3 p-2 rounded-lg help-modal-legend-bg"><div class="w-5 h-5 rounded-full flex-shrink-0 highlight-prereq"></div><div><strong class="help-modal-title">Pré-requisito</strong></div></div>
                <div class="flex items-center gap-3 p-2 rounded-lg help-modal-legend-bg"><div class="w-5 h-5 rounded-full flex-shrink-0 highlight-coreq"></div><div><strong class="help-modal-title">Co-requisito</strong></div></div>
                <div class="flex items-center gap-3 p-2 rounded-lg help-modal-legend-bg"><div class="w-5 h-5 rounded-full flex-shrink-0 highlight-successor-l1"></div><div><strong class="help-modal-title">Dependência Direta</strong></div></div>
                <div class="flex items-center gap-3 p-2 rounded-lg help-modal-legend-bg"><div class="w-5 h-5 rounded-full flex-shrink-0 highlight-successor-l2"></div><div><strong class="help-modal-title">Dependência Indireta</strong></div></div>
            </div>
        </div>
        <div class="border-t border-gray-200 dark:border-gray-700 my-4"></div>
        <div>
            <h3 class="font-bold text-lg mb-3 help-modal-title">Botões de Ação</h3>
            <dl class="space-y-4">
                <div class="flex items-start gap-4">
                    <dt class="flex-shrink-0 w-12 h-12 rounded-lg help-modal-icon-bg flex items-center justify-center">
                       <div class="relative w-6 h-6 text-slate-600 dark:text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-0 left-0"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="red" class="w-6 h-6 absolute top-0 left-0 opacity-70"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3l18 18" /></svg>
                       </div>
                    </dt>
                    <dd>
                        <strong class="font-semibold help-modal-title">Mostrar/Ocultar Conexões</strong>
                        <p class="text-sm help-modal-text">Ativa ou desativa as linhas que conectam visualmente as disciplinas e suas dependências na grade.</p>
                    </dd>
                </div>
                <div class="flex items-start gap-4">
                    <dt class="flex-shrink-0 w-12 h-12 rounded-lg help-modal-icon-bg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-slate-600 dark:text-slate-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" /></svg>
                    </dt>
                    <dd>
                        <strong class="font-semibold help-modal-title">Alternar Tema</strong>
                        <p class="text-sm help-modal-text">Muda a aparência da interface entre o modo claro (padrão) e o modo escuro, para melhor conforto visual.</p>
                    </dd>
                </div>
            </dl>
        </div>
    `;
}

export function openModal(modalId, courseId = null) {
    let modalElement;
    if (modalId === 'help-modal') {
        modalElement = DOM.helpModal.element;
        populateHelpModal();
    } else {
        modalElement = DOM.courseModal.element;
    }
    
    if (!modalElement) return;
    state.lastFocusedElement = document.activeElement;
    if (modalId === 'course-modal' && courseId) {
        populateCourseModal(courseId);
    }
    modalElement.classList.remove('hidden');
    modalElement.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
        modalElement.querySelector('.transform').classList.remove('scale-95', 'opacity-0');
        const firstFocusableElement = modalElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        firstFocusableElement?.focus();
    }, 50);
}

export function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal || modal.classList.contains('hidden')) return;
    modal.querySelector('.transform').classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
        state.lastFocusedElement?.focus();
    }, 250);
}