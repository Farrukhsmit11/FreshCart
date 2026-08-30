import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./productThunk";

const initialState = {
    products: [],
    loading: false,
    error: null
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })

        builder.addCase(getProducts.rejected, (state) => {
            state.loading = false
        })
    }
})

export default productSlice.reducer