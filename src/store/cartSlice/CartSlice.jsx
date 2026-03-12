import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// agar phele se hee zero hai toh empty array rkh do

const initialState = {
    cartItems: [],
    value: 0,
    price: ""
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
            const existingItem = state.cartItems.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.value += 1
                message.success("Product Updated to Cart")
            } else {
                state.cartItems.push({ ...newItem, value: 1 });
                message.success("Product added to cart")
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
        },

        removeItem: (state, action) => {
            const cartData = state.cartItems.filter(item => item.id != action.payload.id)
            state.cartItems = cartData
            message.success("Product deleted successfully");
        },
    }

})

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

// push method new item ko add krne k liye use hota hai array mai