//* ****************************************************
//* 📌 Libuv In Node JS
//* ****************************************************


//* 📌 What is Libuv?
    // 1️⃣ Libuv (short for "library UV") is a multi-platform C library thats provides support for handle asynchronous I/O operations
    // like reading files, making network requests, and timers in a fast and efficient way.
    // 2️⃣ It is one of the core components of Node.js that makes it so powerful and efficient.


    //* 📌 Simple Explanation
        // Imagine "Node.js" as a "chef" cooking in a kitchen. The chef (Node.js) is great at giving orders, 
        // but "libuv" is the "helper" who does the heavy lifting—like chopping veggies (file operations) or 
        // fetching ingredients from the pantry (network calls)—without slowing the chef down. 
        // Libuv lets Node.js juggle multiple tasks at once without waiting around.


//* ****************************************************
//* 📌 Key Features of Libuv
//* ****************************************************

    // 1️⃣ Handles asynchronous operations like file I/O, networking, and timers.
    // 2️⃣ Manages the event loop, which is the heart of Node.js.
    // 3️⃣ Provides a thread pool for offloading heavy tasks (e.g., file system operations).
    // 4️⃣ Works on multiple platforms (Windows, macOS, Linux, etc.).


//* ****************************************************
//* 📌 Why is Libuv Important in Node.js?
//* ****************************************************

    // Node.js is designed to be non-blocking and event-driven, meaning it can handle many operations simultaneously
    // without waiting for one to finish before starting another. Libuv is the library that makes this possible.

    // ❎ Without Libuv:
        // Node.js would not be able to perform asynchronous operations efficiently.
        // It would block the main thread, making it slow and unresponsive.

    // ✅ With Libuv:
        // Node.js can handle thousands of connections simultaneously.
        // It can perform I/O operations (like reading files or making network requests) without blocking the main thread.


//* ****************************************************
//* 📌 How Libuv Works in Node.js?
//* ****************************************************

    // 1️⃣ When we run a Node.js app, it uses a single thread (the main "worker").
    // 2️⃣ The main thread is responsible for handling requests and events.
    // 3️⃣ For slow tasks (like reading a file or waiting for a database), Node.js hands them off to libuv.
    // 4️⃣ Libuv runs these tasks in the background using a "thread pool" (a group of extra helpers) or the operating system’s tools.
    // 5️⃣ Once the task is done, libuv tells Node.js, "Hey, I’m finished!" through the "event loop", and Node.js picks up the result.


    //* 📌 Simple Explanation
        // Think of it like ordering food at a restaurant: You (Node.js) place the order, the kitchen (libuv) cooks it in the back, 
        // and the waiter (event loop) brings it to you when it’s ready—all while you chat with friends (handle other tasks).


//* ****************************************************
//* 📌 Key Components of Libuv
//* ****************************************************

    // 1️⃣ Event Loop: Manages asynchronous operations like timers, I/O, and callbacks.
    // 2️⃣ Thread Pool: Handles heavy tasks like, like file I/O or network requests.
    // 3️⃣ Handles and Requests:
        // "Handles" represent long-lived objects (e.g., TCP sockets, timers).
        // "Requests" represent short-lived operations (e.g., writing to a file).


//* ****************************************************
//* 📌 Example 1: Reading a File (Using Libuv’s Thread Pool)
//* ****************************************************

    const fs = require("fs");

    // This runs right away
    console.log("Starting...");

    // Read a file asynchronously (libuv handles this in the background)
    fs.readFile("file.text", "utf-8", (err, data) => {
        if(err) {
            console.error("Error reading file: ", err);
            return;
        }
        console.log("File contents: ", data);
    });

    // This runs without waiting for the file
    console.log("Doing other stuff...");


    // Output:
        // Starting...
        // Doing other stuff...
        // File contents: Hello, world!


    //* 📌 Explanation: What Happens Here?
        // 1️⃣ "console.log("Starting...")" is executed right away.
        // 2️⃣ "fs.readFile" is called, and Node.js hands the task to libuv.
        // 3️⃣ Libuv uses the thread pool to read "file.txt" in the background.
        // 4️⃣ Meanwhile, Node.js keeps going (prints "Doing other stuff...").
        // 5️⃣ When libuv finishes, it puts the result in the event loop, and the callback ((err, data) => ...) runs.


//* ****************************************************
//* 📌 Example 2: Setting a Timer (Using Libuv’s Event loop)
//* ****************************************************

    // Set a timer (libuv handles the timing)
    setTimeout(() => {
        console.log("Timer is done!");
    }, 2000);

    // This runs immediately
    console.log("Waiting for timer...");


    // Output:
        // Waiting for timer...
        // (2 seconds later)
        // Timer is done!


    //* 📌 Explanation: What Happens Here?
        // 1️⃣ "setTimeout" tells libuv, "Wait 2 seconds, then call this function."
        // 2️⃣ Libuv adds the timer to the event loop and watches the clock.
        // 3️⃣ Node.js keeps running (prints "Waiting for timer...").
        // 4️⃣ After 2 seconds, libuv says, "Time’s up!" and the callback runs.


//* ****************************************************
//* 📌 How Libuv Fits Everything Together?
//* ****************************************************

    // Imagine this flow:
        // You write simple Node.js code (e.g., "fs.readFile" or "setTimeout").
        // Node.js says, "Libuv, take care of this slow stuff."
        // Libuv does the work quietly in the background (using threads or OS tools).
        // The event loop checks with libuv: "Anything done yet?"
        // When libuv finishes, it hands the result back through a callback.


//* ****************************************************
//* 📌 Fun Facts to Remember
//* ****************************************************

    // Default Thread Pool Size: 
        // Libuv uses 4 threads by default for tasks like file operations. You can change this with "UV_THREADPOOL_SIZE" if you want.

    // Not Everything Uses Threads: 
        // Network stuff (like HTTP requests) often uses the OS directly, not the thread pool.