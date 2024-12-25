// Access the container, button, h1, and output element
const container = document.querySelector("#container");
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const output = document.getElementById("clickOutput");


//******************* Click Event *******************

// When the user clicks on the button, the color, font size of the h1 element 
// And the background color of the container element changes.
button.addEventListener("click", () => {
    h1.style.color = "#fff";
    h1.style.fontSize = "3rem";
    container.style.backgroundColor = "#000";

    output.textContent = "You Clicked the Button";
})


//******************* dblclick Event *******************

// When the user double-clicks on the button, the background color, text color of the body 
// And border of the container element changes.
button.addEventListener("dblclick", () => {
    document.body.style.color = "#fff";
    document.body.style.backgroundColor = "#000";
    container.style.border = "8px solid #fff";

    output.textContent = "You Double-Clicked the Button";
})


//******************* Mouseover Event *******************

// When the user hovers over the button, the background color and text color of the button changes.
button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#fff";
    button.style.color = "#000";

    output.textContent = "You Hovered over the Button";
})

// When the user hovers over the container, the background color and text color of the container changes.
container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "#444";
    container.style.color = "#fff";
})


//******************* Mouseout Event *******************

// When the user moves the mouse away from the button, the background color, text color and border of the button changes.
button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#000";
    button.style.color = "#fff";
    button.style.border = "3px solid #b7b7b7";

    output.textContent = "You Left the Button";
})


//******************* Mousemove Event *******************

// When the user moves the mouse within the button, the mouse position inside the button is displayed in the console.
button.addEventListener("mousemove", (e) => {
    const x = e.clientX;            // Horizontal position of the mouse
    const y = e.clientY;            // Vertical position of the mouse

    output.textContent = `Mouse Position: X: ${x}, Y: ${y}`;
})