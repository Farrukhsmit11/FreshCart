import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [],
        value: 0,
    },

    reducers: {
        addToWishlist: (state, action) => {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)

            if (existingItem) {
                state.value += 1
                message.error("Product already added to wishlist")
            } else {
                state.items.push({ ...newItem, value: 1 })
                message.success("Product Added to Wishlist")
            }

            // JSON STRINGYFY CONVERTS THE OBJECT IN TO STRING
            // JSON PARSE CONVERT STRING IN TO OBJECT 

            localStorage.setItem("wishlist", JSON.stringify(state.items))
        },

        removeWishlist: (state, action) => {
            const wishlistData = state.items.filter(item => item.id !== action.payload.id)
            state.items = wishlistData
            message.success("Item removed from wishlist")
        }
    }
})

export const { addToWishlist, removeWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer