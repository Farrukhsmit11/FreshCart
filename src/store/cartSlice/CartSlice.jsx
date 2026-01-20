import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// agar phele se hee zero hai toh empty array rkh do

const initialState = {
    cartItems: [],
    value: 0,
}

// yeh jo iski value hai hus mai plus one krdega
// increement ho jayega

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // if the item exists so increase quantity
            const newItem = action.payload
            const existingItem = state.cartItems.find(item => item.id === newItem.id)
            if (existingItem) {
                existingItem.value += 1
            } else {
                state.cartItems.push({ ...newItem, value: 1 });
            }
            message.success("Product added to cart")
        },

        removeCart: (state, action) => {
            const itemId = action.payload.id
            state.cartItems = state.cartItems.filter(item => item.id === itemId)
            state.value -= 1
            message.success("Product deleted sucessfully")

        }
    }

})

export const { addToCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;

// push method new item ko add krne k liye use hota hai array mai