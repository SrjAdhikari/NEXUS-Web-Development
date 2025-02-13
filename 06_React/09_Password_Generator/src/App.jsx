import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
	// useState Hooks to manage state
	const [length, setLength] = useState(8);				// Default password length
	const [number, setNumber] = useState(false);			// Default password doesn't contain numbers
	const [character, setCharacter] = useState(false);		// Default password doesn't contain characters
	const [password, setPassword] = useState('');			// Default password is empty


	// "useRef" Hook to create a reference to the password input element
    // This is used to focus the input element when the password is generated
	const passwordRef = useRef(null);


	// "useCallback" Hook to memoize the generatePassword function
    // This ensures that the function is only recreated when its dependencies change
	const passwordGenerator = useCallback(() => {
		// Initialize an empty string to store the generated password
		let pass = "";

		// Initialize a string of all possible characters
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		// Check if password should contain numbers, if so, add them to the string
		if(number) str += "0123456789";

		// Check if password should contain characters, if so, add them to the string
		if(character) str += "!@#$%&*^~[]{}()<>?+-=*_";

		// Loop to generate a password of the specified length
        for (let i = 1; i <= length; i++) {
            // Generate a random index to pick a character from the string
            let index = Math.floor(Math.random() * str.length + 1);

            // Append the randomly selected character to the password
            pass += str.charAt(index);
        }

		// Update the password state with the newly generated password
        setPassword(pass);
    }, [length, number, character, setPassword]);               // Dependencies: Regenerate password when these values change


	// useEffect Hook to generate a password when the component mounts or dependencies change
    useEffect(() => {
        passwordGenerator();                                    // Call the passwordGenerator function
      }, [length, number, character, passwordGenerator]);       // Dependencies: Regenerate password when these values change


	// Function to copy the generated password to the clipboard
	const copyPasswordToClipboard = useCallback(() => {
		// Select the password input element
		passwordRef.current?.select();

        // Optional: Select a specific range of characters (e.g., first 20 characters)
		passwordRef.current?.setSelectionRange(0, 20);

		// Copy the password to the clipboard
		window.navigator.clipboard.writeText(password);
	}, [password]);                                             // Dependency: Regenerate function if the password changes


	return (
		<>
			<div className="container">
				<h1>Password Generator</h1>
				<div className="password">
					<input 
						type="text"
						value={password}
						placeholder='Password'
						readOnly
						ref={passwordRef}
					/>

					<button
						onClick={copyPasswordToClipboard}
					>Copy</button>
				</div>

				<div className="controls">
					<div className='length'>
						<input 
							type="range"
							min={6}
							max={25}
							value={length}
							id='lengthInput'
							onChange={(e) => setLength(e.target.value)}
						/>
						<label htmlFor="lengthInput">Length: {length}</label>
					</div>

					<div className='checkbox-number'>
						<input 
							type="checkbox" 
							name="" 
							id="numberInput" 
							defaultChecked={number}
							onChange={() => setNumber(!number)}
						/>
						<label htmlFor="numberInput">Number</label>
					</div>

					<div className='checkbox-character'>
						<input 
							type="checkbox" 
							name="" 
							id="characterInput" 
							defaultChecked={character}
							onChange={() => setCharacter(!character)}
						/>
						<label htmlFor="characterInput">Special Character</label>
					</div>
				</div>
			</div>
		</>
	)
}

export default App