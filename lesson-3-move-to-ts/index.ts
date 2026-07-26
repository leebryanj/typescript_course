/* When copying over JavaScript code from lesson-2, we see a lot of error squiggles right away when changing the file to a TypeScript file. TypeScript is showing us the problems in our code. Nothing about using TypeScript introduces new bugs. They are issues that already existed.
*/
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }
]

let cashInRegister = 100; // TypeScript lets us know that we can't reassign a const, so we can change this to a let
let nextOrderId = 1; // Here use let as well
const orderQueue = [];


function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name == pizzaName);
    cashInRegister += selectedPizza.price;
    const newOrder = { orderId: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId) {
    const order = orderQueue.find(order => order.orderId === orderId);
    order.status = "completed";
    return order;
}

addNewPizza({ name: "Chicken Bacon Ranch", cost: 12 });
addNewPizza({ name: "BBQ Chicken", cost: 12 });
addNewPizza({ name: "Spicy Sausage", cost: 11 });

placeOrder("Chicken Bacon Ranch");
completeOrder("1");

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);