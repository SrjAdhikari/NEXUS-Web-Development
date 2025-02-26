import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { customIncrement } from './Custom_Slice'

const Custom_Counter = () => {
    // Get the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();

    // State to store the custom number
    const [number, setNumber] = useState("");

    // Function to handle custom increment
    const handleCustomIncrement = () => {
        if (number) {
            // Dispatch the customIncrement action with the custom number
            dispatch(customIncrement(Number(number)));
            setNumber("");
        }
    }

    return (
        <div className="custom-input-container">
            <input
                type='number'
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                id='custom-input'
            />

            {/* Dispatch the customIncrement action when the button is clicked */}
            <button onClick={handleCustomIncrement}>Add To Count</button>
        </div>
    );
}

export default Custom_Counter;
