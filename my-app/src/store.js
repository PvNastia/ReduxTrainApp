import { configureStore } from "@reduxjs/toolkit";
import logReducer from "../src/components/LoginSingUp/LoginSingUpSlice";

export const store = configureStore({
    reducer:{
        log: logReducer,
    }
})