
import { createReducer } from '@reduxjs/toolkit';
const getItems= localStorage.getItem("CartItems")
const getItemsParse=JSON.parse(localStorage.getItem("CartItems"))
const initialState={
    cart: getItems?getItemsParse:[]
}
export  const cartReducer=createReducer(initialState,{
 AddToCart:(state,action)=>{
    const item=action.payload
    const existItem= state.cart.find((v)=>v._id===item._id)
    if(existItem){
        return{
            ...state,
            cart:state.cart.map((v)=>v._id===existItem._id?item:v)
        }
    }else{
        return{
            ...state,cart:[...state.cart,item]
        }
    }
 },

 removeFromCart:(state,action)=>{
    return{
        ...state, cart:state.cart.filter((v,i)=>v._id!==action.payload)
    }

 }
})