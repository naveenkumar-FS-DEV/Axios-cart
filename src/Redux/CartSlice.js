import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState:{
        items: []
    },
    reducers:{
        addToCart: (state,action)=>{
          state.items.push(action.payload)
        },
        removeFromCart: (state)=>{
            state.items.pop()
        },
    },
})

export const {addToCart, removeFromCart} = CartSlice.actions
export default CartSlice.reducer