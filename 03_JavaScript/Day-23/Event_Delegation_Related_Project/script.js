//* ****************************************************
//* 1. Brute Force Solution
//* ****************************************************

/*
    Get all the individual buttons
    const orangered = document.getElementById('orangered');
    const green = document.getElementById('green');
    const tomato = document.getElementById('tomato');
    const violet = document.getElementById('violet');
    const orange = document.getElementById('orange');

    Add event listener to all the buttons
    orangered.addEventListener("click", () => {
        document.body.style.backgroundColor = "orangered";
    });

    green.addEventListener("click", () => {
        document.body.style.backgroundColor = "green";
    });

    tomato.addEventListener("click", () => {
        document.body.style.backgroundColor = "tomato";
    });

    violet.addEventListener("click", () => {
        document.body.style.backgroundColor = "violet";
    }); 

    orange.addEventListener("click", () => {
        document.body.style.backgroundColor = "orange";
    })
*/


//* ****************************************************
//* 2. Using forEach Loop (Less Optimized)
//* ****************************************************

/*
    Get the all the buttons
    const buttons = document.querySelectorAll("button");

    Iterate over the each buttons and add event listener to them
    buttons.forEach((button) => {
        button.addEventListener("click", () =>{
            document.body.style.backgroundColor = button.id;
        });
    });
*/


//* ****************************************************
//* 3. Using Event Delegation (Most Optimized)
//* ****************************************************

// Get the root element
const root = document.getElementById("root");

// Add event listener to the parent element "root"
root.addEventListener("click", (e) => {
    // Get the target element
    const target = e.target;

    // Change the background color only if the target element is a button
    if(target.tagName === "BUTTON")
        document.body.style.backgroundColor = target.id;
});


//* Explanation:
// 1. Instead of adding individual "click" event listeners to each button, added one listener to their common parent, the "root".
// 2. When clicked on a child element (like a button), the event bubbles up to its ancestors, triggering the listener on the parent (root) as well.
// 3. The "e.target" property allows us to determine the exact child element that was clicked, even though the listener is on the parent.
// 4. If the clicked element is a button (target.tagName === "BUTTON"), the code changes the background color of the body.