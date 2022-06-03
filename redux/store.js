import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import currencySlice from "./currencySlice";

export default configureStore({
    reducer: {
        counter: currencySlice
    }
})