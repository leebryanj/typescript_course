/*
Generics <T>

Generics
1) Add flexibility to existing functions, types, etc.
2) Act like function parameters, but for types
3) Use angle bracket syntax (<>)

// For use with function, right before the parenthesis for our function parameters, we are going to add angle brackets
getLastItem<T>(array)
We put a placeholder inside the angle brackets for whatever type is going to be used with this function. A fairly strong convention is to use the letter T
*/

const gameScores = [14, 21, 33, 42, 59];
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }];

// array parameter in getLastItem(array) has implicit any type
// We can't say it's an array of an specific type.
// Type or T is a palceholder type.
// We can then use our generic Type (or T), to say our array will be of type Type (or T). Type/T is just a placeholder, we can call it anything we want.
/**
 * Challenge: figure out how to explicitly type the return value
 * of the function!
 */
function getLastItem<Type>(array: Type[]): Type | undefined {
    return array[array.length - 1];
}

/**
 * Mini-challenge: call `getLastItem` (and console.log the returned value)
 * on each of the 3 arrays above. Hover over different values to see what the Intellisense
 * says about the types for each one.
 */

console.log(getLastItem(gameScores));
console.log(getLastItem(favoriteThings));
console.log(getLastItem(voters));