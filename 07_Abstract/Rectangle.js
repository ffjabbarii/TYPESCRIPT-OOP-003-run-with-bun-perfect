"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    constructor(theX, theY, _length, _width) {
        super(theX, theY);
        this._length = _length;
        this._width = _width;
    }
    getInfo() {
        return super.getInfo() + `, length= ${this._length}, width = ${this._width}`;
    }
    calculateArea() {
        return this._length * this._width;
    }
}
exports.Rectangle = Rectangle;
