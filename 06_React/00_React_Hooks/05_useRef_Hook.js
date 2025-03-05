//* ****************************************************
//* 📌 React useRef Hook
//* ****************************************************

    // 1️⃣ "useRef" is a React hook that allows you to create a mutable reference (or "ref") to a DOM element or any other value.
    // 2️⃣ Unlike state, updating a ref does `not trigger a re-render` of the component.
    // 3️⃣ Refs are commonly used to:
        // Access and manipulate DOM elements directly.
        // Store mutable values that persist across renders without causing re-renders.


//* ****************************************************
//* 📌 Why use useRef?
//* ****************************************************

    // 1️⃣ To interact with DOM elements (e.g., focus an input, scroll to an element).
    // 2️⃣ To store values that need to persist across renders but don’t need to trigger re-renders (e.g., timers, previous values).
    // 3️⃣ To create a reference to a component that needs to be accessed by a parent component (e.g., to access a child component’s methods).


//* 📌 Syntax:
    const ref = useRef(initialValue);

    //* Explanation:
    // 1️⃣ ref: A mutable object with a `current` property.
    // 2️⃣ initialValue: The initial value of the `current` property (can be `null`, a DOM element, or any other value).


    //* 📌 Accessing the Ref:
        // 1️⃣ When using `useRef`, The returned object is `{ current: initialValue }`
        // 2️⃣ Use `ref.current` to access or modify the current value stored in the `ref` object.
        // 3️⃣ Update it like `ref.current = newValue`, this does not trigger a re-render.

        // 📌 For example, to focus an input element:
            // const inputRef = useRef(null);
            // useEffect(() => {
            //     inputRef.current.focus();
            // }, []);


//* ****************************************************
//* 📌 Key Points of useRef Hook
//* ****************************************************

    // 1️⃣ The `current` property of a ref can be updated without causing a re-render.
    // 2️⃣ The value of a ref persists (it doesn't change) across component re-renders.
    // 3️⃣ Changing a ref’s value does not trigger a re-render of the component.
    // 4️⃣ Common Use Cases:
        // Accessing DOM elements.
        // Storing previous values.
        // Managing timers or intervals.


//* ****************************************************
//* 📌 Best Practices For useRef Hook
//* ****************************************************

    // 1️⃣ Use state for values that should trigger re-renders and refs for values that shouldn’t.
    // 2️⃣ If a ref is used to store a timer or subscription, clean it up in the `useEffect` cleanup function.
    // 3️⃣ Refs are not a replacement for state. Use them only when necessary.


//* ****************************************************
//* 📌 Example 1: Focusing an Input Field
//* ****************************************************
    // `useRef` can be used to focus an input field when a button is clicked.

    import React, { useRef } from 'react';

    function App() {
        // Create a ref to store the input element
        const inputRef = useRef(null);

        // Function to focus the input field
        const handleFocus = () => {
            // Access the DOM element and focus it
            inputRef.current.focus();
        };

        return (
            <div>
                <input 
                    type="text"
                    ref={inputRef}
                    placeholder="Type something..."
                />
                <button onClick={handleFocus}> Focus Input </button>
            </div>
        )
    }


    //* 📌 How It Works Step by Step
        // 1️⃣ Initial Render:
            // The component is rendered with an input field and a button.
            // The `inputRef` is created using `useRef`, but initially it is `null` (since it's not attached to any DOM element yet).

        // 2️⃣ Button Click:
            // When the Focus Input button is clicked, the `handleFocus` function is executed.
            // Inside `handleFocus`, `inputRef.current` gives us the actual input field DOM element.
            // The `focus()` method is then called on this input element, focusing the input field and allowing the user to start typing right away.

        // 3️⃣ UI Update:
            // The input field is now focused, and the user can type in it.


//* ****************************************************
//* 📌 Example 2: Tracking Previous State
//* ****************************************************
    // `useRef` to store the previous value of a state variable.

    import React, { useState, useRef, useEffect } from 'react';

    function TrackPreviousState() {
        const [count, setCount] = useState(0);

        // Ref to store the previous count
        const prevRef = useRef();

        // Update the ref with the previous count whenever count changes
        useEffect(() => {
            prevRef.current = count;
        }, [count]);

        return (
            <div>
                <p>Current Count: {count}</p>
                <p>Previous Count: {prevRef.current}</p>
                <button onClick={() => setCount(count + 1)}> Increment Count </button>
            </div>
        )
    }


    //* 📌 How It Works Step by Step
        // 1️⃣ Initial Render:
            // `useState(0)` initializes the `count` state to `0`.
            // `prevRef` is initially `undefined`.
            // The component renders with:
                // Current Count: 0
                // Previous Count: undefined (since `prevRef` is not yet updated)

        // 2️⃣ Button Click (First Click):
            // When the button is clicked, `setCount(count + 1)` is called. `count` is updated from `0` to `1`.
            // The component re-renders with:
                // Current Count: 1
                // Previous Count: 0 (since `prevRef.current` now stores the old count, which was `0`).

        // 3️⃣ Subsequent Button Clicks:
            // Every time the button is clicked, `setCount(count + 1)` increments `count`.
            // After the state update:
                // `useEffect` updates `prevRef.current` with the previous count.
                // The component re-renders with the updated `current count` and the previous count stored in `prevRef.current`.


//* ****************************************************
//* 📌 Example 3: Managing a Timer
//* ****************************************************
    // `useRef` to store a timer ID and clear it when the component unmounts.

    import React, { useState, useRef, useEffect } from 'react';

    function Timer() {
        const [seconds, setSeconds] = useState(0);

        // Create a ref to store the timer ID
        const timerRef = useRef(null);

        // Start a timer when the component mounts
        useEffect(() => {
            timerRef.current = setInterval((() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }), 1000);

            // Cleanup: clear the timer when the component unmounts
            return () => {
                clearInterval(timerRef.current);
            }
        }, []);         // Empty dependency array: runs only once

        return (
            <div>
                <p>Timer: {seconds} seconds</p>
            </div>
        )
    }


    //* 📌 How It Works Step by Step
        // 1️⃣ Initial Render:
            // The `seconds` state is initialized to 0 using `useState(0)`.
            // The component renders the initial value: `Timer: 0 seconds`.

        // 2️⃣ Starting the Timer:
            // The `useEffect` hook runs after the initial render (because of the empty dependency array).
            // Inside `useEffect`, `setInterval` is called, and a timer starts, updating the `seconds` state every second.

        // 3️⃣ State Updates:
            // Every second, the timer increments the `seconds` state by 1.
            // When `seconds` is updated, React triggers a re-render of the component, and the updated value is displayed: 
            // Timer: 1 second, Timer: 2 seconds, etc.

        // 4️⃣ Cleanup on Unmount:
            // When the component unmounts, the `useEffect` hook runs again.
            // Inside the `useEffect` cleanup function, `clearInterval` is called to clear the timer started in the previous step.
            // This ensures that the timer is stopped when the component unmounts.