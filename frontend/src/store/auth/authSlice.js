import { createSlice } from "@reduxjs/toolkit";
import { handleLogin } from "./authThunk";

const initialState = {
    user: {},
    isAuthenticate: false,
    loading: false,
    loginLoading: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isAuthenticate = false,
                state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(handleLogin.pending, (state) => {
                state.loginLoading = true
            })

            .addCase(handleLogin.fulfilled, (state, action) => {
                state.loginLoading = false
                state.isAuthenticate = true
                state.user = action.payload
            })

            .addCase(handleLogin.rejected, (state) => {
                state.loginLoading = false
            })
    }
})

export default authSlice.reducer