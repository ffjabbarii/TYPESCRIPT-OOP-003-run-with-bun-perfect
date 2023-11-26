import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(10, 19, 25);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(0, 0, 10, 20);
console.log(myRectangle.getInfo());

