"use strict";
class AccessorsExample {
    constructor() {
        this._firstName = "";
        this._lastName = "";
    }
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let example = new AccessorsExample();
example.firstName = "Mohammed";
example.lastName = "Abdul Hafeez";
console.log(example.firstName);
console.log(example.lastName);
