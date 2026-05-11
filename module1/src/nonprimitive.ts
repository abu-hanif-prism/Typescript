// array ,object ,function ,class ,interface ,type alias ,enum ,tuple

let bazarList: string[] = ["Rice", "Dal", "Oil", "Salt"];
console.log(bazarList);
bazarList.push("Sugar"); // Valid: bazarList is now ["Rice", "Dal", "Oil", "Salt", "Sugar"]
console.log(bazarList); // Output: ["Rice", "Dal", "Oil", "Salt", "Sugar"]
bazarList.pop(); // Valid: bazarList is now ["Wheat", "Dal", "Oil", "Salt"]
console.log(bazarList);
//------------------------------------------------------------
bazarList[0] = "Wheat"; 
console.log(bazarList);
bazarList.unshift("Flour"); 
console.log(bazarList);
bazarList.splice(2, 1);   
console.log(bazarList);

// we cant assign a number to bazarList because it is an array of strings
// bazarList[0] = 123; // Error: Type 'number' is not assignable to type 'string'.
// bazarList.push(456); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.    
console.log("------------------------------------------------------------");

// 2 (mix array)
let mixedList: (string | number)[] = ["Rice", 123, "Dal", 456];
console.log(mixedList);
mixedList.push("Oil");
console.log(mixedList);
mixedList.push(789);
console.log(mixedList);
mixedList[1] = "One Two Three";
console.log(mixedList);
mixedList[4] = 789;
console.log(mixedList);

// tuple
console.log("------------------------------------------------------------");
let userInfo: [string, number] = ["Abu Hanif", 12345];
console.log(userInfo);
userInfo[0] = "John Doe";
userInfo[1] = 67890;
console.log(userInfo);
// userInfo[2] = 'hanif'
// userInfo[2] = true; // Error: Tuple type '[string, number]' of length '2' has no element at index '2'.



// object
console.log("------------------------------------------------------------");
let user: { firstname: string;
        MiddleName?: string; // optional property
        lastName: string;
        id: number;
        isActive: boolean;
        //organization:"programming hero"; // value type
        readonly organization: string; // can not be changed after initialization
         
    } = {
    firstname: " Abu",
    lastName: "Hanif",
    id: 12345,
    isActive: true,
    organization: "programming hero"
};
console.log(user);
console.log("------------------------------------------------------------");


user.firstname = " John ".trim(); // Valid: 'John'
user.MiddleName = " Doe ".trim(); // Valid: 'Doe'
user.lastName = " Doe ".trim(); // Valid: 'Doe'
user.id = 67890; // Valid: 67890
user.isActive = false; // Valid: false
console.log(user);

console.log("------------------------------------------------------------");


user.firstname = " John ".trim(); // Valid: 'John'
//user.MiddleName = undefined;
user.lastName = " Doe ".trim(); // Valid: 'Doe'
user.id = 67890; // Valid: 67890
user.isActive = false; // Valid: false
console.log(user);