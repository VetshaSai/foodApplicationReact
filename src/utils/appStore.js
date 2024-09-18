import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./sliceCart";

const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }
}); 

export default appStore;