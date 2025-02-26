import { configureStore } from "@reduxjs/toolkit";

// Importing the counter reducer from the Slice file
import counterReducer from "./Slice";

// ✅ Create a "store" using "configureStore()":
const store = configureStore({
    // Register reducers with the store
    reducer: {
        // Add the slice reducer to the store, which is created in the "Slice" file
        counter: counterReducer,
    },
});

// ✅ Export the store
export default store;