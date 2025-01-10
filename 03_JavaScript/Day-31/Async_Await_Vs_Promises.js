cart = ["pizza","coke","sandwich"];

function placeOrder(cart) {
    console.log("Talking to the Domino's service to place the order.");

    // Return a Promise to handle the asynchronous task of placing the order
    const promises = new Promise(function(resolve,reject) {
        setTimeout(() => {
            const food_available = true;
                if(food_available) {
                    console.log("Order Placed Succesfully");
                    const order = {orderId: 221, food: cart, restaurant: "Dominos", location: "Dwarka"}
                    resolve(order);
                }
                else {
                    reject("Food is not available");
                }
        }, 2000);
    });
    return promises;
};

function preparingOrder(order) {
    console.log("Order preparation started....");

    // Return a Promise to handle the asynchronous task of preparing the order
    const promises = new Promise(function(resolve, reject) {
        setTimeout(() => {
            const order_ready = true;
            if(order_ready) {
                console.log("Your order is ready.");
                const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location};
                resolve(foodDetails);
            }
            else {
                reject("Order is still preparing...");
            }
        }, 5000);
    });
    return promises;
};

function pickupOrder(foodDetails) {
    console.log("Reaching restaurant for picking order.")
    
    // Return a Promise to handle the asynchronous task of pickupping the order
    const promises = new Promise(function(resolve){
        setTimeout(() => {
            const delivery_available = true;
            if(delivery_available) {
                console.log("Your order has been picked up.");
                const droplocation = foodDetails.location;
                resolve(droplocation);
            }
            else {
                reject("We are not able to deliver your order");
            }
        }, 3000);
    });
    return promises;
};

function deliverOrder(droplocation) {
    console.log("Your order is on the way.");

    setTimeout(() => {
        console.log(`Order Delivered succesfully at ${droplocation}`);
        console.log("Enjoy your food.");
    }, 5000)
}


//* *****************************************************************************
//* Async function to handle the entire order flow using async/await
//* *****************************************************************************

async function orderFood() {
    try {
        const order = await placeOrder(cart);
        const foodDetails = await preparingOrder(order);
        const droplocation = await pickupOrder(foodDetails);
        deliverOrder(droplocation);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

// Calling the async function
orderFood();



//* *****************************************************************************
//* Alternative: Using Promises to handle the order flow without async/await
//* *****************************************************************************

placeOrder(cart)
    .then(order => preparingOrder(order))
    .then(foodDetails => pickupOrder(foodDetails))
    .then(droplocation => deliverOrder(droplocation))
    .catch(error => console.log(error));


//* Output:
// Talking to the Domino's service to place the order.
// Order Placed Succesfully
// Order preparation started....
// Your order is ready.
// Reaching restaurant for picking order.
// Your order has been picked up.
// Your order is on the way.
// Order Delivered succesfully at Dwarka
// Enjoy your food.


//* *****************************************************************************
// Above both code work perfectly. But using async/await over promises is more readable and maintainable.
// Here are some reasons why async/await is better than using Promises with .then() chains.
//* *****************************************************************************

// 1. Readable Code
    // Async/await makes asynchronous code look like synchronous code, making it easier to read and understand.

// 2. Better Error Handling
    // Errors are handled in one place using "try/catch", instead of needing ".catch()" after a chain of ".then()".

// 3. Avoids Nesting
    // Async/await keeps the code flat and avoids the "pyramid of doom" caused by nested ".then()" calls.

// 4. Easier to Debug
    // Async/await makes debugging easier by providing a single point of failure rather than multiple ".catch()" blocks.

// 5. Better Flow Control
    // Async/await scales better for handling multiple sequential asynchronous tasks, keeping the code simple and maintainable.
