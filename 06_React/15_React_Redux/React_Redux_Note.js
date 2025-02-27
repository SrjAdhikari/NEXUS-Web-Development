//* ****************************************************
//* 📌 React Redux and Redux Toolkit
//* ****************************************************

//* 📌 What is Redux?
    // ✅ Redux is a state management library for JavaScript applications, commonly used with React.
    // ✅ It helps us manage "global state" (state that needs to be shared across multiple components) in a predictable way.
    // ✅ Redux follows a "unidirectional data flow" and uses a "centralized store" to manage the state of your application.
    // ✅ It is used to manage the state of your application and allows you to easily update the state without having to manually update it manually.


//* 📌 Why Use Redux?
    // 1️⃣ Centralized State – All data is stored in one place (Redux store).
    // 2️⃣ Predictable – State updates happen in a structured way using actions and reducers.
    // 3️⃣ Easier Debugging – You can track and debug state changes.
    // 4️⃣ Avoids Prop Drilling – No need to pass props deeply through components.


//* 📌 Key Concepts In Redux
    // 1️⃣ "Store": A centralized object that holds the entire state of your application.
    // 2️⃣ "Actions": Plain JavaScript objects that describe what happened and how to update the state. It always has a "type".
    // 3️⃣ "Reducers": Reducers are pure functions that take the current state and an action, and return the new state.
    // 4️⃣ "State": The current state of the application.
    // 5️⃣ "Dispatch": A function used to send actions to the store to update the state.
    // 6️⃣ "Selectors": Functions used to extract specific pieces of state from the store.


//* 📌 What is Redux Toolkit (RTK)?
    // ✅ Redux Toolkit is a collection of tools that help us manage state in a Redux application.
    // ✅ It provides a set of predefined actions and reducers for common tasks, such as fetching data, updating state, and handling errors.
    // ✅ Redux Toolkit includes:
        // 1️⃣ "createSlice": A function to create a slice of the Redux state, including actions and reducers.
        // 2️⃣ "configureStore": A function to configure the Redux store.
        // 3️⃣ "createAsyncThunk": A function to handle asynchronous logic like API calls.


//* 📌 Key Features of Redux Toolkit
    // 1️⃣ Simplifies "store" setup.
    // 2️⃣ Provides built-in "reducers" and "actions".
    // 3️⃣ Includes "immer.js" for easier state updates.
    // 4️⃣ Has "createSlice", which combines "actions" and "reducers" in one function.


//* 📌 Install Redux And Redux Toolkit
    // ✅ Install "Redux" and "Redux Toolkit" using "npm":
        // 1️⃣ npm install react-redux
        // 2️⃣ npm install @reduxjs/toolkit


//* 📌 Syntax of Redux Toolkit:

//* ****************************************************
//* 1️⃣ Create a Redux Slice
//* ****************************************************

    // ✅ Create a "slice" using "createSlice()":
        import { createSlice } from '@reduxjs/toolkit'

        const counterSlice = createSlice({
            // 1️⃣ Name of the slice
            name: 'counter',

            // 2️⃣ Initial state
            initialState: { count: 0 },

            // 3️⃣ Reducers
            reducres: {
                // 4️⃣ Increment the count
                increment: (state) => {
                    state.count += 1
                },

                // 5️⃣ Decrement the count
                decrement: (state) => {
                    state.count -= 1
                },

                // 6️⃣ Increment the count by a given number
                incrementByNumber: (state, action) => {
                    state.count += action.payload
                }
            }
        });
    
    // ✅ Export the actions, actions are functions that update the state
        export const { increment, decrement } = counterSlice.actions

    // ✅ Export the reducer
        export default counterSlice.reducer;


//* ****************************************************
//* 2️⃣ Create a Redux Store
//* ****************************************************

    // ✅ Create a "store" using "configureStore()":
        import { configureStore } from '@reduxjs/toolkit'
        import counterReducer from './counterSlice'
        
        const store = configureStore({
            // 1️⃣ Register reducers with the store
            reducer: {
                // 2️⃣ Add the slice reducer to the store
                // Syntax: "sliceName: sliceReducer"
                counter: counterReducer,
            }
        });

    // ✅ Export the store
        // export default store;


//* ****************************************************
//* 3️⃣ Dispatch Actions
//* ****************************************************

    // ✅ Dispatch actions using "store.dispatch()":
        store.dispatch(increment());
        store.dispatch(decrement());