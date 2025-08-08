// js/modules/utils.js
'use strict';

const colorCache = new Map();

/**
 * Determina se o texto deve ser claro ou escuro com base na luminosidade da cor de fundo.
 * @param {string} rgbString - A cor de fundo em formato "rgb(r, g, b)".
 * @returns {string} A classe de cor do texto ('text-white' ou 'text-slate-800').
 */
export function getTextColorForBackground(rgbString) {
    if (!rgbString || !rgbString.startsWith('rgb')) return 'text-white';
    
    const [r, g, b] = rgbString.match(/\d+/g).map(Number);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    
    return luminance > 0.55 ? 'text-slate-800' : 'text-white';
}

/**
 * Descobre a cor RGB computada de uma classe de fundo do Tailwind.
 * @param {string} bgClass - A classe de fundo do Tailwind (ex: "bg-blue-500").
 * @returns {string} A cor no formato "rgb(r, g, b)".
 */
export function getRgbColorFromTailwindClass(bgClass) {
    if (colorCache.has(bgClass)) {
        return colorCache.get(bgClass);
    }

    const tempDiv = document.createElement('div');
    tempDiv.className = bgClass;
    tempDiv.style.display = 'none'; 
    document.body.appendChild(tempDiv);
    
    const computedColor = window.getComputedStyle(tempDiv).backgroundColor;
    
    document.body.removeChild(tempDiv);
    colorCache.set(bgClass, computedColor);
    
    return computedColor;
}