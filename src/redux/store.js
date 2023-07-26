
import {configureStore}from "@reduxjs/toolkit"
import { userReducer } from './reducers/user';
import { SellerReducer } from "./reducers/seller";
import ProductReducer from "./reducers/product";
import eventReducer from "./reducers/events";
import { cartReducer } from "./reducers/cart";
import { wishListReducer } from "./reducers/wishlist";


const Store= configureStore({
    reducer:{
       user:userReducer,
       seller:SellerReducer,
       product:ProductReducer,
       event:eventReducer,
       cart:cartReducer,
       wishlist:wishListReducer,
    }
})

export default Store;