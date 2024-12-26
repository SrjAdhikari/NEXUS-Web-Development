// Access the button, input, and paragraph element
const button = document.querySelector("button");
const input = document.querySelector("input");  
const output = document.querySelector("p");


//* ****************************************************
//* Accessing The Details Of The Different Event
//* ****************************************************


//******************* Click Event *******************

// Get the event details when the button is clicked
button.addEventListener("click", (e) => {
    const eventType = e.type;                   // Type of the event.
    const targetElement = e.target;             // Element that triggered the event.
    const currentTarget = e.currentTarget;      // Element where the event listener is attached.
    const tagName = e.target.tagName;           // Name of the HTML element that triggered the event.

    // Display the event details in the output element
    output.innerHTML = `Event Type : ${eventType}<br> Target Element : ${targetElement}<br>
                        Current Target : ${currentTarget}<br> Tag Name : ${tagName}`;
})


//******************* Keydown Event *******************

// Get the event details when a key is pressed
input.addEventListener("keydown", (e) => {
    const eventType = e.type;                   // Type of the event.
    const key = e.key;                          // Key that was pressed.
    const keyCode = e.code;                     // Key code of the key that was pressed.
    const targetElement = e.target;             // Element that triggered the event.
    const tagName = e.target.tagName;           // Name of the HTML element that triggered the event.

    // Display the key details in the output element
    output.innerHTML = `Event Type : ${eventType}<br> Key : ${key}<br> Key Code : ${keyCode}<br>
                        Target Element : ${targetElement}<br> Tag Name : ${tagName}`
})


//******************* Mouseover Event *******************

// Get the event details when the mouse hovers over the button
button.addEventListener("mouseover", (e) => {
    const eventType = e.type;                   // Type of the event.
    const targetElement = e.target;             // Element that triggered the event.
    const x = e.clientX;                        // Horizontal position of the mouse.
    const y = e.clientY;                        // Vertical position of the mouse.

    // Display the mouse position details in the output element
    output.innerHTML = `Event Type : ${eventType}<br> Target Element : ${targetElement}<br>
                        Mouse Position : X: ${x}, Y: ${y}`;
})


//******************* Mouseout Event *******************

// Get the event details when the mouse aways from the button
button.addEventListener("mouseout", (e) => {
    const eventType = e.type;                   // Type of the event.
    const targetElement = e.target;             // Element that triggered the event.
    const x = e.clientX;                        // Horizontal position of the mouse.
    const y = e.clientY;                        // Vertical position of the mouse.

    // Display the mouse position details in the output element
    output.innerHTML = `Event Type : ${eventType}<br> Target Element : ${targetElement}<br>
                        Mouse Position : X: ${x}, Y: ${y}`;
})