import { createSlice } from "@reduxjs/toolkit";
import { message } from "antd";

const initialState = {
    value: 0,
    cartItems: []
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
        }
    }

})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

// push method new item ko add krne k liye use hota hai array mai