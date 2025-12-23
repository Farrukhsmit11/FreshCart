import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/ProductSlice";
import cartReducer from "./cartSlice/CartSlice"

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    },
})