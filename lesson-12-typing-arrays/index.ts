/*
    Simple put a set of empty square brackets [] after the type: number[]
    This is how we teach TypeScript that ages should always be an array that consists only of number elements.
    TypeScript can also infer an array of a certain type, just like it could with primitive types.
    It's good to allow TypeScript to do as much inference as it can, especially for primitive types.
    However for custom data types, adding it explicitly makes it easier to read in the future and work with.
*/
// You can manually type primitive types in TypeScript:
let age: number = 100;

// There's a similar syntax when typing arrays
let ages: number[] = [100, 101]

type Person = {
    name: string,
    age: number,
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
}

/**
 * Challenge: create an array of people objects and
 * manually type it as an array of Person types
 */

let people: Person[] = [person1, person2];

// let people: Array<Person> is this same as the above let people: Person[]
// Will talk about this more when we look at generics.