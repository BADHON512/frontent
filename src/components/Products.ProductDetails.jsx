import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './../styles/style';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { serverR } from '../server';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../redux/actions/cart';
import { addToWishList, deleteFromWishList } from '../redux/actions/wishlish';

const ProductDetails = ({ data }) => {
    const {cart}=useSelector((state)=>state.cart)
    const [count, setCount] = useState(1)
    const [click, setClick] = useState(false)
    const [select, setSelect] = useState(0)
    const dispatch=useDispatch()
    const Navigate = useNavigate()
    const {wishlist}=useSelector((state)=>state.wishlist)
    useEffect(()=>{
        const inth= wishlist?.find((i)=>i._id===data._id)
        if(inth){
            setClick(true)
        }else{
            setClick(false)
        }
    },[])
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

    const handleCartSubmit = (id) => {
        const existItem=cart?.find((v)=>v._id===id)
        if(existItem){
            toast.error("This item already exist")
        }else{
            const cartData={...data,qty:count}
            dispatch(addToCart(cartData))
            toast.success("item added to cart successfully")
        }
    }
    


   const increment=()=>{
    setCount(count+1)
   }
   const decrement=()=>{
    setCount(count===1?1:count-1)
   }


    return (
        <div className='bg-white'>
            {
                data ?
                    <div className={`w-[91%] mx-auto 800px:w-[80%] min-h-screen`}>
                        <div className="w-full py-5">
                            <div className="block w-full 800px:flex">
                                <div className="w-full 800px:w-[50%]">
                                    <img src={`${serverR}/${data?.images[select]}`} alt="" className='w-[80%]' />
                                    <div className="w-full flex">

                                        {
                                            data?.images.map((v, i) => (

                                                <div className={`${select === 2 ? "border" : "null"} cursor-pointer`}>
                                                    <img src={`${serverR}/${[v]}`} alt="img Error"
                                                        onClick={() => setSelect(i)} />
                                                </div>

                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="w-full 800px:w-[50%] pt-5">
                                    <h1 className={`${styles.productTitle}`}>
                                        {data.name}
                                    </h1>
                                    <p>
                                        {data.description}
                                    </p>
                                    <div className='flex mt-3'>
                                        <h4 className={`${styles.productDiscountPrice}`}>
                                            {data.discount_price}$
                                        </h4>
                                        <h3 className={`${styles.price}`}>
                                            {data.price ? data.price + "$" : null}
                                        </h3>

                                    </div>
                                    <div className=' flex py-5 justify-between items-center'>
                                        <div className='flex'>
                                            <button className='bg-black px-3.5 py-2 rounded-sm 
                                         text-white font-bold'onClick={() => decrement()}>-</button>
                                            <span className=' flex items-center px-5 bg-[#b49595]'>{count}</span>
                                            <button className='bg-black px-3 py-2 rounded-sm 
                                         text-white font-bold' onClick={() => increment()}>+</button>
                                        </div>
                                        <div>

                                            {click ? (<AiFillHeart size={22} className=' cursor-pointer '
                                                onClick={() => removeWishlistHandler(data)}
                                                color={click ? "red" : "#333"}
                                                title="Remove from Wishlist" />) : (<AiOutlineHeart size={22} className=' cursor-pointer '
                                                    onClick={() => addWishlistHandler(data)}
                                                    color={click ? "red" : "#333"}
                                                    title="Add to Wishlist" />)}
                                        </div>


                                    </div>
                                    <div className={`${styles.button} bg-[#000] mt-4 !rounded-sm !h-11`} onClick={()=>handleCartSubmit(data._id)}>
                                        <span className='text-[#fff] flex items-center'>
                                            Add to Cart <AiOutlineShoppingCart className='ml-1' />
                                        </span>
                                    </div>

                                    <div className='flex items-center pt-8'>
                                        <img src={data.shop.avatar} alt=""
                                            className='w-[50px] h-[50px] rounded-full mr-2' />

                                        <div className=''>
                                            <h3 className={`${styles.shop_name}'pb-3 text-[15px]'`}>
                                                ({data.shop.name})
                                            </h3>
                                            <h4 className='pb-3 text-[15px]'>
                                                ({data.shop.ratings})Ratings
                                            </h4>
                                        </div>
                                        <div className={`${styles.button} !bg-[#6443d1] mt-4 !rounded !h-11 ml-2`}>
                                            <span className='text-white flex items-center'>Send Message <AiOutlineMessage className='ml-1' /></span>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <ProductDetailsInfo data={data} />
                    </div>

                    : null
            }
        </div>
    );
};

const ProductDetailsInfo = ({ data }) => {
    const [active, setActive] = useState(1)
    const { seller } = useSelector((state) => state.seller)
    const { product } = useSelector((state) => state.product)
    const [langth, setLength] = useState()

    useEffect(() => {
        const Length = product?.filter((v) => v.shopId === data.shopId)
        setLength(Length)
    }, [])



    return (
        <div className='bg-[#f5f5f5] px-3 800px:px-10 py-2 rounded min-h-[40vh]'>
            <div className="flex w-full justify-between border-b pt-10 pb-2">
                <div className="relative">
                    <h5 className='text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]' onClick={() => setActive(1)}>
                        Product Details
                        {active === 1 ? (<div className={`${styles.active_indicator}`}></div>) : null}
                    </h5>
                </div>
                <div className="relative">
                    <h5 className='text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]' onClick={() => setActive(2)}>
                        Product Review
                        {active === 2 ? (<div className={`${styles.active_indicator}`}></div>) : null}
                    </h5>
                </div>
                <div className="relative">
                    <h5 className='text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]' onClick={() => setActive(3)}>
                        Seller information
                        {active === 3 ? (<div className={`${styles.active_indicator}`}></div>) : null}
                    </h5>
                </div>
            </div>
            {
                active === 1 ? (<>
                    <p className='py-2 text-[18px] leading-8 pb-10 whitespace-pre-line'>
                        {data?.description}
                    </p>
                </>) : null
            }
            {
                active === 2 ? <div className='flex justify-center items-center min-h-[40vh] w-full'><p>No Review yet!</p></div> : null
            }
            {
                active === 3 && (
                    <div className='w-full block 800px:flex p-5'>
                        <div className='w-full 800px:w-[50%]'>
                            <div className='flex items-center'>
                                <img src={data.shop.avatar} alt=""
                                    className='w-[50px] h-[50px] rounded-full' />

                                <div className='ml-4'>
                                    <h3 className={`${styles.shop_name}'pb-3 text-[15px]'`}>
                                        ({data.shop.name})
                                    </h3>
                                    <h4 className='pb-3 text-[15px]'>
                                        ({data.shop.ratings})Ratings
                                    </h4>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam fugit suscipit omnis possimus ipsum illo mollitia cum eveniet nulla numquam, quia recusandae placeat voluptatum est aspernatur ipsam expedita nemo neque!</p>
                        </div>
                        <div className='mt-5  800px:mt-0 800px:flex flex-col items-end w-full 800px:w-[50%]'>
                            <div className='text-left'>
                                <h5 className='font-[600]'>
                                    Joined on:  <span className='font-[500]'>{seller?.createdAt.slice(0, 10)}</span>
                                </h5>
                                <h5 className='font-[600] mt-3'>
                                    Total Products: <span className='font-[500]'>{product && langth.length}</span>
                                </h5>
                                <h5 className='font-[600] mt-3'>
                                    Total reviews: <span className='font-[500]'>543</span>
                                </h5>
                                <Link to={`/shop/${data?.shopId}`}>
                                    <div className={`${styles.button} !rounded-[4px] h-[39.5px] mt-3`}>
                                        <h4 className='text-white' > Visit Shop</h4>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ProductDetails;