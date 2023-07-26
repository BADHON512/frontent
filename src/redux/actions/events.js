
import  axios  from 'axios';
import { server } from './../../server';

export const createEvent=(newForm)=>async(dispatch)=>{
   try {
      dispatch({
        type:"eventCreateRequest"
      })
      const config={headers:{"Content-Type":"multipart/form-data"}} 
      const {data}=await axios.post(`${server}/create-event`,newForm,config)

      dispatch({
        type:"eventCreateSuccess",
        payload:data.event
      })
   } catch (error) {
    dispatch({
        type:"eventCreateFail",
        payload:error.response.data.message
      })
   }
}

 export const getAllEvent=(id)=>async(dispatch)=>{
  try {
     dispatch({
      type:"getAllEventsShopRequest"
     })
     const {data}=await axios.get(`${server}/get-all-event/${id}`)
     dispatch({
      type:"getAllEventsShopSuccess",
      payload:data.event
     })
  } catch (error) {
    dispatch({
      type:"getAllEventsShopFail",
      payload:error.response.data.message
     })
  }
}

export const deleteEvent=(id)=>async(dispatch)=>{
  try {
    
      dispatch({
        type:"deleteEventRequest"
      })
      const {data}=await axios.delete(`${server}/event-delete/${id}`,{withCredentials:true})
      dispatch({
        type:"deleteEventSuccess",
        payload:data.message
      })
  } catch (error) {
    dispatch({
      type:"deleteEventFail",
      payload:error.response.data.message
    })
    
  }
}