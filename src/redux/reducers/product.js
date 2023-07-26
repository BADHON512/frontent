
import { createReducer } from '@reduxjs/toolkit';
const initialState={
    isLoading:true
}

const ProductReducer=createReducer(initialState,{

   productCreateRequest:(state)=>{
    state.isLoading=true
   },
   productCreateSuccess:(state,action)=>{
    state.isLoading=false;
    state.product=action.payload
    state.success=true

   },
   productCreateFail:(state,action)=>{
    state.isLoading=false
    state.error=action.payload;
    state.success=false
   },

   //get all product
   
   getAllProductsShopRequest:(state)=>{
    state.isLoading=true;
   },
   getAllProductsShopSuccess:(state,action)=>{
    state.isLoading=false;
    state.products=action.payload
   },
   getAllProductsShopFail:(state,action)=>{
    state.isLoading=false;
    state.error=action.payload
   },

   // delete product of a shop
    deleteProductRequest:(state)=>{
     state.isLoading=true
    },
    deleteProductSuccess:(state,action)=>{
        state.isLoading=false
        state.message=action.payload
       },

       deleteProductFail:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
       },

       getAllProductRequest:(state)=>{
        state.isLoading=true
       },
       getAllProductSuccess:(state,action)=>{
        state.isLoading=false
        state.product=action.payload
       },
       getAllProductFail:(state,action)=>{
        state.isLoading=false
        state.error=action.payload
       },

   clearError:(state)=>{
    state.error=null
   }

})

export default ProductReducer