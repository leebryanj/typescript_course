import { getPizzaDetail } from "./index.ts";

console.log(getPizzaDetail(1)); // this works

// However, nothing stops this JavaScript file from doing something weird:
console.log(getPizzaDetail(false));
// The above returns undefined (from lesson 18 code)
// No compile-time warnings 
// After lesson 19 changes, we get the TypeError we throw

