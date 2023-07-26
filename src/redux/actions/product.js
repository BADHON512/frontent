
import axios  from 'axios';
import { server } from './../../server';

export const createProduct=(newForm)=>async(dispatch)=>{
    try {
       dispatch({
        type:"productCreateRequest"
       }) 
       const config= {headers:{"Content-Type":"multipart/form-data"}}
    ;
       const {data}=await axios.post(`${server}/create-product`,newForm,
       config)
       dispatch({
        type:"productCreateSuccess",
        payload:data.product
       })
    } catch (error) {
        dispatch({
            type:"productCreateFail",
            payload:error.data.response.message
           }) 
    }
}

export const getAllProductsShop=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"getAllProductsShopRequest"
        })
        const {data}=await axios.get(`${server}/get-all-products/${id}`)

        dispatch({
            type:"getAllProductsShopSuccess",
            payload:data.product
        })
    } catch (error) {
        dispatch({
            type: "getAllProductsShopFailed",
            payload: error.response.data.message,
          });
    }
}


export const deleteProduct=(id)=>async(dispatch)=>{
    try {
        dispatch({
            type:"deleteProductRequest"
        })
        const {data}=await axios.delete(`${server}/delete-shop-product/${id}`,{withCredentials:true})
        dispatch({
            type:"deleteProductSuccess",
            payload:data.message
        })
    } catch (error) {
        dispatch({
            type:"deleteProductFail",
            payload: error.response.data.message,
        })  
    }
}

export const getAllProduct=()=>async(dispatch)=>{
    try {
        dispatch({
            type:"getAllProductRequest"
        })
        const {data}= await axios.get(`${server}/get-all-product`)
        dispatch({
            type:"getAllProductSuccess",
            payload:data.product
        })
    } catch (error) {
        
        dispatch({
            type:"getAllProductFail",
            payload: error.response.data.message,
        })
    }
}
