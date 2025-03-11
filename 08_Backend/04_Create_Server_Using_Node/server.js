//* ****************************************************
//* 📌 Basic HTTP Server
//* ****************************************************

    // import Node’s HTTP module
    const http = require("http");

    // create a server
    const server = http.createServer((request, response) => {
        // write a response to the client
        response.write("Hello, I am a server!");

        // end the response
        response.end();
    });

    // start the server on port 3000
    server.listen(3000, () => {
        console.log("Server running at http://localhost:3000");
    });


//* ****************************************************
//* 📌 Handling Different Routes
//* ****************************************************

    // Create an another server
    const anotherServer = http.createServer((request, response) => {
        // write a response to the client based on the URL
        if(request.url === "/")
            response.write("Welcome to Home Page");
        else if(request.url === "/about")
            response.write("Welcome to About Page");
        else if(request.url === "/contact")
            response.write("Welcome to Contact Page");
        else
            response.write("404 - Page Not Found!");

        // end the response
        response.end();
    });

    // start the server on port 3001
    anotherServer.listen(3001, () => {
        console.log("Server running at http://localhost:3001");
    });