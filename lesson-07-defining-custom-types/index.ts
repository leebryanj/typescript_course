/*
We can create new types by using the type keyword.
By convention, the name that we give our type will start with a capital letter.
*/

// This example below is not very useful. Will talk about unions or intersections later.
type Food = string;

let favoriteFood: Food = "pizza";

// In this scenario, it is very handy for creating custom types around objects
// We create a custom type by telling what properties it will have, and what type for each property
type Person = {
    name: string,
    age: number,
    isStudent: boolean
}
// When creating the above custom type, you can use commas, semicolons, or nothing

// Then use our custom type below
let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false
}