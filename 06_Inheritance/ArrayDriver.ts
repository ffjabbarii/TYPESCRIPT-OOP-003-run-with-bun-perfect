import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";

let myShape = new Shape(10, 15);
let myCircle = new Circle(10, 19, 25);
let myRectangle = new Rectangle(0, 0, 10, 20);


let array: Shape[] = [];

array.push(myShape);
array.push(myCircle);
array.push(myRectangle);

for(let shape of array){
    console.log(shape.getInfo());
}