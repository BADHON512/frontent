
import axios  from 'axios';
import { server } from './../../server';
export const LoadSeller=()=>async(dispatch)=>{
    try {
         dispatch({
            type:"getSellerRequest"
         })
         const {data}=await axios.get(`${server}/get-seller`,{withCredentials:true})
         
         dispatch({
            type:"getSellerSuccess",
            payload:data.seller
         })
       

    } catch (error) {
        dispatch({
            type:"getSellerFail",
            payload:error.response.data.message
         })
    }
}


//get all seller

export const getAllSeller=()=>async(dispatch)=>{
   try {
        dispatch({
           type:"getAllSellerRequest"
        })
        const {data}=await axios.get(`${server}/get-all-seller`,{withCredentials:true})
        
        dispatch({
           type:"getAllSellerSuccess",
           payload:data.sellers
        })
      

   } catch (error) {
       dispatch({
           type:"getAllSellerFail",
           payload:error.response.data.message
        })
   }
}
