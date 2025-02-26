import { configureStore } from "@reduxjs/toolkit";
import customCounterReducer from "./Custom_Slice";

const customStore = configureStore({
    // Register reducers with the store
    reducer: {
        // Add the slice reducer to the store, which is created in the "Slice" file
        customCounter: customCounterReducer
    }
});

// Export the store
export default customStore;