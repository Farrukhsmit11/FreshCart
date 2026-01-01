import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [],
        value: 0,

    },

    reducers: {
        addToWishlist: (state, action) => {
         state.items.push(action.payload)
         state.value +=1
        }
    }
})

export const {addToWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer