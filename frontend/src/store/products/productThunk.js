import { createAsyncThunk } from "@reduxjs/toolkit";
import { get } from "../../utils/apiMethods"

export const getProducts = createAsyncThunk(
    "/products/getProducts",
    async (_, { rejectWithValue }) => {
        try {
            const data = await get("/get-products")
            return data.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message)
        }
    }
)