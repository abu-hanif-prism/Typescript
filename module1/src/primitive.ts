// JS - TS
// string , number , boolean , undefined ,null
// never , unknown , void , any
let userName: string = " Abu Hanif ";
let userID: number = 12345.000567;
let isActive: boolean = true;
let userEmail: undefined = undefined;
let userAddress: null = null;   


// Print variables
console.log("User Name:", userName);
console.log("User ID:", userID);
console.log("Is Active:", isActive);
console.log("User Email:", userEmail);
console.log("User Address:", userAddress);

//userName = 123;     // Error: Type 'number' is not assignable to type 'string'.
//userID = "12345";  // Error: Type 'string' is not assignable to type 'number'.
//isActive = "true";  // Error: Type 'string' is not assignable to type 'boolean'.
//userEmail = "user@example.com";  // Error: Type 'string' is not assignable to type 'undefined'.
//userAddress = "123 Main St";  // Error: Type 'string' is not assignable to type 'null'.

userName.trim(); // Valid: 'Abu Hanif'
userName.split(" "); // Valid: ['Abu', 'Hanif']
userName.replace(" ", "_"); // Valid: 'Abu_Hanif'
userName.includes("Hanif"); // Valid: true

userID.toFixed(2); // Valid: '12345.00'
userID.toString(); // Valid: '12345.000567'
userID.toExponential(); // Valid: '1.23e+4'
userID.toString(16); // Valid: '3039' (hexadecimal representation)
userID.toPrecision(7); // Valid: '12345.00' (7 significant digits)


// String methods
console.log("Original:", userName);
console.log("trim():", userName.trim());
console.log("split():", userName.split(" "));
console.log("replace():", userName.replace(" ", "_"));
console.log("includes('Hanif'):", userName.includes("Hanif"));

// Number methods
console.log("Original:", userID);
console.log("toFixed(2):", userID.toFixed(2));
console.log("toString():", userID.toString());
console.log("toExponential():", userID.toExponential());
console.log("toString(16):", userID.toString(16));
console.log("toPrecision(7):", userID.toPrecision(7));