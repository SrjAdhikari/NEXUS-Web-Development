// Create a heading element (h1) with properties: id, class, style, and text content
const h1 = React.createElement("h1", {
    id:"heading", 
    className:"header", 
    style:{
        color:"tomato", 
        fontSize:"35px"
    }
}, "Good Morning Everyone");


// Create a paragraph element (p) with properties: id, class, style, and text content
const p = React.createElement("p", {
    id: "paragraph",
    className: "para",
    style: {
        color: "green",
        fontSize: "25px"
    }
}, "Welcome to React JS");


// Create a div element (div) with properties: id, class, style, and children
// The children of the div element are the h1 and p elements
const div = React.createElement("div", {
    id: "container",
    className: "main",
    style: {
        backgroundColor: "lightblue",
        padding: "10px"
    }
}, [h1, p]);


// Access the root DOM element with id "root" where the React element will be rendered.
// ReactDOM.createRoot creates a root for React to manage rendering.
const Reactroot = ReactDOM.createRoot(document.getElementById("root"));


// Render the div element (which contains the h1 and p elements) into the root DOM node.
// The final rendered structure will be a container div with a heading and a paragraph inside.
Reactroot.render(div);


// Output:
// <div id="root">
    // <div id="container" class="main" style="background-color: lightblue; padding: 10px;">
    //   <h1 id="heading" class="header" style="color: tomato; font-size: 35px;">Good Morning Everyone</h1>
    //   <p id="paragraph" class="para" style="color: green; font-size: 25px;">Welcome to React JS</p>
    // </div>
// </div>