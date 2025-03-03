import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./Slicer";

// ✅ create store
const store = configureStore({
    // 1️⃣ Register reducers with the store
    reducer: {
        // 2️⃣ Add the slice reducer to the store which is created in "Slicer.jsx"
        // Syntax: "sliceName: sliceReducer"
        coinSlice: coinReducer
    }
})

// ✅ export store
export default store