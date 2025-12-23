import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    wishlistItems: []
}

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, action) => {
            state.wishlistItems.push = (action.payload);
        }
    }
})