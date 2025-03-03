import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';

// How async thunk dispatch works?
// { type: 'coins/fetch/pending', payload: undefined }
// { type: 'coins/fetch/fulfilled', payload: data }
// { type: 'coins/fetch/rejected', payload: error.message }

// ✅ create async thunk
const fetchData = createAsyncThunk(
    // 1️⃣ Action type
    'coins/fetch',

    // 2️⃣ callback function
    async (args) => {
        try {
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = response.json();
            return data;    // 3️⃣ payload of the fulfilled action
        } 
        catch (error) {
            return isRejectedWithValue(error.message);
        }
    },
);


// ✅ create slice
const slice = createSlice({
    // 1️⃣ Name of the slice
    name: 'coinSlice',

    // 2️⃣ Initial state
    initialState: { data: [], loading: false, error: null },

    // 3️⃣ Reducers
    reducers: {},

    // 4️⃣ Extra reducers
    extraReducers: (builder) => {
        builder
            // 5️⃣ Add pending case
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            
            // 6️⃣ Add fulfilled case
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })

            // 7️⃣ Add rejected case
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export { fetchData };
export default slice.reducer;