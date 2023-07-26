import React from 'react';
import { RxCross1 } from 'react-icons/rx'
import { IoBagHandleOutline } from "react-icons/io5"
import { useState } from 'react';
import {HiPlus , HiOutlineMinus} from "react-icons/hi"
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { serverR } from '../../server';
import { addToCart, deleteFromCart } from '../../redux/actions/cart';
import { toast } from 'react-toastify';

const Cart = ({ setOpenCart }) => {
    const {cart}=useSelector((state)=>state.cart)
     const dispatch=useDispatch()
        const  quantityChangeHandler=(data)=>{
      dispatch(addToCart(data))
   } 

    const totalPrice=cart?.reduce((acc,i)=>acc+i.qty*i.discountPrice,0)
  
    return (
        <div className='fixed top-0 left-0 w-full bg-[#0000004b] min-h-screen z-10 '>
            <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm ">
                <div className=''>
                    <div className="flex w-full justify-end pt-5 pr-5">
                        <RxCross1 onClick={() => setOpenCart(false)} size={25} className='cursor-pointer' />

                    </div>
                    {/* Item length */}
                    <div className="flex items-center p-5">
                        <IoBagHandleOutline size={25} /> 
                        <h5 className='text-[20px] font-[500] pl-2'>{cart?.length} Items </h5>
                    </div>
                    {/* Cart Single items */}
                    <br />
                    <div className="w-full border-t overflow-y-scroll" style={{ minHeight: '300px' }}>
                        {
                           cart?.length===0?(<h1 className='text-center font-semibold'>No items in the cart </h1>):(
                            cart?.map((v,index)=>(
                                <CartSingle quantityChangeHandler={quantityChangeHandler} data={v} key={index}/>
                            ))
                           )
                        }
                    </div>
                </div>
                <div className="px-5 mb-3">
                    {/* checkout button */}
                    <Link
                    to={"/checkout"}>
                        <div className="h-[45px] flex items-center justify-center w-[100%] bg-[#e44343] rounded-sm p-3">
                            <h1 className='text-[#fff] text-center  fon-[600]'>
                                Checkout Now USD ${totalPrice}
                            </h1>
                        </div>
                    </Link>
                    
                </div>



                
            </div>
        </div>
    );
};

const CartSingle=({data,quantityChangeHandler})=>{
    const[value,setValue]=useState(data.qty)
    const totalPrice=Number(data.discountPrice*value)
    const dispatch=useDispatch()
    const deleteItem=(data)=>{
           dispatch(deleteFromCart(data))
           toast.success( " Item Remove from the cart ") 
    }
    const increment=()=>{
       setValue(value+1)
       const updata={...data,qty:value+1}
       quantityChangeHandler(updata)
    }
    const decrement=()=>{
        setValue(value===1?1:value-1)
        const updata={...data,qty:value===1?1:value-1}
        quantityChangeHandler(updata)
    }
    return(
        <div className='border-b p-4 '>
          <div className="w-full flex items-center overflow-y-auto">
            <div className="">
                <div className="bg-orange-600 border border-[#443437] rounded-full h-[25px] w-[25px] flex items-center justify-center cursor-pointer"
                onClick={()=>increment()}>
                    <HiPlus size={18} color='#fff'/>
                </div>
                <span className='pl-[8px]'>{value}</span>
                <div className="bg-[#4e574d] border border-[#443437] rounded-full h-[25px] w-[25px] flex items-center justify-center cursor-pointer"
                onClick={()=>decrement()}>
                    <HiOutlineMinus size={18} color='#7dB79c'/>
                </div>
            </div>
            <img src={`${serverR}/${data?.images[0]}`}className='h-[80px] w-[80px]'  alt="img Error" />
            <div className='pl-[5px]'>
              <h1>{data.name.slice(0,15 )+ "..."}</h1>
              <h4 className='font-[400] text-[15px] text-[#00000082]'>
                ${data.price}*{value}
              </h4>
              <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222]'>US${totalPrice}</h4>
            </div>
            <RxCross1 onClick={()=>deleteItem(data)} size={15} className='cursor-pointer'/>
          </div>
        </div>
    )
}


export default Cart;