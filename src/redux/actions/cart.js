
export const addToCart=(data)=>(dispatch,getState)=>{
 
    dispatch({
        type:"AddToCart",
        payload:data
    })
    localStorage.setItem("CartItems",JSON.stringify(getState().cart.cart))

} 

export const deleteFromCart=(data)=>(dispatch,getState)=>{
    dispatch({
        type:"removeFromCart",
        payload:data._id
    })
    localStorage.setItem("CartItems",JSON.stringify(getState().cart.cart))
}