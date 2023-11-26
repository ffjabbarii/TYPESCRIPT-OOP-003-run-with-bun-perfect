import { Shape } from "./Shape"

export class Rectangle extends Shape{
    constructor(theX: number, theY: number, 
                private _length: number, private _width: number){
                    super(theX, theY);
                }

    getInfo(): string {
        return super.getInfo() + `, length= ${this._length}, width = ${this._width}`;
    }

    calculateArea(): number {
        return this._length * this._width;
    }
}