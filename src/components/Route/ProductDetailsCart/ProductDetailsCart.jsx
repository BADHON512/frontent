import React, { useEffect, useState } from 'react';
import { RxCross1 } from "react-icons/rx"
import styles from '../../../styles/style';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage, AiOutlineShoppingCart } from "react-icons/ai"
import { serverR } from '../../../server';
import { addToWishList, deleteFromWishList } from '../../../redux/actions/wishlish';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const ProductDetailsCart = ({ setOpen, data }) => {
    const [count, setCount] = useState(1)
    const [click, setClick] = useState(false)
    const [slect, setslect] = useState(false)
    const { wishlist } = useSelector((state) => state.wishlist)

    useEffect(() => {
        const inth = wishlist?.find((i) => i._id === data._id)
        if (inth) {
            setClick(true)
        } else {
            setClick(false)
        }
    }, [wishlist])

    const dispatch = useDispatch()
    const handleMessageSubmit = () => {

    }
    const addWishlistHandler = (data) => {


        setClick(!click)

        dispatch(addToWishList(data))
        toast.success("added in the wishlist")
    }
    const removeWishlistHandler = (data) => {

        setClick(!click)
        dispatch(deleteFromWishList(data))
        toast.error("remove from the wishlist")
    }

    return (
        <div className='bg-white'>
            {
                data ? (<div className='fixed w-full h-screen top-0 left-0 bg-black bg-opacity-20 z-40 flex items-center justify-center'>
                    <div className="w-[90%] 800px:w-[60%] h-[90vh] overflow-y-scroll bg-white rounded-md shadow-sm relative p-4">
                        <RxCross1 size={30} className='absolute right-3 top-3 z-50'
                            onClick={() => setOpen(false)} />

                        <div className="block w-full 800px:flex">
                            <div className="w-full 800px:w-[50%]">
                                <img src={`${serverR}/${data.images[0]}`} alt="" />
                                <div className="flex">
                                    <img src={`${serverR}/${data.shop.avatar}`} alt="" className='w-[50px] h-[50px] rounded-full mr-2' />
                                    <div>
                                        <h3 className={`${styles.shop_name}`}>{
                                            data.shop.name
                                        }</h3>
                                        <h5 className='pb-3 text-[15px]'>
                                            ({data.shop.ratings})Ratings
                                        </h5>

                                    </div>

                                </div>
                                <div className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`} onClick={handleMessageSubmit}>
                                    <span className='text-[#fff] flex items-center'>
                                        Send Message <AiOutlineMessage className='ml-1' />
                                    </span>
                                </div>
                                <h5 className=" text-[red] mt-5">({data.total_sell})Sold out</h5>
                            </div>

                            <div className="w-full 800px:w-[50%] pt-5 pl-[5px] pr-[5px]">
                                <h1 className={`${styles.productTitle} text-[20px]`}>{data.name}</h1>
                                <p>{data.description}</p>
                                <div className="flex pt-3">
                                    <h4 className={`${styles.productDiscountPrice}`}>
                                        {data.productDiscountPrice}$</h4>
                                    <h3 className={`${styles.price}`}>{data.price ? data.price + "$" : null}</h3>
                                </div>
                                <div className="flex items-center mt-12 justify-between pr-3">
                                    <div>
                                        {
                                            count === 0 ? <button className='bg-blue-600 px-2 text-white rounded-sm  font-bold  hover:bg-blue-950 transition' disabled
                                            >-</button> : <button className='bg-blue-600 px-2 text-white rounded-sm  font-bold  hover:bg-blue-950 transition' onClick={() => setCount(count - 1)}
                                            >-</button>
                                        }
                                        <span className='bg-gray-200 text-gray-800 font-medium px-4'>{count}</span>
                                        <button className='bg-blue-600 px-2 text-white rounded-sm  font-bold  hover:bg-blue-950 transition'
                                            onClick={() => setCount(count + 1)} >+</button>
                                    </div>
                                    <div>
                                        {click ? (<AiFillHeart size={22} className=' cursor-pointer '
                                            onClick={() => removeWishlistHandler(data)}
                                            color={click ? "red" : "#333"}
                                            title="Remove from Wishlist" />) :
                                            (<AiOutlineHeart size={22}
                                                className=' cursor-pointer '
                                                onClick={() => addWishlistHandler(data)}
                                                color={click ? "red" : "#333"}
                                                title="Add to Wishlist" />)}
                                    </div>
                                </div>
                                <div className={`${styles.button} bg-[#000] mt-4 rounded-[4px] h-11`} onClick={handleMessageSubmit}>
                                    <span className='text-[#fff] flex items-center'>
                                        Send Message <AiOutlineShoppingCart className='ml-1' />
                                    </span>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>) : null
            }

        </div>
    );
};

export default ProductDetailsCart;