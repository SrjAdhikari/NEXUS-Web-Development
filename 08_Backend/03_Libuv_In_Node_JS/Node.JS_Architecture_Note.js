//* ****************************************************
//* 📌 Node.js Architecture
//* ****************************************************


//* 📌 What is Node.js?
    // Node.js is a runtime environment that allows us to run JavaScript outside of a web browser.
    // It’s commonly used for building server-side applications, APIs, and tools.
    // Node.js uses the V8 JavaScript engine (same engine used by Google Chrome) to execute JavaScript code.

    //* Key Features:
        // Non-blocking I/O (asynchronous)
        // Event-driven architecture
        // Single-threaded
        // Cross-platform


//* ****************************************************
//* 📌 Key Components of Node.js Architecture
//* ****************************************************

    // 1️⃣ V8 Engine
        // The JavaScript engine that compiles JavaScript code into machine code.
        // The brain that runs your JavaScript code fast.

    // 2️⃣ Libuv
        // Libuv is a multi-platform C library that provides asynchronous I/O support.
        // It manages the event loop, thread pool, and handles operations like file I/O, networking, and timers.

    // 3️⃣ Event Loop
        // The event loop is the heart of Node.js. It decides when to run tasks.
        // It handles asynchronous operations like I/O, timers, and callbacks.

    // 4️⃣ Thread Pool
        // A small team of workers for heavy tasks like file I/O operations in the background.
        // Libuv provides a thread pool with a default size of 4 threads.

    // 5️⃣ Node.js Bindings
        // The bridge that connects JavaScript to libuv and other low-level stuff.
        // It allows Node.js to access operating system features and APIs.

    // 6️⃣ Core Modules
        // Node.js comes with built-in core modules like fs (file system), http (networking), path (file paths), and more.
        // These modules provide essential functionality for building applications.


//* ****************************************************
//* 📌 How Node.js Works?
//* ****************************************************

    // 1️⃣ Your Code Runs
        // You write JavaScript code and run it using Node.js.
        // Example:
            const fs = require('fs');

            fs.readFile('example.txt', 'utf8', (err, data) => {
                if (err) throw err;
                console.log(data);
            });
            
            console.log('Reading file...');

    // 2️⃣ V8 Engine Compiles Code
        // The V8 engine compiles your JavaScript code into machine code so the computer can execute it.

    // 3️⃣ Asynchronous Operations
        // When Node.js encounters an asynchronous operation (like fs.readFile), it offloads it to Libuv.
        // Libuv uses the event loop and thread pool to handle these operations.

    // 4️⃣ Event Loop
        // The event loop constantly checks for completed tasks (like file reading or network requests).
        // Once a task is complete, it places the result in the callback queue.

    // 5️⃣ Callback Execution
        // The event loop picks up the callback from the queue and executes it.
        // Example: The fs.readFile callback is executed once the file is read.


//* ****************************************************
//* 📌 Diagram of Node.js Architecture
//* ****************************************************

    // Here's a diagram to visualize the architecture of Node.js:
    /*
        [JS Code]               ← fs.readFile()
            ↓
            ↓
        [V8 Engine]             ← Runs your JS code, adds to Call Stack
            ↓
            ↓
        [Node.js Bindings]      ← Connects JS to libuv (Translates JS to C calls)
            ↓
            ↓
        [Libuv]                 ← Handles slow tasks (files, network)
        ├─── [Event Queue]      ← Holds pending tasks
        ├─── [Thread Pool]      ← 4 threads for file ops, etc.
        └─── [OS Async]         ← Network calls via epoll/IOCP
            ↓
            ↓
        [Event Loop]            ← Watches for completed tasks
        ├─── [Phase 1: Timers]
        ├─── [Phase 2: Pending Callbacks]
        ├─── [Phase 3: Poll (I/O)]
        ├─── [Phase 4: Check]
        └─── [Phase 5: Close]
            ↓
            ↓
        [Callbacks]             ← Runs your code when tasks are done
    */


//* ****************************************************
//* 📌 Example: Asynchronous File Reading
//* ****************************************************

    const fs = require('fs');

    console.log('Start reading file...');

    fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
    });

    console.log('End of script');


    //* 📌 Explanation: What Happens Here?
        // Node.js starts executing the script and logs "Start reading file...."
        // When it encounters "fs.readFile", it offloads the file reading task to Libuv.
        // Libuv uses the "thread pool" to read the file in the background.
        // Meanwhile, Node.js continues executing the next line and logs "End of script".
        // Once the file is read, Libuv places the result in the "event loop", and the callback is executed, logging the file content.


//* 📌 Summary
    // Node.js is a single threaded runtime environment for JavaScript.
    // Node.js is built on the "V8 engine" and uses "Libuv" for asynchronous I/O.
    // The "event loop" and "thread pool" enable Node.js to handle multiple tasks efficiently.
    // Node.js is "non-blocking", "event-driven", and "scalable", making it perfect for modern applications.