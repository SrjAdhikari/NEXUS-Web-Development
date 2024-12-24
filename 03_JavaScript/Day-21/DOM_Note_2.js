//* ****************************************************
//* Manipulating DOM Elements
//* ****************************************************

//* 1. createElement() Method
    // Syntax: document.createElement("tagName");
    // Description: Creates a new element with the specified tag name (e.g., "div", "p", "span").


//* 2. createTextNode() Method
    // Syntax: document.createTextNode("text");
    // Description: Creates a new text node with the specified text content (e.g., "Hello, World!").


//* 3. createAttribute() Method
    // Syntax: document.createAttribute("attributeName");
    // Description: Creates a new attribute node with the specified attribute name (e.g., id, class, etc).


//* ****************************************************


//* 1. appendChild() Method
    // Syntax: parentNode.appendChild(childNode);
    // Description: Adds a single Node (element or text node) as the last child of a specified parent element.


//* 2. append() Method
    // Syntax: parentNode.append(childNode1, childNode2, ...);
    // Description: Adds one or more elements, text nodes, or strings as the last children of a specified parent element.


//* 3. prepend() Method
    // Syntax: parentNode.prepend(childNode1, childNode2, ...);
    // Description: Adds multiple nodes as the first children of a specified parent node.


//* 4. insertBefore() Method
    // Syntax: parentNode.insertBefore(childNode, referenceNode);
    // Description: Inserts a single node before a reference node in a specified parent node.


//* 5. insertAdjacentElement() Method
    // Syntax: element.insertAdjacentElement(position, newElement);
    // Description: Inserts an existing DOM element at a specified position relative to another element.
    // The position can be "beforebegin", "afterbegin", "beforeend", or "afterend".

    // "beforebegin": Inserts before the element itself.
    // "afterbegin": Inserts inside the element, before its first child.
    // "beforeend": Inserts inside the element, after its last child.
    // "afterend": Inserts after the element itself.


//* 6. insertAdjacentHTML() Method
    // Syntax: element.insertAdjacentHTML(position, html);
    // Description: Inserts HTML content at a specified position relative to an existing element.
    // The position can be "beforebegin", "afterbegin", "beforeend", or "afterend".


//* 7. replaceChild() Method
    // Syntax: parentNode.replaceChild(newNode, oldNode);
    // Description: Replaces an existing node with a new node in a specified parent node.


//* 8. Using innerHTML & textContent
    // innerHTML
    // Syntax: element.innerHTML = "new content";
    // Description: Directly sets the HTML content of the specified element.
    // Example: element.innerHTML = "<h1>Hello, World!</h1>";


    // textContent
    // Syntax: element.textContent = "new content";
    // Description: Directly sets the text content of the specified element.
    // Example: element.textContent = "Hello, World!";


//* ****************************************************


//* 1. removeChild() Method
    // Syntax: parentNode.removeChild(childNode);
    // Description: Removes the specified child element from the parent element.
    // Need parent node to remove the child node


//* 2. remove() Method
    // Syntax: element.remove();
    // Description: Removes the specified element directly from the DOM.
    // Doesn't need parent node to remove the child node. Can remove any node directly.


//* ****************************************************


//* 1. getAttribute() Method
    // Syntax: element.getAttribute("attributeName");
    // Description: Retrieves the value of the specified attribute for the element.


//* 2. setAttribute() Method
    // Syntax: element.setAttribute("attributeName", "attributeValue");
    // Description: Sets or updates the value of an attribute for the specified element.


//* 3. removeAttribute() Method
    // Syntax: element.removeAttribute("attributeName");
    // Description: Removes the specified attribute from an element.


//* 4. hasAttribute() Method
    // Syntax: element.hasAttribute("attributeName");
    // Description: Checks if the element has the specified attribute.


//* ****************************************************


//* 1. Get Style
    // Syntax: element.style.property;
    // Description: Returns the value of a style property for the specified element.


//* 2. Set Style
    // Syntax: element.style.propertyName = value;
    // Description: Sets the value of a style property for the specified element (e.g., "background-color", "font-size", etc).


//* 3. Remove Style
    // Syntax: element.style.removeProperty("property");
    // Description: Removes the specified style property from the element.


//* ****************************************************


//* 1. Add CSS Class
    // Syntax: element.classList.add("className");
    // Description: Adds a class to the element's class list (e.g., "active", "hidden", "show", etc).


//* 2. Remove CSS Class
    // Syntax: element.classList.remove("className");
    // Description: Removes a class from the element's class list.


//* 3. Toggle CSS Class
    // Syntax: element.classList.toggle("className");
    // Description: Adds the class if it’s not present, removes it if it is present.


//* 4. Check If Element Has CSS Class
    // Syntax: element.classList.contains("className");
    // Description: Checks if the element has the specified class.


//* 5. Replace CSS Class
    // Syntax: element.classList.replace("oldClassName", "newClassName");
    // Description: Replaces the old class name with the new class name.
    // Example: element.classList.replace("old-class", "new-class");