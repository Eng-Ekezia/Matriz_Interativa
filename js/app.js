'use strict';

/**
 * @module CurriculumApp
 * @description Módulo encapsulado para gerenciar a lógica da matriz curricular interativa.
 */
const CurriculumApp = (() => {

    /**
     * @property {Object} _config - Configurações e constantes da aplicação.
     * v2.2.2: Adicionadas cores para o título do modal (modalTitleText)
     */
    const _config = {
        AXIS_COLORS: {
            "Matemática": { bg: "bg-blue-500", text: "text-blue-100", border: "border-blue-700", modalTitleText: "text-blue-600 dark:text-blue-400" },
            "Física e Química": { bg: "bg-red-500", text: "text-red-100", border: "border-red-700", modalTitleText: "text-red-600 dark:text-red-400" },
            "Computação e matemática aplicada": { bg: "bg-green-500", text: "text-green-100", border: "border-green-700", modalTitleText: "text-green-600 dark:text-green-400" },
            "Humanidades e ciências sociais": { bg: "bg-yellow-400", text: "text-yellow-800", border: "border-yellow-600", modalTitleText: "text-yellow-600 dark:text-yellow-400" },
            "Construção Civil e materiais": { bg: "bg-orange-500", text: "text-orange-100", border: "border-orange-700", modalTitleText: "text-orange-600 dark:text-orange-400" },
            "Estruturas e geotecnia": { bg: "bg-slate-600", text: "text-slate-100", border: "border-slate-800", modalTitleText: "text-slate-600 dark:text-slate-400" },
            "Expressão Gráfica": { bg: "bg-indigo-500", text: "text-indigo-100", border: "border-indigo-700", modalTitleText: "text-indigo-600 dark:text-indigo-400" },
            "Hidrotecnia e Recursos Ambientais": { bg: "bg-teal-500", text: "text-teal-100", border: "border-teal-700", modalTitleText: "text-teal-600 dark:text-teal-400" },
            "Prática profissional e formação diversificada": { bg: "bg-amber-800", text: "text-amber-100", border: "border-amber-900", modalTitleText: "text-amber-700 dark:text-amber-500" }
        },
        HIGHLIGHT_CLASSES: ['opacity-40', 'highlight-base', 'highlight-hover', 'highlight-prereq', 'highlight-coreq', 'highlight-successor-l1', 'highlight-successor-l2']
    };

    let _state = {
        allCoursesData: [],
        successorMap: new Map(),
        linesVisible: false,
        lastFocusedElement: null
    };

    const _domRefs = {
        body: document.body,
        grid: document.getElementById('curriculum-grid'),
        svgOverlay: document.getElementById('svg-overlay'),
        courseModal: {
            element: document.getElementById('course-modal'),
            title: document.getElementById('modal-title'),
            content: document.getElementById('modal-content')
        },
        helpModal: {
            element: document.getElementById('help-modal'),
            content: document.getElementById('help-modal-content')
        },
        buttons: {
            help: document.getElementById('help-btn'),
            themeToggle: document.getElementById('theme-toggle-btn'),
            toggleLines: document.getElementById('toggle-lines-btn')
        },
        themeIcons: {
            sun: document.getElementById('theme-icon-sun'),
            moon: document.getElementById('theme-icon-moon')
        },
        linkIcons: {
            on: document.getElementById('icon-link-on'),
            off: document.getElementById('icon-link-off')
        }
    };
    
    function _buildSuccessorMap() {
        _state.allCoursesData.forEach(course => {
            if (!_state.successorMap.has(course.id)) _state.successorMap.set(course.id, []);
            (course.prerequisitos || []).forEach(prereqId => {
                if (!_state.successorMap.has(prereqId)) _state.successorMap.set(prereqId, []);
                _state.successorMap.get(prereqId).push(course.id);
            });
        });
    }

    function _renderGrid() {
        if (!_domRefs.grid) return;
        _domRefs.grid.innerHTML = '';
        const coursesByPeriod = _state.allCoursesData.reduce((acc, course) => {
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
                coursesByPeriod[i].forEach(course => periodColumn.appendChild(_createCourseCard(course)));
            }
            _domRefs.grid.appendChild(periodColumn);
        }
    }

    function _createCourseCard(course) {
        const card = document.createElement('div');
        const colors = _config.AXIS_COLORS[course.eixo] || { bg: "bg-gray-500", text:"text-white", border: "border-gray-700" };
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
        card.addEventListener('mouseenter', () => _highlightDependencies(course.id));
        card.addEventListener('mouseleave', _clearDependencyHighlights);
        card.addEventListener('focus', () => _highlightDependencies(course.id));
        card.addEventListener('blur', _clearDependencyHighlights);
        card.addEventListener('click', () => _openModal('course-modal', course.id));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                _openModal('course-modal', course.id);
            }
        });
        return card;
    }

    function _highlightDependencies(courseId) {
        const course = _state.allCoursesData.find(c => c.id === courseId);
        if (!course) return;
        _clearDependencyHighlights();
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
        const successorsL1 = new Set(_state.successorMap.get(courseId) || []);
        const successorsL2 = new Set();
        successorsL1.forEach(s1_id => {
            (_state.successorMap.get(s1_id) || []).forEach(s2_id => {
                if (!successorsL1.has(s2_id)) successorsL2.add(s2_id);
            });
        });
        const succL1Elems = [...successorsL1].map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
        const succL2Elems = [...successorsL2].map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
        succL1Elems.forEach(el => applyHighlight(el.dataset.id, 'highlight-successor-l1'));
        succL2Elems.forEach(el => applyHighlight(el.dataset.id, 'highlight-successor-l2'));
        if (_state.linesVisible) {
            _drawConnectionLines(sourceCardElem, prereqs, 'line-prereq', 'backward');
            _drawConnectionLines(sourceCardElem, coreqs, 'line-coreq', 'backward');
            _drawConnectionLines(sourceCardElem, succL1Elems, 'line-successor-l1', 'forward');
            succL1Elems.forEach(s1Elem => {
                const s1_id = s1Elem.dataset.id;
                const l2_for_s1_ids = (_state.successorMap.get(s1_id) || []).filter(id => successorsL2.has(id));
                const l2_for_s1_elems = l2_for_s1_ids.map(id => document.querySelector(`.card[data-id="${id}"]`)).filter(Boolean);
                if (l2_for_s1_elems.length > 0) {
                    _drawConnectionLines(s1Elem, l2_for_s1_elems, 'line-successor-l2', 'forward');
                }
            });
        }
    }

    function _clearDependencyHighlights() {
        if (_state.linesVisible) _domRefs.svgOverlay.innerHTML = '';
        document.querySelectorAll('.card').forEach(card => card.classList.remove(..._config.HIGHLIGHT_CLASSES));
    }
    
    function _drawConnectionLines(sourceCard, targetCards, lineClass, direction) {
        if (!sourceCard || !targetCards || targetCards.length === 0) return;
        const sortedTargets = [...targetCards].sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
        const numConnections = sortedTargets.length;
        const overlayRect = _domRefs.svgOverlay.getBoundingClientRect();
        const sourceRect = sourceCard.getBoundingClientRect();
        sortedTargets.forEach((targetCard, index) => {
            const targetRect = targetCard.getBoundingClientRect();
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const yFraction = (numConnections > 1) ? (index + 1) / (numConnections + 1) : 0.5;
            let startX, startY, endX, endY;
            if (direction === 'backward') {
                startY = targetRect.top + targetRect.height / 2 - overlayRect.top;
                endY = sourceRect.top + sourceRect.height * yFraction - overlayRect.top;
            } else {
                startY = sourceRect.top + sourceRect.height * yFraction - overlayRect.top;
                endY = targetRect.top + targetRect.height / 2 - overlayRect.top;
            }
            if (Math.abs(sourceRect.left - targetRect.left) < 20) {
                const xPos = sourceRect.right - overlayRect.left;
                const controlX = xPos + 40;
                startX = endX = xPos;
                path.setAttribute('d', `M ${startX} ${startY} Q ${controlX} ${(startY + endY) / 2}, ${endX} ${endY}`);
            } else {
                let horizontalDistance;
                if (direction === 'backward') {
                    horizontalDistance = Math.abs(sourceRect.left - targetRect.right);
                } else {
                    horizontalDistance = Math.abs(targetRect.left - sourceRect.right);
                }
                const offset = Math.max(30, Math.min(80, horizontalDistance * 0.4));
                let controlX1, controlX2;
                if (direction === 'backward') {
                    startX = targetRect.right - overlayRect.left;
                    endX = sourceRect.left - overlayRect.left;
                    controlX1 = startX + offset;
                    controlX2 = endX - offset;
                } else {
                    startX = sourceRect.right - overlayRect.left;
                    endX = targetRect.left - overlayRect.left;
                    controlX1 = startX + offset;
                    controlX2 = endX - offset;
                }
                path.setAttribute('d', `M ${startX} ${startY} C ${controlX1} ${startY}, ${controlX2} ${endY}, ${endX} ${endY}`);
            }
            path.setAttribute('class', `connection-line ${lineClass}`);
            _domRefs.svgOverlay.appendChild(path);
        });
    }

    /**
     * v2.2.2: Modificado para usar a cor do eixo no título do modal.
     */
    function _populateCourseModal(courseId) {
        const course = _state.allCoursesData.find(c => c.id === courseId);
        if (!course) return;
        const { title, content } = _domRefs.courseModal;
        const colors = _config.AXIS_COLORS[course.eixo] || {};
        content.innerHTML = '';
        title.textContent = course.nome;
        // Aplica a cor específica do eixo ao título do modal
        title.className = `text-xl md:text-2xl font-bold ${colors.modalTitleText || 'text-gray-800 dark:text-gray-200'}`;
        content.append(_createModalInfoGrid(course, colors), _createModalSection('Ementa', course.ementa), _createModalSection('Bibliografia Básica', _createBibliographyList(course.bibliografiaBasica)), _createModalSection('Bibliografia Complementar', _createBibliographyList(course.bibliografiaComplementar)));
    }
    
    /**
     * v2.2.2: Modificado para o chip do eixo refletir a cor do card.
     */
    function _createModalInfoGrid(course, colors) {
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
        // Usa as mesmas cores de fundo e texto do card principal para o chip
        const bgColor = colors.bg || 'bg-gray-500';
        const textColor = colors.text || 'text-white';
        axisChip.className = `${bgColor} ${textColor} text-sm font-medium me-2 px-2.5 py-0.5 rounded`;
        axisChip.textContent = course.eixo;
        infoGrid.append(createInfoBlock('CÓDIGO', course.id), createInfoBlock('PERÍODO', `${course.periodo}º`), createInfoBlock('C. HORÁRIA', course.ch), createInfoBlock('EIXO', axisChip, 3), createInfoBlock('PRÉ-REQUISITOS', _createRequirementLinks(course.prerequisitos), 3), createInfoBlock('CO-REQUISITOS', _createRequirementLinks(course.corequisitos), 3));
        return infoGrid;
    }

    function _createModalSection(title, content) {
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
    
    function _createRequirementLinks(reqIds) {
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
            const reqCourse = _state.allCoursesData.find(c => c.id === id);
            const button = document.createElement('button');
            button.dataset.id = id;
            
            const colors = reqCourse ? _config.AXIS_COLORS[reqCourse.eixo] : null;
            const bgColor = colors ? colors.bg : 'bg-gray-400';
            const textColor = colors ? colors.text : 'text-white';
            
            button.className = `modal-req-link cursor-pointer transition-transform hover:scale-105 text-xs font-medium px-2 py-0.5 rounded ${bgColor} ${textColor}`;
            button.textContent = reqCourse ? reqCourse.nome : id;

            button.addEventListener('click', (e) => {
                const newCourseId = e.currentTarget.dataset.id;
                _closeModal('course-modal');
                setTimeout(() => _openModal('course-modal', newCourseId), 250);
            });
            container.appendChild(button);
        });
        return container;
    }
    
    function _createBibliographyList(bibliographyItems) {
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

    function _populateHelpModal() {
        if (!_domRefs.helpModal.content) return;
        _domRefs.helpModal.content.innerHTML = `
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

    function _openModal(modalId, courseId = null) {
        let modalElement;
        if (modalId === 'help-modal') {
            modalElement = _domRefs.helpModal.element;
            _populateHelpModal();
        } else {
            modalElement = _domRefs.courseModal.element;
        }
        
        if (!modalElement) return;
        _state.lastFocusedElement = document.activeElement;
        if (modalId === 'course-modal' && courseId) {
            _populateCourseModal(courseId);
        }
        modalElement.classList.remove('hidden');
        modalElement.setAttribute('aria-hidden', 'false');
        setTimeout(() => {
            modalElement.querySelector('.transform').classList.remove('scale-95', 'opacity-0');
            const firstFocusableElement = modalElement.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            firstFocusableElement?.focus();
        }, 50);
    }

    function _closeModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal || modal.classList.contains('hidden')) return;
        modal.querySelector('.transform').classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.setAttribute('aria-hidden', 'true');
            _state.lastFocusedElement?.focus();
        }, 250);
    }
    
    function _trapFocus(e, modal) {
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

    function _applyTheme(isDark) {
        if (!_domRefs.body) return;
        _domRefs.body.classList.toggle('dark-mode', isDark);
        _domRefs.themeIcons.sun.classList.toggle('hidden', !isDark);
        _domRefs.themeIcons.moon.classList.toggle('hidden', isDark);
    }

    function _toggleTheme() {
        const isDark = _domRefs.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        _applyTheme(isDark);
    }
    
    function _toggleLines() {
        _state.linesVisible = !_state.linesVisible;
        _domRefs.body.classList.toggle('lines-hidden', !_state.linesVisible);
        _domRefs.buttons.toggleLines.classList.toggle('active', _state.linesVisible);
        _domRefs.linkIcons.on.classList.toggle('hidden', !_state.linesVisible);
        _domRefs.linkIcons.off.classList.toggle('hidden', _state.linesVisible);
        if (!_state.linesVisible) _domRefs.svgOverlay.innerHTML = '';
    }

    function _initializeEventListeners() {
        if (!_domRefs.buttons.help) return;
        
        _domRefs.buttons.help.addEventListener('click', () => _openModal('help-modal'));
        _domRefs.buttons.themeToggle.addEventListener('click', _toggleTheme);
        _domRefs.buttons.toggleLines.addEventListener('click', _toggleLines);
        
        document.querySelectorAll('[data-close-modal]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modalId = e.currentTarget.closest('.fixed.inset-0').id;
                _closeModal(modalId);
            });
        });
        
        document.querySelectorAll('.fixed.inset-0').forEach(modalEl => {
            modalEl.addEventListener('click', (e) => {
                if (e.target === modalEl) _closeModal(modalEl.id);
            });
        });
        
        document.addEventListener('keydown', (e) => {
            const activeModal = document.querySelector('.fixed.inset-0:not(.hidden)');
            if (e.key === "Escape" && activeModal) _closeModal(activeModal.id);
            if (activeModal) _trapFocus(e, activeModal);
        });
    }

    function init(coursesData) {
        _state.allCoursesData = coursesData || [];
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');
        _applyTheme(savedTheme === 'dark' || (savedTheme === null && prefersDark));
        _buildSuccessorMap();
        _renderGrid();
        _initializeEventListeners();
    }

    return {
        init: init
    };
})();

function startApp(coursesData) {
    document.addEventListener('DOMContentLoaded', () => {
        CurriculumApp.init(coursesData);
    });
}