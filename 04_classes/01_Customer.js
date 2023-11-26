"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
let myCustomer = new Customer("Mohd", "Hafeez");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
/*
    let myCustomer = new Customer();
    myCustomer.firstName = "Mohd";
    myCustomer.lastName = "Hafeez"
*/
