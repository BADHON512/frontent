import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './../../../styles/style';
import { AiFillHeart, AiFillStar, AiOutlineEye, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai"
import ProductDetailsCart from "../ProductDetailsCart/ProductDetailsCart.jsx"
import { serverR } from '../../../server';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../redux/actions/cart';
import { toast } from 'react-toastify';
import { addToWishList ,deleteFromWishList } from '../../../redux/actions/wishlish';

const ProductCart = ({ data }) => {
    
    const [open, setOpen] = useState(false)
    const [click, setClick] = useState(false)
    const {cart}=useSelector((state)=>state.cart)
    const {wishlist}=useSelector((state)=>state.wishlist)
   
    useEffect(()=>{
        const inth= wishlist?.find((i)=>i._id===data._id)
        if(inth){
            setClick(true)
        }else{
            setClick(false)
        }
    },[wishlist])

    const dispatch=useDispatch()
    const addTshop=(data)=>{
        const exisItem= cart?.find((i)=>i._id===data._id)
        if(exisItem){
            toast.error("already added in the cart")
        }else{
         dispatch(addToCart({...data,qty:1}))
         toast.success("Item added to cart")   
        }
         
    }
    const addWishlistHandler=(data)=>{
    
            
        setClick(!click)
      
            dispatch(addToWishList(data))
            toast.success("added in the wishlist")
    }
    const removeWishlistHandler=(data)=>{
   
            setClick(!click)
        dispatch(deleteFromWishList(data))
        toast.error("remove from the wishlist")
    }
    return (
        <>
            <div className='w-full h-[370px] bg-white rounded-lg  shadow-sm p-3 relative cursor-pointer'>
                <div className="flex justify-end">

                </div>
                <Link to={`/product/${data?._id}`}>
                    <img src={`${serverR}/${data&& data?.images[0]}`} alt="img Error" className='w-full h-[170px] object-contain' />
                </Link>
                <Link to={`/shop/${data?.shop._id}`}>

                    <h5 className={`${styles.shop_name}`}>{data?.shop.shopName}</h5>
                </Link>
                <Link to={`/product/${data?._id}`}>

                    <h4 className='pb-3 font-[500]'>{
                        data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name
                    }</h4>
                </Link>
                <div className="flex">
                    <AiFillStar
                        className="mr-2 cursor-pointer" color="#F6BA00" size={20} />
                    <AiFillStar
                        className="mr-2 cursor-pointer" color="#F6BA00" size={20} />
                    <AiFillStar
                        className="mr-2 cursor-pointer" color="#F6BA00" size={20} />
                    <AiFillStar
                        className="mr-2 cursor-pointer" color="#F6BA00" size={20} />
                    <AiFillStar
                        className="mr-2 cursor-pointer" color="#F6BA00" size={20} />
                </div>

                <div className="py-2 flex items-center justify-between">

                    <div className="flex">
                        <h5 className={`${styles.productDiscountPrice}`}>
                            {
                                data?.originalPrice === 0 ? data?.originalPrice : data?.discountPrice
                            }$
                        </h5>
                        <h2 className={`${styles.price}`}>
                            {data?.originalPrice ? data?.originalPrice + "$" : null}
                        </h2>
                    </div>
                    <span className='font-[400] text-[17px] text-[#68d284]'>{data?.total_sell} sold</span>

                </div>

                {/*side var*/}
                <div>
                    {click ? (<AiFillHeart size={22} className='absolute cursor-pointer right-2 top-5'
                        onClick={() => removeWishlistHandler(data)}
                        color={click ? "red" : "#333"}
                        title="Remove from Wishlist" />) :
                         (<AiOutlineHeart size={22}
                             className='absolute cursor-pointer right-2 top-5'
                            onClick={() => addWishlistHandler(data) }
                            color={click ? "red" : "#333"}
                            title="Add to Wishlist" />)}

                    <AiOutlineEye
                        size={22}
                        color='#333'
                        title="Quick view" 
                        onClick={()=>setOpen(true)}
                        className='absolute cursor-pointer right-2 top-12' />

                    <AiOutlineShopping
                        size={22}
                        color='#333'
                        title="Add to cart" 
                        onClick={()=>addTshop(data)}
                        className='absolute cursor-pointer right-2 top-20' />
                        {
                            open?<ProductDetailsCart open={open} setOpen={setOpen} data={data}/>:null
                        }
                </div>

            </div>
        </>
    );
};

export default ProductCart;