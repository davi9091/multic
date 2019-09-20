import * as window from 'svgdom';
const {SVG, registerWindow} = require('@svgdotjs/svg.js');

export class Multic {
  private windowObject: any;
  private documentObject: HTMLDocument;
  private SVGCanvas: HTMLCanvasElement;
  
  constructor() {
    this.initWindow();
    this.initCanvas();
  }

  private initWindow(): void {
    this.windowObject = window;
    this.documentObject = this.windowObject.document;

    registerWindow(this.windowObject, this.documentObject);
  }

  private initCanvas() {
    this.SVGCanvas = SVG(this.documentObject.documentElement);
  }
}