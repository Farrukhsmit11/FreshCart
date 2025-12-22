import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk('products', async () => {
    const response = await fetch("https://dummyjson.com/products");
    const jsonResp = await response.json();
    return jsonResp.products
});

const initialState = {
    items: [],
    status
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = "suceeded"
            state.items = action.payload
        })
    }

})

export default productSlice.reducer


// notes:
// extrareducers hum tab use kr te hain jab koi async function call krna ho
// builder ke andar data ayega
// 3 promises
// pending
// fulfilled
// rejected
// fetch JavaScript ka built-in function hai jo server se data lane (API call) ke liye use hota hai.