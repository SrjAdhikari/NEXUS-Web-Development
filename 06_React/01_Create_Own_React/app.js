//* ****************************************************
//* Create Element & Append Using JavaScript
//* ****************************************************

// Access the root element
const root = document.getElementById("root");

// Create a heading element (h1)
// const h1 = document .createElement("h1");
// h1.innerText = "Start React Today";
// h1.style.fontSize = "50px";
// h1.style.color = "blue";

// Create an another heading element (h2)
// const h2 = document .createElement("h2");
// h2.innerText = "Excited to learn React";
// h2.style.fontSize = "40px";
// h2.style.color = "red";

// Append the heading elements to the root element
// root.appendChild(h1);
// root.appendChild(h2);


//* ****************************************************
//* Problem in above code
//* ****************************************************

// In the above code, we have created two heading elements and wrote almost the same code for both.
// If we need to create multiple elements, this approach becomes repetitive, long, and hard to maintain.
// Instead of repeating the code for each element, we can use a function to create multiple elements more dynamically.


// Create a React object to create an element
const React = {
    // Function to create an element
    createElement: function(type, properties, children) {
        // Create an element
        const element = document.createElement(type);

        // Add properties to the element
        for(let key in properties) {
            element.style[key] = properties[key];
        }

        // Add children to the element
        // Check if the children is an array of elements
        if(typeof children === "object") {
            children.forEach(child => {
                element.append(child);
            });
        }
        else 
            element.innerText = children;

        return element;
    }
};


// Create a ReactDOM object to render the element
const ReactDOM = {
    render: function(element, root) {
        root.append(element);
    }
};


// Create a heading element (h1)
const h1 = React.createElement("h1", {
    fontSize: "50px",
    color: "blue"
}, "Start React Today");


// Create an another heading element (h2)
const h2 = React.createElement("h2", {
    fontSize: "40px",
    color: "red"
}, "Excited to learn React");


// Create a paragraph element (p)
const p = React.createElement("p", {
    fontSize: "30px",
    color: "green"
}, "React is a JavaScript library for building user interfaces.");


// Create an unordered list element (ul)
const firstItem = React.createElement("li", {}, "HTML");
const secondItem = React.createElement("li", {}, "CSS");
const thirdItem = React.createElement("li", {}, "JavaScript");
const unorderedList = React.createElement("ul", {}, [firstItem, secondItem, thirdItem]);


// Append the heading and paragraph elements to the root element
// root.append(h1);
// root.append(h2);
// root.append(p);
// root.append(unorderedList);


// Render the heading and paragraph elements to the root element
ReactDOM.render(h1, root);
ReactDOM.render(h2, root);
ReactDOM.render(p, root);
ReactDOM.render(unorderedList, root);