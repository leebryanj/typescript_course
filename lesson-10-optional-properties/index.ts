/*
    When creating object types, you can define some of the properties to be optional.
    This comes with a caveat. When deciding whether something should be optional, TypeScript comes with a number of ways that you can relax that (type) rigidity nature. Ask youself, "Do I really need this to be flexible?".
    Flexibility comes with the trade-off of reduced type safety.

    To make a property optional: Add a "?" after the property name that's going to be optional.

    Adding optional properties is a legitimate and common thing to do in TypeScript, but we do reduce our type safety a little bit.
*/
type Address = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string,
    age: number,
    isStudent: boolean,
    address?: Address // address is optional now
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    // no address
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
    address: {
        street: "123 Main",
        city: "Anytown",
        country: "USA"
    }
}

function displayInfo(person) {
    console.log(`${person.name} lives at ${person.address?.street}`)
}
// We didn't add any type safety to our function.
// We can technically get rid of the below TypeError function by adding a ? after address ${person.address?.street}
// However, this solution isn't great, as our solution console.log will show undefined

displayInfo(person1); // but person1 does not have address, and we get a TypeError