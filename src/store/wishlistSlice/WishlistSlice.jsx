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
            } else {
                state.items.push({ ...newItem, value: 1 })
            }

            message.success("Item Added to Wishlist")

            // JSON STRINGYFY CONVERTS THE OBJECT IN TO STRING
            // JSON PARSE CONVERT STRING IN TO OBJECT 

            localStorage.setItem("wishlist", JSON.stringify(state.items))
        },

        removeWishlist: (state, action) => {
            const newData = state.items.filter(item => item.id != action.payload.id)
            state.items = newData
        }
    }
})

export const { addToWishlist, removeWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer