//* ****************************************************
//* 📌 HTTP Status Code
//* ****************************************************


//* 📌 Commonly Used HTTP Status Code
    // 200  =>  (OK)                     :   Success, here’s your data.
    // 201  =>  (Created)                :   Successfully created something new.
    // 204  =>  (No Content)             :   Done, no data to return.
    // 301  =>  (Moved Permanently)      :   New permanent URL.
    // 302  =>  (Found)                  :   Temporary redirect.
    // 304  =>  (Not Modified)           :   Use cached version.
    // 400  =>  (Bad Request)            :   Client sent bad data (Validation error).
    // 401  =>  (Unauthorized)           :   Login required (Authentication failed).
    // 403  =>  (Forbidden)              :   Access denied.
    // 404  =>  (Not Found)              :   Resource not found.
    // 405  =>  (Method Not Allowed)     :   Wrong HTTP method.
    // 500  =>  (Internal Server Error)  :   Server crashed.
    // 502  =>  (Bad Gateway)            :   Upstream server failed.
    // 503  =>  (Service Unavailable)    :   Server down.
    // 504  =>  (Gateway Timeout)        :   Server took too long.


//* ****************************************************
//* 📌 Common HTTP Status Codes
//* ****************************************************

    // HTTP status codes are grouped into five categories based on their first digit. 
    // Here’s a list of the most used ones, with examples:

    //* 1xx. Informational Responses
        // Temporary responses during request processing.

        // 100 Continue: Server received request headers, client should send body.
        // 101 Switching Protocols: Server agrees to switch protocols (e.g., HTTP → WebSocket).
        // 102 Processing: Server is still processing the request (used for long-running operations).


    //* 2xx. Successful Responses
        // Request was successfully received, understood, and processed.

        // 200 OK: "Everything worked! Here’s your data." Example: Getting a webpage.
        // 201 Created: "I made something new for you!" Example: Adding a user with POST.
        // 204 No Content: "Done, but nothing to send back." Example: Deleting something successfully.


    //* 3xx. Redirection Messages
        // Client must take additional action to complete the request.

        // 301 Moved Permanently: "Resource permanently moved to a new URL". Example: Old page redirects to a new one.
        // 302 Found: "Resource temporarily moved". Example: Redirecting to a login page.
        // 304 Not Modified: "No changes since last time—use your cache." Example: Browser reuses a cached image.


    //* 4xx. Client Errors
        // Client sent an invalid request.

        // 400 Bad Request: "You sent something wrong (e.g., bad data)." Example: Missing a required field in a form.
        // 401 Unauthorized: "You need to log in". Example: Accessing a private page without a token.
        // 403 Forbidden: "You’re logged in, but not allowed here." Example: Trying to access admin features as a regular user.
        // 404 Not Found: "I can’t find what you asked for." Example: Visiting a nonexistent page.
        // 405 Method Not Allowed: "Wrong action for this URL." Example: Using POST on a GET-only route.
        // 429 Too Many Request: "Rate limit exceeded".


    //* 5xx. Server Errors
        // Server failed to fulfill a valid request.

        // 500 Internal Server Error: "I messed up—something broke!" Example: Code crashes unexpectedly.
        // 502 Bad Gateway: "I can’t reach another server I need." Example: API your app uses is down.
        // 503 Service Unavailable: "I’m too busy or down for maintenance." Example: Server overloaded.
        // 504 Gateway Timeout: "I waited too long for another server." Example: Database takes too long to respond.


//* ****************************************************
//* 📌 Pro Tips
//* ****************************************************

    // 200 vs 204: 
        // Use 204 when the response body is intentionally empty.

    // 401 vs 403:
        // 401 = "You didn't log in correctly"
        // 403 = "You're logged in but not allowed"

    // 301 vs 308: 
        // Both indicate permanent moves, but 308 preserves the HTTP method.

    // Always include a body with 4xx/5xx errors to help clients debug:
        // {"error": "Invalid API key", "code": "auth-001"}


//* ****************************************************
//* 📌 Visual Cheat Sheet
//* ****************************************************

    // 1xx: Hold on, processing...
    // 2xx: Here's what you wanted!
    // 3xx: Go look somewhere else
    // 4xx: You (Client) messed up
    // 5xx: We (Server) messed up