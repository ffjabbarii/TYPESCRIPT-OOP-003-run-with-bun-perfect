"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Circle_1 = require("./Circle");
let myCircle = new Circle_1.Circle(0, 0, 5);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 10, 20);
let array = [];
array.push(myCircle);
array.push(myRectangle);
for (let shape of array) {
    console.log(shape.getInfo());
    console.log("Area: " + shape.calculateArea());
    console.log();
}
