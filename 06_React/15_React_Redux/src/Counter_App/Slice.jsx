import { createSlice } from "@reduxjs/toolkit";

// ✅ Create a "slice" using "createSlice()":
const counterSlice = createSlice({
    // Name of the slice
    name: 'counter',

    // Initial state
    initialState: { count: 0 },

    // Reducers to update the state
    reducers: {
        // Action to Increment the count
        increment: (state) => {
            // When the count is less than 20, increment the count
            if(state.count < 20)
                state.count += 1;
        },

        // Action to Decrement the count
        decrement: (state) => {
            // When the count is greater than 0, decrement the count
            if(state.count > 0)
                state.count -= 1;
        },

        // Action to Reset the count
        reset: (state) => {
            state.count = 0;
        },
    },
});

// ✅ Export the actions
export const { increment, decrement, reset } = counterSlice.actions;

// ✅ Export the reducer
export default counterSlice.reducer;