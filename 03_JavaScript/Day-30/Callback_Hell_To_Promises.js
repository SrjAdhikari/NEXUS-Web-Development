cart = ["pizza","coke","sandwich"];

// Function to place an order
function placeOrder(cart) {
    console.log("Talking to the Domino's service to place the order.");

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

// Function to prepare an order
function preparingOrder(order) {
    console.log("Order preparation started....");

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

// Function to pick an order
function pickupOrder(foodDetails) {
    console.log("Reaching restaurant for picking order.")
    
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

// Function to deliver an order
function deliverOrder(droplocation) {
    console.log("Your order is on the way.");

    setTimeout(() => {
        console.log(`Order Delivered succesfully at ${droplocation}`);
        console.log("Enjoy your food.");
    }, 5000)
}


// Using Promises to replace Callback Hell
placeOrder(cart)
    .then(order => preparingOrder(order))
    .then(foodDetails => pickupOrder(foodDetails))
    .then(droplocation => deliverOrder(droplocation))
    .catch(error => console.log(error));