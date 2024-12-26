// Array of messages
const messages = [
    "Hi", "Hello", "Hey", "Yo", "Hola", "Hiya", "Howdy", "Heya", "Ahoy", "Sup",
    "Ola", "Hi there", "G'day", "Salute", "Yoho", "Hi hi", "Greetings", "Ciao", "Hallo", "Namaste"
];


// Add a click event listener to the body
document.body.addEventListener("click", (event) => {
    // Create a new div element
    const div = document.createElement("div");
    div.className = "circle";

    // Set a random message from the array
    div.textContent = messages[Math.floor(Math.random() * messages.length)];

    // Get the x and y coordinates of the click event
    const x = event.clientX;
    const y = event.clientY;

    // Set the position of the div element
    div.style.left = `${x - 25}px`;
    div.style.top = `${y - 25}px`;

    // Generate a random color
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    div.style.background = `${randomColor}`;

    // Append the div element to the body
    document.body.appendChild(div);

    // Remove the div element after 3 seconds
    setTimeout(() => div.remove(), 3000);
});