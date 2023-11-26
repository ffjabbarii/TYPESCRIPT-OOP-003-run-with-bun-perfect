"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Rectangle_1 = require("./Rectangle");
const Circle_1 = require("./Circle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(10, 19, 25);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 10, 20);
let array = [];
array.push(myShape);
array.push(myCircle);
array.push(myRectangle);
for (let shape of array) {
    console.log(shape.getInfo());
}
