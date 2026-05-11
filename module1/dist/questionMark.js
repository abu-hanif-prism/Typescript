"use strict";
// ? : tarnary operator ; deision making operator
// ?? : nullish coalescing operator 
// optional chaining operator
Object.defineProperty(exports, "__esModule", { value: true });
// ? : tarnary operator ; deision making operator
let userAge = 21;
const biyerJonneEligible = (age) => {
    // if (age >= 18) {
    //     console.log("You are eligible to Biye.");
    // }
    // else {
    //     console.log("You are not eligible to Biye.");
    // }
    const result = age >= 18 ? "You are eligible to Biye." :
        "You are not eligible to biye.";
    console.log(result);
};
biyerJonneEligible(20);
//  ?? : nullish coalescing operator : null or undefined hole default value set korar jonno use kora hoy
const userTheme = "dark"; // userTheme null or undefined hole default value "light" set hobe
const selectedTheme = userTheme ?? "light"; // userTheme null or undefined hole "light" set hobe
console.log(selectedTheme); // Output: "light"
// Optional chaining operator : object er property access korar somoy jodi oi property na thake tahole error dekhabe na, tar bodole undefined return korbe
const user = {
    name: "Alice",
    address: {
        city: "New York",
        country: "USA"
    }
};
console.log(user.address?.city); // Output: "New York"
console.log(user.address?.zipCode); // Output: undefined
//# sourceMappingURL=questionMark.js.map