/*
TypeScript is a superset of JavaScript, so any JavaScript code we write is legitimate TypeScript code.
*/
// In vanilla JS, we can just write:
let myName = "Bob"; // TS is able to infer the data type for the variable we just created.
myName = 5; // this causes a red squiggle (reassign a number value to a variable that was originally string)

let myTypedName: string = "Bob";

// Primitive Data Types: string, number, boolean
// Challenge: Explicitly type the variables below:
let numberOfWheels: number = 4;
let isStudent: boolean = false;