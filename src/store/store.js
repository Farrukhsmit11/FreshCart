import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/ProductSlice";

export const store = configureStore({
    reducer: {
        product: productReducer
    },
})