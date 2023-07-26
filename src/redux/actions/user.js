import axios from "axios";
import { server } from './../../server';


export const loadUser=()=>async(dispatch)=>{
    try {
         dispatch({
            type:"LoadUserRequest"
         })
         const {data}=await axios.get(`${server}/user/get-user`,{withCredentials:true})
         dispatch({
            type:"LoadUserSuccess",
            payload:data.user
         })
    } catch (error) {
        dispatch({
            type:"LoadUserFail",
            payload:error.response.data.message
         })
    }
}

export const getAllUser=()=>async(dispatch)=>{
   try {
        dispatch({
           type:"getAllUserRequest"
        })
        const {data}=await axios.get(`${server}/user/get-all-user`,{withCredentials:true})
        dispatch({
           type:"getAllUserSuccess",
           payload:data.users
        })
   } catch (error) {
       dispatch({
           type:"getAllUserFail",
           payload:error.response.data.message
        })
   }
}

export const upDateUer=(name,email,password,phoneNumber)=>async(dispatch)=>{
   try {
      dispatch({
         type:"userUpDateRequest"
      })
  
       const{data}=await axios.put(`${server}/user/user-update`,{name,email,password,phoneNumber},{withCredentials:true,  })
      dispatch({
         type:"userUpDateSuccess"
         ,payload:data.user
      })
   } catch (error) {
      dispatch({
         type:"userUpDateFail",
         payload:error.response.data.user
      })
   }
}

export const addressUpdate=(country, addressType, address2, address1, zipCode, city,)=>async(dispatch)=>{
   try {
      dispatch({
         type:"userAddressesUpDateRequest"
      })
  
       const{data}=await axios.put(`${server}/user/update-addresses`,{country, addressType, address2, address1, zipCode, city,},{withCredentials:true,  })
      dispatch({
         type:"userAddressesUpDateSuccess"
         ,payload:data.user
      })
   } catch (error) {
      dispatch({
         type:"userAddressesUpDateFail",
         payload:error.response.data.user
      })
   }
}