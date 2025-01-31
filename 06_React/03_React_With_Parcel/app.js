import React from "react";
import ReactDOM from "react-dom/client";


//* ****************************************************
//* Create a React element using JSX
//* ****************************************************

const elements = (
    <>
        <h1 id="heading" style={{ fontSize: "50px", color: "blue" }}>Start React Today</h1>
        <h2 className="subheading">Excited to learn React</h2>
        <p>React is a JavaScript library for building user interfaces.</p>

        <ul style={{ fontSize: "30px", color: "green", textDecoration: "none" }}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
        </ul>
    </>
);


//* ****************************************************
//* Create a React function based component
//* ****************************************************

function MyComponent() {
    return (
        <>
            <h1 id="heading">Start React Today</h1>
            <h2 className="subheading">Excited to learn React</h2>
            <p>React is a JavaScript library for building user interfaces.</p>
        </>
    );
};

// Create a React element from the MyComponent functional component
const functionComponent = <MyComponent />;

// Get the root DOM element where the React application will be rendered
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// Render the React element into the root element
reactRoot.render(elements);

// Render the MyComponent functional component into the root element
reactRoot.render(functionComponent);