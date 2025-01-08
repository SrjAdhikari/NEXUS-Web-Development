//* ****************************************************
//* Web API In JavaScript
//* ****************************************************


//* What is Web API ?
// The Web API (Application Programming Interface) is a set of built-in functions, objects, and methods provided by browsers (or the web environment) 
// that allow developers to interact with the browser or the system in which their JavaScript code is running.

// A Web API is not part of the JavaScript language itself.
// Instead, it is provided by the browser or environment where the JavaScript code is executed.


//* ****************************************************
//* Categories of Web APIs
//* ****************************************************

// 1. Document Object Model (DOM) API
    // ● Allows interaction with HTML and XML documents.
    // ● Example:
        // Manipulating elements (document.querySelector, element.textContent).
        // Handling events (addEventListener).

// 2. Browser APIs
    // ● APIs provided by the browser for specific tasks.
    // ● Example:
        // Fetch API for HTTP requests.
        // Storage API (localStorage, sessionStorage).
        // Console API (console.log, console.error).

// 3. Multimedia APIs
    // ● Working with audio and video.
    // ● Example:
        // MediaStream API for accessing cameras/microphones.
        // Web Audio API for audio processing.

// 4. Geolocation APIs
    // ● Working with location.
    // ● Example:
        // Geolocation API for getting the user's location.

// 5. Canvas and Graphics APIs
    // ● Used for drawing graphics on the web.
    // ● Example:
        // Canvas API for drawing on a canvas element.
        // Graphics API for working with images and animations.

// 6. Networking APIs
    // ● Handling communication between client and server.
    // ● Example:
        // Fetch API for making HTTP requests.
        // WebSocket API for real-time communication.
        // XMLHttpRequest API for making HTTP requests.

// 7. Storage APIs
    // ● Used for storing data in the browser.
    // ● Example:
        // localStorage: Persistent storage for key-value pairs.
        // sessionStorage: Temporary storage for key-value pairs.

// 8. Worker APIs
    // ● Allow running JavaScript in the background (multi-threading).
    // ● Example:
        // Worker API for running JavaScript in the background.


//* ****************************************************
//* How Web API Works ?
//* ****************************************************

// When we call a Web API method (like setTimeout, fetch, or addEventListener), here's what happens:

// 1. JavaScript Makes a Request
    // ● JavaScript code sends a request to the Web API provided by the browser.
    // ● Example:
        console.log("Start");
        setTimeout(() => console.log("Delayed message"), 1000);
        console.log("End");

// 2. Web API Processes the Request
    // ● The Web API recieves the request and processes the request asynchronously in the background.
    // ● For Example:
        // setTimeout waits for 1 second before executing the callback.
        // fetch sends a network request and waits for the server's response.

// 3. Callback Queue and Event Loop
    // ● Once the task is completed, the Web API sends the result back to JavaScript using the callback queue.
    // ● The event loop ensures that these tasks are executed in the correct order without blocking the main thread (call stack).


//* ****************************************************
//* Diagram: How Web APIs Work
//* ****************************************************

// 1. JavaScript Code: Calls the Web API.
// 2. Web API: Performs the requested task in the background.
// 3. Callback Queue: Stores the callback or result when the task is done.
// 4. Event Loop: Pushes the callback into the main thread (call stack) for execution when it's free.

/*
    1. JavaScript Engine
        ↓
    2. Web API (e.g., setTimeout, fetch, etc.)
        ↓
    3. Callback Queue
        ↓
    4. Event Loop
        ↓
    5. JavaScript Main Thread (call stack)
*/


//* ****************************************************
//* Why use Web API ?
//* ****************************************************

// 1. Interact with the web page (e.g., dynamically changing content using the DOM API).
// 2. Communicate with servers (e.g., fetching data using the Fetch API).
// 3. Access browser capabilities (e.g., local storage, notifications, etc.).
// 4. Enhance user experience by leveraging native features like geolocation or drag-and-drop.


//* ****************************************************
//* Examples of Interaction Between JS and Web APIs
//* ****************************************************

//* 1. setTimeout
console.log("Start");

setTimeout(() => {
    console.log("This is a delayed message");
}, 2000);

console.log("End");


//* Execution Flow:
// 1. console.log("Start") runs and prints "Start".
// 2. "setTimeout" is called. It delegates the task to the Web API and immediately continues with the next line.
// 3. console.log("End") runs and prints "End".
// 4. After 2 seconds, the Web API places the callback ("Delayed message") in the "callback queue".
// 5. The "event loop" picks up the callback and executes it, printing "This is a delayed message".


//* Output:
// Start
// End
// This is a delayed message


//* 2. fetch
console.log("Start");

const fetchData = fetch(`https://jsonplaceholder.typicode.com/posts/1`);
fetchData
    .then(response => response.json())
    .then(data => console.log(data));

console.log("End");


//* Execution Flow:
// 1. console.log("Start") runs and prints "Start".
// 2. "fetch" is called, and the browser handles the HTTP request in the background.
// 3. console.log("End") runs and prints "End".
// 4. Once the HTTP response is received, the "then" callback is placed in the "callback queue".
// 5. The "event loop" picks up the callback and executes it,  printing the fetched data.


//* ****************************************************
//* Key Components in Web API Workflow
//* ****************************************************

// 1. Main Thread:
    // Executes the JavaScript code.
    // Delegates tasks like timers, HTTP requests, and event listeners to the Web API.

// 2. Web API:
    // Handles tasks like waiting for a timeout, sending HTTP requests, or listening for events.
    // Does not block the main thread.

// 3. Callback Queue:
    // Holds tasks that are ready to be executed after the Web API finishes its work.

// 4. Event Loop:
    // Monitors the main thread (call stack) and callback queue.
    // Pushes tasks from the callback queue to the call stack when it's idle.