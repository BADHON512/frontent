import { createReducer } from "@reduxjs/toolkit";
const initialState={
    isAuthenticated:false
}

export const userReducer=createReducer(initialState,{
    LoadUserRequest:(state)=>{
        state.userLoading=true
    },
    LoadUserSuccess:(state,action)=>{
        state.userLoading=false
        state.isAuthenticated=true
        state.user=action.payload
    },
    LoadUserFail:(state,action)=>{
        state.userLoading=false
        state.isAuthenticated=false
        state.error=action.payload
    },
    //get All user
    getAllUserRequest:(state)=>{
        state.loading=true
    },
    getAllUserSuccess:(state,action)=>{
        state.loading=false
        state.isAuthenticated=true
        state.users=action.payload
    },
    getAllUserFail:(state,action)=>{
        state.loading=true
        state.isAuthenticated=false
        state.error=action.payload
    },
    userUpDateRequest:(state)=>{
        state.loading=true
    },
    userUpDateSuccess:(state,action)=>{
        state.loading=false
        state.user=action.payload
    },
    userUpDateFail:(state,action)=>{
        state.loading=false
        state.error=action.payload
    },

    //update Address
    userAddressesUpDateRequest:(state,)=>{
       state.addressLoading=true
    },
    userAddressesUpDateSuccess:(state,action)=>{
        state.addressLoading=false
        state.newAddress=action.payload
    },
    userAddressesUpDateFail:(state,action)=>{
        state.addressLoading=false
        state.error=action.payload
    },
    clearErrors:(state)=>{
        state.error=null
    }

})