type User = {
    name: { firstName: string; lastName: string; };
    age: number; 
    email: string;
    gender: "male" | "female";
    address: {
        country: string;
        district: string; 
        main?: string; 
    }

}
const user1: User
 = { 
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

const user2: User = {
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

type UserID = number;
type UserName = string;
type UserEmail = string;
type UserAddress = string;
type UserProfile = {
    id: UserID;
    name: UserName;
    email: UserEmail;
    address: UserAddress;
}

const userProfile1: UserProfile = {
    id: 12345,
    name: "Alice Smith",
    email: "alice@example.com",
    address: "123 Main St"
};  
const userProfile2: UserProfile = {
    id: 67890,
    name: "Bob Johnson",
    email: "jgkldsjflk@glkldsk.com,",
    address: "456 Oak Ave"
};

// Type Aliases for function

type Func = (a: number, b: number) => number;

const add: Func = (x, y) => x + y; // Valid: add(2, 3) returns 5
const subtract: Func = (x, y) => x - y; // Valid: subtract(5, 2) returns 3
const multiply: Func = (x, y) => x * y;
const divide: Func = (x, y) => x / y; // Valid: divide(10, 2) returns 5

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
console.log(multiply(4, 6)); // Output: 24
console.log(divide(10, 2)); // Output: 5
