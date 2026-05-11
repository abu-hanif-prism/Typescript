// object destructuring
const user = {
    id : 12345,
    name : {
        firstName : "Abu",
        lastName : "Hanif"
     },
    age : 30
    }
// not a efficient way to access the properties of the object
// const userfirstName = user.name.firstName;
// const userlastName = user.name.lastName;
// const userID = user.id;
// const userAge = user.age;

const {id:UserID, name:{firstName:UserFirstName, lastName:UserLastName}, age:UserAge} = user; // object destructuring
// you have to define all the properties of the object in the destructuring assignment, otherwise it will throw an error
console.log("User ID:", UserID); // Output: User ID: 12345
console.log("User Name:", UserFirstName, UserLastName); // Output: User Name: { firstName: 'Abu', lastName: 'Hanif' }
console.log("User Age:", UserAge); // Output: User Age: 30  


// array destructuring

const  friends: string[] = ["Alice", "Bob", "Charlie"];
// not a efficient way to access the elements of the array
// const friend1 = friends[0];
// const friend2 = friends[1];
// const friend3 = friends[2];  

const [friend1, friend2, friend3] = friends; // array destructuring
console.log("Friend 1:", friend1); // Output: Friend 1: Alice
console.log("Friend 2:", friend2); // Output: Friend 2: Bob
console.log("Friend 3:", friend3); // Output: Friend 3: Charlie