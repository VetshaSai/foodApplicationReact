import { createSlice } from "@reduxjs/toolkit";

const sliceCart = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.pop();
        },
        clearItem:(state)=>{
            state.items.length =0;
            //another way is return{items:[]}
        }
    }
})

export const {addItem, removeItem, clearItem} = sliceCart.actions;
export default sliceCart.reducer;
 