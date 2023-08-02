import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/Auth/AuthSlice"


export const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})