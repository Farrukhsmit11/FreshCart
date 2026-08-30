import { createAsyncThunk } from "@reduxjs/toolkit"
import { post } from "../../utils/apiMethods"
import { TOKEN } from "../../utils/constant"
import { get } from "../../utils/apiMethods"

export const handleSignup = createAsyncThunk(
    "/auth/signUp",
    async ({ name, email, password }, { rejectWithValue }) => {
        try {
            const response = await post("/signUp", {
                name,
                email,
                password
            })
            return response.data
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || "")
        }
    }
)

export const handleLogin = createAsyncThunk(
    "/auth/signIn",
    async ({ email, password }, { dispatch }) => {
        try {
            const data = await post("/login", {
                email,
                password
            })
            localStorage.setItem(TOKEN, data.data?.token)
            dispatch(getProfile())
            return data.data
        } catch (error) {
            console.error("Login failed", error)
        }
    }
)

export const getProfile = createAsyncThunk(
    "/auth/getProfile",
    async () => {
        try {
            const res = await get("/get-profile")
            return res.data
        } catch (error) {
            console.error("login failed", error)
        }
    }
)