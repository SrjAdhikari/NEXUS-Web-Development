import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './Custom_Slice';

const Main_Counting = () => {
    // Get the current count value from the Redux store
    const count = useSelector((state) => state.customCounter.count);

    // Get the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <p>Count is : {count}</p>
            <div className="buttons">
                {/* Dispatch the increment action when the button is clicked */}
                <button onClick={() => dispatch(increment())}>Increment</button>

                {/* Dispatch the decrement action when the button is clicked */}
                <button onClick={() => dispatch(decrement())}>Decrement</button>

                {/* Dispatch the reset action when the button is clicked */}
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
}

export default Main_Counting