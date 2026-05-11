"use strict";
// nullable type
Object.defineProperty(exports, "__esModule", { value: true });
const getUser = (input) => {
    if (input) {
        console.log(`From DB : ${input}`);
    }
    else {
        console.log("From DB : All USER");
    }
};
getUser("Alice");
getUser(null);
// unknown type
const discountCalculator = (input) => {
    if (typeof input === "number") {
        console.log(`Discounted Price: ${input * 0.9}`);
    }
    else if (typeof input === "string") {
        const [discount] = input.split(" ");
        console.log(Number(discount) * 0.9);
    }
};
discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);
// void type
const throwError = (message) => {
    throw new Error(message);
};
throwError("This is an error message.");
//# sourceMappingURL=nullableUnknownNever.js.map