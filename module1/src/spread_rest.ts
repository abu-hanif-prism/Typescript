// spread  operation(for arrays)
const friends = ["Alice", "Bob", "Charlie"];
const newFriends = ["David", "Eve"];
const schoolFriends = ["Frank", "Grace"];

// friends.push(...schoolFriends); // Valid: Adds each element of schoolFriends to friends
// console.log("Friends List:", friends); // Output: Friends List: [ 'Alice', 'Bob', 'Charlie', 'Frank', 'Grace' ]

// friends.push(newFriends); // Error: Argument of type 'string[]' is not assignable to parameter of type 'string'. Did you mean to use the spread operator?
friends.push(...newFriends); // Valid: Adds each element of newFriends to friends
console.log("Friends List:", friends); // Output: Friends List: [ 'Alice', 'Bob', 'Charlie', 'David', 'Eve' ]


const person = [...friends, ...schoolFriends];
console.log("----------------------------------------------");
// spread operation for objects
const person1 = {
    name: "Alice",
    age: 25,
    city: "New York"
};
const hobbies = {
    hobby1: "Reading",
    hobby2: "Traveling"
};
const personWithHobbies = { ...person1, ...hobbies };
console.log("Person with Hobbies:", personWithHobbies);
// Output: Person with Hobbies: { name: 'Alice', age: 25, city: 'New York', hobby1: 'Reading', hobby2: 'Traveling' }
console.log("----------------------------------------------");
// rest operation for objects
const sendInvite = (...friends: string[])=>{
    friends.forEach(friend => {
        console.log(`Inviting ${friend} to the party!`);
    });
}  

sendInvite("Alice", "Bob", "Charlie");