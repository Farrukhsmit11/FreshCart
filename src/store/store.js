import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice/ProductSlice";
import cartReducer from "./cartSlice/CartSlice"
import wishlistReducer from  "./wishlistSlice/WishlistSlice"


export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        wishlist: wishlistReducer,


    },
})