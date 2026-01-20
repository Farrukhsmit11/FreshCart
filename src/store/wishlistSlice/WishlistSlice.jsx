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
        },

        removeItem: (state, action) => {
            const newData = action.payload.id
            state.items = state.items.filter(item => item.id === newData)
        }
    }
})

export const { addToWishlist, removeItem } = wishlistSlice.actions
export default wishlistSlice.reducer