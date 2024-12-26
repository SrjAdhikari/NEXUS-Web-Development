// Get the input box for handling keydown and keyup events by their ID
const keydownBox = document.getElementById('KeydownBox');
const keyupBox = document.getElementById('KeyupBox');

// Get the paragraph element where the keydown and keyup event output will be displayed
const outputKeydown = document.getElementById('KeydownOutput');
const outputKeyup = document.getElementById('KeyupOutput');


// Add an event listener to the keydown input box
// This triggers when a key is pressed down in the input box
keydownBox.addEventListener('keydown', (event) => {
    // Display the key and code of the pressed key in the output element
    outputKeydown.innerHTML = `Key Pressed : ${event.key}<br> Key Code : ${event.code}`;
});


// Add an event listener to the keyup input box
// This triggers when a key is released in the input box
keyupBox.addEventListener('keyup', (event) => {
    // Display the key that was released in the output element
    outputKeyup.innerHTML = `Key Released : ${event.key}<br> Key Code : ${event.code}`;
});