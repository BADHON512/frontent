import { createReducer } from "@reduxjs/toolkit";

const wishListItems=localStorage.getItem("WishListItems")
const wishListItemsWithParse=JSON.parse(localStorage.getItem("WishListItems"))
const initialState={
  wishlist:wishListItems?wishListItemsWithParse:[]
}

export const wishListReducer=createReducer(initialState,{
   
    addToWishList:(state,action)=>{
       const Items=action.payload
       const existItem= state.wishlist.find((i)=>i._id===Items._id)
       if(existItem){
        return{
            ...state,
            wishlist:state.wishlist.map((i)=>i._id===existItem?Items:i)
        }
       }else{
        return{
            ...state,wishlist:[...state.wishlist,Items]
        }
       }
    },

    removeFromWishList:(state,action)=>{
     return{
        ...state,wishlist:state.wishlist.filter((i)=>i._id!==action.payload)
     }
    }

})