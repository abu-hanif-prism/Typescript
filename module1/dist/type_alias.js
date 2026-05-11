"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: { firstName: "Alice", lastName: "Smith" },
    gender: "female",
    age: 30,
    email: "example@example.com",
    address: {
        country: "USA",
        district: "Downtown",
        main: "123 Main St"
    }
};
const user2 = {
    name: { firstName: "Bob", lastName: "Johnson" },
    age: 25,
    email: "ghorardaim@example.com",
    gender: "male",
    address: {
        country: "Canada",
        district: "Uptown",
        main: "456 Oak Ave"
    }
};
const userProfile1 = {
    id: 12345,
    name: "Alice Smith",
    email: "alice@example.com",
    address: "123 Main St"
};
const userProfile2 = {
    id: 67890,
    name: "Bob Johnson",
    email: "jgkldsjflk@glkldsk.com,",
    address: "456 Oak Ave"
};
const add = (x, y) => x + y; // Valid: add(2, 3) returns 5
const subtract = (x, y) => x - y; // Valid: subtract(5, 2) returns 3
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y; // Valid: divide(10, 2) returns 5
console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
console.log(multiply(4, 6)); // Output: 24
console.log(divide(10, 2)); // Output: 5
//# sourceMappingURL=type_alias.js.map