type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id: 1, name: "Margherita", price: 8 },
    { id: 2, name: "Pepperoni", price: 10 },
    { id: 3, name: "Hawaiian", price: 10 },
    { id: 4, name: "Veggie", price: 9 },
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza) {
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId: number) {
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the orderQueue`)
        return
    }
    order.status = "completed"
    return order
}

/*
Writing your projects in TypeScript will help you to remember to be as explicit as you can when writing your code.
*/
// Below, we state that identifier is either going to be a string or a number.
// We handle the case where the identifier is a string in the if clause, and therefore TypeScript can assume that the else clause will be of type number (from lesson 18 code).
export function getPizzaDetail(identifier: string | number) {
    if (typeof identifier === "string") {
        return menu.find(pizzaObj => pizzaObj.name.toLowerCase() === identifier.toLowerCase());
    } else if (typeof identifier === "number") {
        return menu.find(pizzaObj => pizzaObj.id === identifier);
    } else {
        throw new TypeError("Parameter `indentifier` must be either a string or a number");
    }
}

// However, in some projects the code we are writing may end up being used in a plain JavaScript file. Then the protection a file would normally get when we're using TypeScript won't exist.
// When writing our TypeScript code, try to be as explicit as you can (lesson 19 changes).


// addNewPizza({ id: 5, name: "Chicken Bacon Ranch", price: 12 })
// addNewPizza({ id: 6, name: "BBQ Chicken", price: 12 })
// addNewPizza({ id: 7, name: "Spicy Sausage", price: 11 })

// placeOrder("Chicken Bacon Ranch")
// placeOrder("Pepperoni")
// completeOrder(1)
// placeOrder("Anchovy")
// placeOrder("Veggie")
// completeOrder(2)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)