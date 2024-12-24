//* ****************************************************
//* DOM In JavaScript
//* ****************************************************


//* What is DOM ?
    // The Document Object Model (DOM) is a programming interface used to access and modify the HTML and XML documents.
    // It represents the structure of an HTML or XML document as a tree of nodes, 
    // where each element, attribute, and text in the document is represented as an object.


//* Why Use DOM ?
    // To dynamically update content (e.g., add or remove elements).
    // To handle user interactions (e.g., clicks, typing, etc.).
    // To modify styles and attributes of HTML elements.


//* ****************************************************
//* Key Terminologies of DOM
//* ****************************************************

//* 1. Document Object
    // The document object is the root node of the DOM tree. It represents the entire HTML document. 
    // We can access the document object using the document property of the window object.


//* 2. Nodes
    // Nodes in the DOM are the building blocks of the document tree. 
    // They can be elements, attributes, text nodes, comments, and more.


//* 3. Root Node
    // The root node of the DOM tree is the document object. 
    // It is the top-level element of the document and contains all other elements in the document.


//* 4. Elements
    // Every tag in your HTML document is an element (eg: <p>, <div>, <h1>, <img>).


//* 5. Attributes
    // Attributes are key-value pairs that belong to an element. 
    // Eg: id, class, src, alt, style, etc.


//* 6. Parent And Child Nodes
    // A parent node is any node that contains another node.
    // A child node is a node that is contained within a parent node.

    // Example: 
        <body>
            <div>
                <p>Hello World</p>
            </div>
        </body>

    // In the above example, the <body> is the parent of <div>, and <div> is the parent of <p>.
    // Conversely, <p> is a child of <div>, and <div> is a child of <body>.


//* ****************************************************
//* Accessing DOM Elements
//* ****************************************************


//* 1. Get Element By Id
    // Syntax: document.getElementById("elementId");

    // Description: Returns a single element with the specified ID. 
    // If the element is not found, it returns null.
    // IDs must be unique within a document.


//* 2. Get Element By Class Name
    // Syntax: document.getElementsByClassName("className");

    // Description: Returns an HTMLCollection, which is similar to an array but not exactly the same.
    // It returns an HTMLCollection of elements (like an array but lacks array methods)..


//* 3. Get Element By Tag Name
    // Syntax: document.getElementsByTagName("tagName");

    // Description: Returns a collection of elements with the specified tag name (e.g., div, p, span). 
    // It returns an HTMLCollection of elements.


//* 4. Query Selector
    // Syntax: document.querySelector("selector");

    // Description: Returns the first element that matches the specified CSS selector (e.g., #id, .class, or tag).
    // It returns a single element or null if no match is found.


//* 5. Query Selector All
    // Syntax: document.querySelectorAll("selector");

    // Description: Returns a collection of all elements that match the specified CSS selector. 
    // Returns a static NodeList of all elements matching the specified CSS selector.


//* 6. Get Element By Name
    // Syntax: document.getElementsByName("name");

    // Description: Returns a collection of elements with the specified name attribute. 
    // Returns a static NodeList of all elements matching the specified name attribute.


//* ****************************************************
//* Traversing DOM Elements
//* ****************************************************


//* i: Parent Node:
    // Syntax: element.parentNode or element.parentElement

    // patentNode: Returns the immediate parent node of an element.
    // parentElement: Similar to parentNode but returns only element nodes (ignores text/comments).


//* ii: Child Nodes:
    // Syntax: element.childNodes (includes text nodes) or element.children (only element nodes)

    // childNodes: Returns a live NodeList of all child nodes of the specified element, including text nodes, element nodes, and comment nodes.
    // children: Returns a live HTMLCollection of all child elements of the specified element (ignores text/comments).


//* iii: First Child and Last Child:
    // Syntax: element.firstChild, element.lastChild

    // Returns the first and last child node of an element, which could be:
    // An element node (HTML element), A text node (such as whitespace or text between elements), A comment node.
    // Essentially, it returns any type of node.


//* iv: First Element Child and Last Element Child:
    // Syntax: element.firstElementChild, element.lastElementChild

    // Returns the first child element and last child element that is specifically an element node (HTML element).
    // It ignores text nodes, comment nodes, and other non-element nodes, returning only actual elements like <div>, <span>, etc.


//* v: Sibling Nodes:
    // Syntax: element.nextSibling, element.previousSibling

    // nextSibling: Returns the next sibling node (including text/comments).
    // previousSibling: Returns the previous sibling node (including text).


//* vi: Sibling Elements:
    // Syntax: element.nextElementSibling, element.previousElementSibling

    // nextElementSibling: Returns the next sibling element node (ignores text/comments).
    // previousElementSibling: Returns the previous sibling element node (ignores text/comments).


//* ****************************************************
//* Difference Between innerHTML, textContent, and innerText
//* ****************************************************


//* 1. innerHTML
    // Retrieves or modifies the HTML content of an element.
    // Includes both text and HTML tags.


//* 2. textContent
    // Retrieves or modifies only the raw text, ignoring all HTML tags.
    // Includes hidden elements' text.


//* 3. innerText
    // Retrieves or modifies the visible text.
    // Excludes text from hidden elements (e.g., elements styled with display: none).
    // It does not include HTML tags.