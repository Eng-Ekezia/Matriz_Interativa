// js/modules/config.js
'use strict';

/**
 * v2.2.2: Adicionadas cores para o título do modal (modalTitleText)
 */
export const AXIS_COLORS = {
    "Matemática": { bg: "bg-blue-500", text: "text-blue-100", border: "border-blue-700", modalTitleText: "text-blue-600 dark:text-blue-400" },
    "Física e Química": { bg: "bg-red-500", text: "text-red-100", border: "border-red-700", modalTitleText: "text-red-600 dark:text-red-400" },
    "Computação e matemática aplicada": { bg: "bg-green-500", text: "text-green-100", border: "border-green-700", modalTitleText: "text-green-600 dark:text-green-400" },
    "Humanidades e ciências sociais": { bg: "bg-yellow-400", text: "text-yellow-800", border: "border-yellow-600", modalTitleText: "text-yellow-600 dark:text-yellow-400" },
    "Construção Civil e materiais": { bg: "bg-orange-500", text: "text-orange-100", border: "border-orange-700", modalTitleText: "text-orange-600 dark:text-orange-400" },
    "Estruturas e geotecnia": { bg: "bg-slate-600", text: "text-slate-100", border: "border-slate-800", modalTitleText: "text-slate-600 dark:text-slate-400" },
    "Expressão Gráfica": { bg: "bg-indigo-500", text: "text-indigo-100", border: "border-indigo-700", modalTitleText: "text-indigo-600 dark:text-indigo-400" },
    "Hidrotecnia e Recursos Ambientais": { bg: "bg-teal-500", text: "text-teal-100", border: "border-teal-700", modalTitleText: "text-teal-600 dark:text-teal-400" },
    "Prática profissional e formação diversificada": { bg: "bg-amber-800", text: "text-amber-100", border: "border-amber-900", modalTitleText: "text-amber-700 dark:text-amber-500" }
};

export const HIGHLIGHT_CLASSES = ['opacity-40', 'highlight-base', 'highlight-hover', 'highlight-prereq', 'highlight-coreq', 'highlight-successor-l1', 'highlight-successor-l2'];