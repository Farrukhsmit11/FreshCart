import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

// agar phele se hee zero hai toh empty array rkh do

const initialState = {
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    value: localStorage.getItem("value") ? JSON.parse(localStorage.getItem("value")) : 0
}

// yeh jo iski value hai hus mai plus one krdega
// increement ho jayega

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cartItems.push(action.payload);
            state.value += 1;
            message.success("Product added to cart");
            localStorage.setItem("cart", JSON.stringify(state.cartItems))
            localStorage.setItem("value", JSON.stringify(state.value))
        },

        // is ma hum check krenge ke agar item ki id not equal to hai action.payload.id ke toh hee chale
        // agar same milgya toh matlab woh item stored hai cart ke anadr
        removeItem: (state, action) => {
            const cartData = state.cartItems.filter(item => item.id != action.payload.id)
            state.cartItems = cartData
            state.value -= 1
        }
    }

})

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;

// push method new item ko add krne k liye use hota hai array mai