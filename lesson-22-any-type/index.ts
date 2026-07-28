/*
TypeScript any type
If you type something with any, you're essentially turning off TypeScript checking for that value. Generally not a good idea.

When should I use any?
In short: Don't.
One legitimate use-case: you're in the process of transitioning a code base from JavaScript to TypeScript and don't immediately have the time to write all your complex types. So, you just need a way to "get around TypeScript" for now.
*/

// TypeScript can infer that value is of type number
let value = 1;

// We have essentially turned off TypeScript checking on anyValue
let anyValue: any = 1;
anyValue = "Hi"; // changing anyValue to a string now works
anyValue.map() // even no warnings here