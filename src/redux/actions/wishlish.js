

export const addToWishList=(data)=>(dispatch,getState)=>{
    dispatch({
        type:"addToWishList",
        payload:data
    })

    localStorage.setItem("WishListItems",JSON.stringify(getState().wishlist.wishlist))
}

export const deleteFromWishList=(data)=>(dispatch,getState)=>{
    dispatch({
        type:"removeFromWishList",
        payload:data._id
    })

    localStorage.setItem("WishListItems",JSON.stringify(getState().wishlist.wishlist))
}