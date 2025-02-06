import React, {useState} from 'react';

function App() {
	const [count, setCount] = useState(0);		// Initial value of count is 0

	// Function to handle incrementing the count
	// Increment the count by 1 when count is less than 50
	function increment() {
		if (count < 50) {
			setCount(count + 1);
		}
	}
	
	// Function to handle decrementing the count
	// Decrement the count by 1 when count is greater than 0
	function decrement() {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	return (
		<>
			<h1>Counter App Using "React useState Hook"</h1>
			<h2>Counter Value: {count}</h2>

			<div id="btn-container">
				<button onClick={() => setCount(count + 1)}>Increment</button>
				<button onClick={() => setCount(count - 1)}>Decrement</button>

				{/* 
					Uncomment these to use the controlled increment and decrement logic
					<button onClick={increment}>Increment</button>
					<button onClick={decrement}>Decrement</button> 
				*/}
			</div>
		</>
	)
}

export default App;


//* How It Works Step by Step
	// 1. Initial Render:
		// The "App" component is rendered for the first time.
		// "useState(0)" initializes "count" to "0".
		// The component renders:
			// Counter App Using "React useState Hook"
			// Counter Value: 0
			// [Increment Button] [Decrement Button]

	// 2. User Interaction:
		// When the Increment button is clicked:
			// "setCount(count + 1)" is called.
			// The "count" state is updated to "1".
			// The component re-renders with the new "count" value:
				// Counter App Using "React useState Hook"
				// Counter Value: 1
				// [Increment Button] [Decrement Button]

	// 3.When the Decrement button is clicked:
		// "setCount(count - 1)" is called.
		// The "count" state is updated to "-1".
		// The component re-renders with the new "count" value:
			// Counter App Using "React useState Hook"
			// Counter Value: -1
			// [Increment Button] [Decrement Button]

	// 4. Re-rendering:
		// Every time "setCount" is called, the "App" component re-renders with the updated "count" value.
		// React efficiently updates only the parts of the DOM that change (in this case, the "Counter Value" text).