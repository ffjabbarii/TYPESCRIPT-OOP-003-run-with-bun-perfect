import { Shape } from "./Shape";
import { Rectangle } from "./Rectangle";
import { Circle } from "./Circle";

let myCircle = new Circle(0, 0, 5);
let myRectangle = new Rectangle(0, 0, 10, 20);


let array: Shape[] = [];

array.push(myCircle);
array.push(myRectangle);

for(let shape of array){
    console.log(shape.getInfo());
    console.log("Area: " + shape.calculateArea())
    console.log();
}