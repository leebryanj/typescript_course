/* 
"Happy Path" Code: 
- Assumes everything will work perfectly.
- Easiest code to write.
"Sad Path"
- Assumes problems may occur.
- A more "defensive" way to write code.
- Not as esay - have to think of edge cases.

TypeScript helps writing for the sad path significantly easier.
*/
const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 }
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue = [];


function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name == pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return; // return (or throwing error) satisfies TypeScript as next section of code won't be reached if selectedPizza does not exist.
    }
    cashInRegister += selectedPizza.price; // selectedPizza is possibly undefined. TypeScript warns us.
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
completeOrder("1"); // Here we hit the limit of how much TypeScript can help us without defining types, and just changing the file to .ts (String "1").

console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);