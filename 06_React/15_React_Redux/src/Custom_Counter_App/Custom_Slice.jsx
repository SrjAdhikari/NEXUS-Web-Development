import { createSlice } from "@reduxjs/toolkit";

// ✅ Create a "slice" using "createSlice()":
const Custom_Counter_Slice = createSlice({
    // name of the slice
    name: "customCounter",

    // Initial state
    initialState: {count: 0},

    // Reducers to update the state
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        customIncrement: (state, action) => {
            state.count += action.payload;
        }
    },
});

// ✅ Export the actions
export const { increment, decrement, reset, customIncrement } = Custom_Counter_Slice.actions;

// ✅ Export the reducer
export default Custom_Counter_Slice.reducer;