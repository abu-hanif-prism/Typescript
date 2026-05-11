"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// normal function declaration
function add(a, b) {
    return a + b;
}
console.log("Addition:", add(5, 10)); // Output: Addition: 15
// let subtract = (a, b): number {
//     return a - b; 
// } // implicitly typed parameters (any) and return type (number)
// console.log("Subtraction:", subtract(10, 5)); // Output: Subtraction: 5 
// arrow function expression
let subtract = (a, b) => a - b; // explicitly typed parameters and return type
console.log("Subtraction:", subtract(10, 5)); // Output: Subtraction: 5 
// method in an object , here we are using function expression to define the method
const poorUser = {
    name: "John",
    age: 30,
    balance: 1000,
    greet: function () {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    },
    getDonation: function (amount) {
        this.balance += amount;
        console.log(`Thank you for your donation of $${amount}. My new balance is $${this.balance}.`);
    }
};
console.log(poorUser.greet()); // Output: Hello, my name is John and I am 30 years old.
console.log("Initial Balance:", poorUser.balance); // Output: Initial Balance: 1000
poorUser.getDonation(500); // Output: Thank you for your donation of $500. My new balance is $1500.
// callback function
const arr1 = [1, 2, 3, 4, 5];
console.log("Original Array:", arr1); // Output: Original Array: [1, 2, 3, 4, 5]
const sqrArray = arr1.map((elem) => elem * elem); // using arrow function as callback
console.log("Squared Array:", sqrArray); // Output: Squared Array: [1, 4, 9, 16, 25]
//# sourceMappingURL=function.js.map