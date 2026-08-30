import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice"
import productReducer from "../store/products/productSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer
    }
})
