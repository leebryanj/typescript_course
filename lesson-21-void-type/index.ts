/*
There's another return type that isn't quite as obvious (compared to something like : Pizza | undefined that we have below). That is when you have a function that doesn't return anything.

Our addNewPizza function currently doesn't return anything. The inferred return type is called void. The function modifies the menu by pushing new objects to it, but then there's no return from it. One way we can be more explicit is by excplicitly typing it as returning type : void
It doesn't change the way the function operates. If you tried to save the return value from addNewPizza, you would get undefined.

*/
type Pizza = {
    id: number,
    name: string,
    price: number
}

type Order = {
    id: number,
    pizza: Pizza,
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100;
let nextOrderId = 1;
const orderQueue: Order[] = [];

function addNewPizza(pizzaObj: Pizza): void { // excplicitly returning type void
    menu.push(pizzaObj);
}

/**
 * Challenge: add explicit return types to the rest of our functions
 */

function placeOrder(pizzaName: string): Order | undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder);
    return newOrder;
}

function completeOrder(orderId: number): Order | undefined {
    const order = orderQueue.find(order => order.id === orderId);
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`);
        return;
    }
    order.status = "completed";
    return order;
}

export function getPizzaDetail(identifier: string | number): Pizza | undefined {
    if (typeof identifier === "string") {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase());
    } else if (typeof identifier === "number") {
        return menu.find(pizza => pizza.id === identifier);
    } else {
        throw new TypeError("Parameter `identifier` must be either a string or a number");
    }
}

// addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 });
// addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 });
// addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 });

// placeOrder("Chicken Bacon Ranch");
// placeOrder("Pepperoni");
// completeOrder(1);
// placeOrder("Anchovy");
// placeOrder("Veggie");
// completeOrder(2);

// console.log("Menu:", menu);
// console.log("Cash in register:", cashInRegister);
// console.log("Order queue:", orderQueue);