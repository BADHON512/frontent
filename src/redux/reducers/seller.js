import { createReducer } from "@reduxjs/toolkit";

 const initialState={
    isLoading:false
 }

export const SellerReducer=createReducer(initialState,{
    getSellerRequest:(state)=>{
        state.isLoading=true
    },
    getSellerSuccess:(state,action)=>{
        state.isLoading=false
        state.seller=action.payload
        state.isSeller=true

    },  
    getSellerFail:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        state.isSeller=false

    },

    // get all seller

    getAllSellerRequest:(state)=>{
        state.isLoading=true
    },
    getAllSellerSuccess:(state,action)=>{
        state.isLoading=false
        state.allSeller=action.payload
        state.isSellers=true

    },  
    getAllSellerFail:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
        state.isSellers=false

    },
  


    clearError:(state)=>{
     state.error=null
    }
})