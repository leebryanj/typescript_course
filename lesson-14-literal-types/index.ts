/*
    There is a difference with how TypeScript infers different types.
    A literal type is when you tell TypScript that the type isn't a generic string, which would allow that variable to become any string, but instead it's a literal type. A literal type is an actual value type of a certain string (eg. "Bob").
*/

let myName = "Bob"; // can be reassigned
const myName2 = "Bob"; // literal type, can't reassign
const myName3: "Bob" = "Bob"; // You can type a literal type

let myName4: "Bob" = "Bob"; // can't change this string to anything else, since it's also a literal type we explicitly defined

// Literal types are much more commonly found when paired with a concept called unions.