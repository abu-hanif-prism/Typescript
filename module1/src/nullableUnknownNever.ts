// nullable type

const getUser = (input: string | null) => {
    if (input) {
        console.log(`From DB : ${input}`);
    }
    else {
        console.log("From DB : All USER");
    }
}   

getUser("Alice");
getUser(null);


// unknown type

const discountCalculator = (input: unknown) => {
    if (typeof input === "number") {
        console.log(`Discounted Price: ${input * 0.9}`);
    } else if (typeof input === "string") {
        const [discount] = input.split(" ");
        console.log(Number(discount) * 0.9);
    }
};

discountCalculator(100);
discountCalculator("100 tk");
discountCalculator(null);


// void type

const throwError = (message: string): never => {
    throw new Error(message);
}
throwError("This is an error message.");
