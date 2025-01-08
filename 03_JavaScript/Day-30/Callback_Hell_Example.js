cart = ["pizza","coke","sandwich"];

function placeOrder(cart, callback){
    console.log("Talking to the Domino's service to place the order.");
    
    setTimeout(()=>{
        console.log("Order Placed Succesfully");
        const order = {orderId: 221, food: cart, restaurant: "Dominos", location:"Dwarka"}
        callback(order);
    },2000)
}

function preparingOrder(order, callback){
    console.log("Order preparation started....");

    setTimeout(()=>{
        console.log("Your order is ready.");
        const foodDetails = {token: 12, restaurant: order.restaurant, location: order.location};
        callback(foodDetails);
    },5000)
};

function pickupOrder(foodDetails, callback){
    console.log("Reaching restaurant for picking order.");

    setTimeout(()=>{
        console.log("Your order has been picked up.");
        const droplocation = foodDetails.location;
        callback(droplocation);
    },3000)
}

function deliverOrder(droplocation){
    console.log("Your order is on the way.");

    setTimeout(()=>{
        console.log(`Order Delivered succesfully at ${droplocation}`);
        console.log("Enjoy your food.");
    },5000)
}

// Callback Hell
placeOrder(cart , (order)=>{
    preparingOrder(order , (foodDetails)=>{
        pickupOrder(foodDetails, (droplocation)=>{
            deliverOrder(droplocation);
        });
    })
});


//* Simple working procedure of above callback hell.
// placeOrder(cart, callback);
// preparingOrder(order , callback);
// pickupOrder(foodDetails,callback);
// deliverOrder(droplocation);
