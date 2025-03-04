//* ****************************************************
//* 📌 React useMemo Hook
//* ****************************************************

    // 1️⃣ "useMemo" is a React hook that memoizes (caches) the result of a function or expensive calculation.
    // 2️⃣ It ensures that the calculation is only recomputed when one of its dependencies changes.
    // 3️⃣ This is useful for optimizing performance, especially when dealing with expensive computations.


//* 📌 Syntax:
    const memoizedValue = useMemo(() => {
        // Expensive calculation or function
        return result;
    }, [dependencies]);


    //* 📌 Explanation:
    // 1️⃣ memoizedValue: The memoized (cached) result of the calculation.
    // 2️⃣ useMemo: The hook accepts two arguments:
        // Function: The function that performs the expensive calculation and returns the result..
        // dependencies: An array of values. If any of these values change, the function is recomputed. If the array is empty, the function runs only once.
        // If the dependencies don’t change, the same result is reused across renders.
    // 3️⃣ Result: The memoized value that is returned by the hook.


//* ****************************************************
//* 📌 Key Points of useMemo Hook
//* ****************************************************

    // 1️⃣ Memoization: "useMemo" caches the result of a function and returns the cached value unless the dependencies change.
    // 2️⃣ Dependencies: The function is recomputed only when one of the dependencies in the array changes.
    // 3️⃣ Performance Optimization: Use "useMemo" to avoid recalculating expensive values on every render.
    // 4️⃣ When to use: 
        // When dealing with expensive calculations (e.g., sorting, filtering, or complex math).
        // When passing computed values as props to child components.


//* ****************************************************
//* 📌 Best Practices For useMemo Hook
//* ****************************************************

    // 1️⃣ Only use useMemo when the calculation is truly expensive or when it impacts performance.
    // 2️⃣ Always include the necessary dependencies in the dependency array.
    // 3️⃣ Use React.memo to memoize child components and prevent unnecessary re-renders.


//* ****************************************************
//* 📌 Example 1: Expensive Calculation (Fibonacci)
//* ****************************************************

    import React, {useState, useMemo} from 'react';

    const ExpensiveCalculation = () => {
        const [number, setNumber] = useState(null);

        const fibonacci = (n) => {
            if(n <= 1) 
                return n;
            return fibonacci(n - 1) + fibonacci(n - 2);
        }

        // useMemo Hook to memoize the result of the Fibonacci calculation
        const result = useMemo(() => fibonacci(number), [number]);

        // - `useMemo` caches the result of the `fibonacci` function.
        // - It recomputes the result only when the `number` changes.
        // - This prevents unnecessary recalculations on every render.


        // Inline styles
        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            backgroundColor: '#fff',
            padding: '50px',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        };

        const titleStyle = {
            fontSize: '24px',
            marginBottom: '30px',
            color: '#333',
        };

        const inputStyle = {
            width: '200px',
            padding: '10px',
            fontSize: '18px',
            border: '2px solid #555',
            borderRadius: '5px',
            textAlign: 'center',
            outline: 'none',
            marginBottom: '20px',
            transition: '0.3s',
        };

        const resultStyle = {
            fontSize: '20px',
            color: '#222',
        };

        const spanStyle = {
            fontWeight: 'bold',
            color: '#007bff',
        };


        return (
            <div style={containerStyle}>
                <h2 style={titleStyle}>Fibonacci Calculator</h2>
                <input 
                    type="number" 
                    value={number} 
                    onChange={(e) => setNumber(e.target.value)}
                    style={inputStyle}
                />
                <p style={resultStyle}>
                    Fibonacci number is: <span style={spanStyle}>{result}</span>
                </p>
            </div>
        )
    }

    export default ExpensiveCalculation


    //* 📌 How It Works Step by Step
        // 1️⃣ Initial Render:
            // The component renders with `number` set to `null`.
            // The Fibonacci result is not computed because `number` is `null`.

        // 2️⃣ User Interaction:
            // When the user enters a number in the input field:
                // The `onChange` handler updates the `number` state
                // The component re-renders.

        // 3️⃣ Fibonacci Calculation:
            // `useMemo` checks if the `number` has changed.
            // If `number` has changed, it recomputes the Fibonacci result using the `fibonacci` function.
            // If `number` hasn't changed, it returns the cached result.

        // 4️⃣ Re-rendering:
            // The component re-renders with the updated `result`.
            // The Fibonacci result is displayed in the UI.


//* ****************************************************
//* 📌 Example 2: Filtering a List
//* ****************************************************

    import React, { useState, useMemo } from 'react';

    export const FilteredList = () => {
        const [search, setSearch] = useState('');
        const items = [
            'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry',
            'Fig', 'Grape', 'Honeydew', 'Kiwi', 'Lemon',
            'Mango', 'Nectarine', 'Orange', 'Papaya', 'Quince',
            'Raspberry', 'Strawberry', 'Tangerine', 'Ugli Fruit', 'Watermelon'
        ];
        
        // useMemo is used to optimize performance by caching filtered results
        const filteredItems = useMemo(() => {
            console.log(`Filtering items...`);
            return items.filter((item) => 
                // Converts both item and search to lowercase to make the search case-insensitive.
                item.toLowerCase().includes(search.toLowerCase())
            );
        }, [search]);       // Only recalculate when `search` changes
    
    
        // Inline styles
        const containerStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
    
            height: '100vh',
            backgroundColor: '#f4f4f4',
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
        };
    
        const inputStyle = {
            padding: '12px',
            fontSize: '18px',
            width: '300px',
            border: '2px solid #007bff',
            borderRadius: '8px',
            outline: 'none',
            marginBottom: '30px',
            textAlign: 'center',
        };
    
        const gridContainerStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
            gap: '15px',
            width: '100%',
            maxWidth: '500px',
        };
    
        const listItemStyle = {
            padding: '15px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            transition: '0.3s',
            fontSize: '16px',
            fontWeight: 'bold',
        };
    
        return (
            <div style={containerStyle}>
                <h1 style={{ marginBottom: '50px' }}>Search for a fruit</h1>
                <input
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder='Search...'
                    style={inputStyle}
                />
                <div style={gridContainerStyle}>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <div key={index} style={listItemStyle}>{item}</div>
                        ))
                    ) : (
                        <div style={{ ...listItemStyle, gridColumn: 'span 2' }}>No results found</div>
                        // { ...listItemStyle } : This ensures the "No results found" div has the same style (padding, background, font) as the list items, keeping a consistent design.
                    )}
                </div>
            </div>
        );
    }


    //* 📌 How It Works Step by Step:
        // 1️⃣ Initial Render:
            // The component renders for the first time with `search` set to an empty string.
            // The `items` array contains a list of fruits.
            // The `filteredItems` array is computed using `useMemo`, initially containing all items because `search` is empty.
            // The search input box and the full list of fruits are displayed in a grid.

        // 2️⃣ User Interaction:
            // When the user types in the search input field:
                // The `onChange` event handler updates the `search` state.
                // React triggers a re-render of the component.

        // 3️⃣ Filtering Process:
            // The `useMemo` hook checks if `search` has changed.
            // If `search` has changed, it filters `items` to include only fruits that match the search query (case-insensitive).
            // The filtered list is stored in `filteredItems`.
            // If `search` is empty, all items are displayed.

        // 4️⃣ Displaying the Results:
            // If `filteredItems` contains matching items, they are displayed in a grid layout.
            // If no items match, a "No results found" message is shown spanning two columns.

        // 5️⃣ Performance Optimization:
            // `useMemo` ensures that filtering only runs when `search` changes, avoiding unnecessary calculations on every render.