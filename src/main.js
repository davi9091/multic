const {SVG, registerWindow} = require('@svgdotjs/svg.js');
const window = require('svgdom');

export class Multic {
    constructor() {
        this.initCanvas();
    }

    initCanvas() {
        const document = window.document;
        registerWindow(window, document);
        this.canvas = SVG(document.documentElement);
    }

    drawRect(x, y, height, width, color = 'white') {
        this.canvas.rect(x, y).fill(color);
    }

    get svg() {
        return this.canvas.svg();
    }
}