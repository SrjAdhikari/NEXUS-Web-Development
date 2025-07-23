import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slicer";

// Creating the Redux store
const store = configureStore({
	// Defining the root reducer for the store
	reducer: {
		// Adding the cart reducer to the store
		cartSlicer: cartReducer,
	},
});

export default store;
