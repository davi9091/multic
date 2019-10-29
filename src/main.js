const { SVG, registerWindow } = require("@svgdotjs/svg.js");
const window = require("svgdom");

export class Multic {
  constructor(jsonData) {
    this.jsonData = jsonData;
    this.parseData();
    this.initCanvas();
    this.draw();
  }

  initCanvas() {
    const document = window.document;
    registerWindow(window, document);
    this.canvas = SVG(document.documentElement);
  }

  parseData() {
    try {
      this.drawingObject = JSON.parse(this.jsonData);
    } catch (e) {
      console.error("Provided string is not valid JSON string, ERROR: ", e);
      this.drawingObject = {
        height: 600,
        width: 300,
        backgroundColor: "white"
      };
    }
  }

  setDefaults() {
    this.drawingObject.height = this.drawingObject.height || 600;
    this.drawingObject.width = this.drawingObject.width || 300;
  }

  draw() {
    this.setDefaults();
    this.drawBackground();
  }

  drawBackground() {
    this.canvas
      .rect(this.drawingObject.width, this.drawingObject.height)
      .fill(this.drawingObject.backgroundColor);
  }

  get svg() {
    return this.canvas.svg();
  }
}
