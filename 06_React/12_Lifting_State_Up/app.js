//* ****************************************************
//* React Lifting State Up
//* ****************************************************

    // Lifting state up is a technique in React where you move the state from a child component to a common parent component.
    // This allows multiple child components to share and synchronize the same state.
    // This allows the parent component to manage the state and passes it down to child components as props.


//* ****************************************************
//* Why Lift State Up?
//* ****************************************************

    // Lifting state up is useful for:
    // 1. To share state between sibling components.
    // 2. To keep the state in a single source of truth (the parent component).
    // 3. To avoid passing props down multiple levels of the component tree.
    // 4. To make the application more predictable and easier to debug.


//* ****************************************************
//* How Does Lifting State Up Work?
//* ****************************************************

    // 1. Identify the Shared State: 
        // Determine which components need access to the same state.

    // 2. Move the State to the Parent: 
        // Instead of managing the state separately in each child component, we move the state to their common parent.

    // 3. Pass State and Updater Functions as Props: 
        // The parent component holds the state and passes it down as props to the child components. 
        // The parent can also pass down functions that allow the child components to update the state.

    // 4. Update State from the Parent: 
        // When a child component wants to update the state, it calls the passed-down function, which updates the state in the parent. 
        // The parent then re-renders and updates the props passed to the children.


//* ****************************************************
//* Best Practices For Lifting State Up
//* ****************************************************

    // 1. Lift state up only as far as necessary to share it between components.
    // 2. Pass functions as props to allow child components to update the state in the parent.
    // 3. Don’t lift state up too high in the component tree if it’s only needed by a few components.


//* ****************************************************
//* When to Lift State Up?
//* ****************************************************

    // 1. When multiple components need access to the same state.
    // 2. When the state of one component affects the state of another.
    // 3. When you want to avoid passing props down multiple levels of the component tree.


//* ****************************************************
//* Example 1: Without Lifting State (Separate State in Each Child)
//* ****************************************************

    import React, {useState} from 'react';

    // Child component
    function TemperatureInput() {
        const [temp, setTemp] = useState(20);

        return (
            <div>
                <label>Temperature: </label>
                <input
                    type='number'
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                />
            </div>
        )
    }

    // Child component
    function TemperatureDisplay() {
        const [temp, setTemp] = useState(20);

        return (
            <div>
                <h1>Current Temperature: {temp}°C</h1>
            </div>
        )
    }

    // Parent component
    export default function App() {
        return (
            <div>
                <TemperatureInput />
                <TemperatureDisplay />
            </div>
        )
    }


    // Here, both `TemperatureInput` and `TemperatureDisplay` have their own independent state (temp). 
    // If we want to share the value between them, we need to lift the state up.


//* ****************************************************
//* Example 2: Lifting State Up to the Parent Component
//* ****************************************************

    import React, {useState} from 'react';

    // Child component
    function TemperatureInput({ temp, setTemp }) {
        return (
            <div>
                <label>Temperature: </label>
                <input
                    type='number'
                    value={temp}
                    onChange={(e) => setTemp(e.target.value)}
                />
            </div>
        )
    }

    // Child component
    function TemperatureDisplay({ temp }) {
        return (
            <div>
                <h1>Current Temperature: {temp}°C</h1>
            </div>
        )
    }

    // Parent component
    export default function App() {
        // State lifted up to parent component
        const [temp, setTemp] = useState(20);

        return (
            <div>
                // Pass state and updater functions as props to child components
                <TemperatureInput temp={temp} setTemp={setTemp} />
                <TemperatureDisplay temp={temp} />
            </div>
        )
    }

    const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
    Reactroot.render(<App />);


//* ****************************************************
//* Example 3: Temperature Converter
//* ****************************************************
    // Demonstrates lifting state up to convert temperatures between "Celsius" and "Fahrenheit".

    import React, { useState } from 'react';

    // Child component
    function TemperatureInput({temp, scale, setTemp}) {
        return (
            <div>
                <fieldset>
                    <legend>Enter temperature in {scale}:</legend>
                    <input 
                        type='number'
                        value={temp}
                        onChange={((e) => setTemp(e.target.value))}
                    />
                </fieldset>
            </div>
        );
    }

    // Parent component
    function TemperatureConverter() {
        const [celsius, setCelsius] = useState("");
        const [fahrenheit, setFahrenheit] = useState("");

        const handleCelsiusChange = (value) => {
            setCelsius(value);
            setFahrenheit(value ? (value * 9 / 5) + 32 : "");
        };

        const handleFahrenheitChange = (value) => {
            setFahrenheit(value);
            setCelsius(value ? (value - 32) * 5 / 9 : "");
        };

        return (

            <div>
                <TemperatureInput
                    temp={celsius}
                    scale="Celsius"
                    setTemp={handleCelsiusChange}
                />

                <TemperatureInput
                    temp={fahrenheit}
                    scale="Fahrenheit"
                    setTemp={handleFahrenheitChange}
                />
            </div>
        );
    }


    //* Explanation:
        // The `TemperatureConverter` component manages the state for both Celsius and Fahrenheit.
        // The `TemperatureInput` component receives the state and a callback function as props.
        // When the user inputs a temperature in one scale, the parent component updates both states.