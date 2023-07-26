import React from 'react';
import { RxCross1 } from 'react-icons/rx'
import { BsCartPlus } from "react-icons/bs";
import { useState } from 'react';

import { Link } from 'react-router-dom';
import { AiOutlineHeart, } from 'react-icons/ai';

const Wishlist = ({ setOpenWishlist }) => {

    const cartData = [
        {
            name: "iphone 14 pro max",
            description: "text service"
            , price: 94
        },
        {
            name: "iphone 14 pro max",
            description: "text service"
            , price: 945
        },
        {
            name: "iphone 14 pro max",
            description: "text service"
            , price: 9123
        },
    ]
    return (
        <div className='fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10'>
            <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
                <div>
                    <div className="flex w-full justify-end pt-5 pr-5">
                        <RxCross1 onClick={() => setOpenWishlist(false)} size={25} className='cursor-pointer' />

                    </div>
                    {/* Item length */}
                    <div className="flex items-center p-5">
                        <AiOutlineHeart size={25} />
                        <h5 className='text-[20px] font-[500] pl-2'>3 Items </h5>
                    </div>
                    {/* Cart Single items */}
                    <br />
                    <div className="w-full border-t">
                        {
                            cartData && cartData.map((v, index) => (
                                <CartSingle data={v} key={index} />
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

const CartSingle = ({ data }) => {
    const [value, setValue] = useState(1)
    const totalPrice = Number(data.price * value)
    return (
        <div className='border-b p-4'>
            <div className="w-full flex items-center justify-between">

              
                    <RxCross1 size={10} className='cursor-pointer mr-3' />
                    <img src="https://www.lerevecraze.com/wp-content/uploads/2019/06/6f720bd057652f40368b542daaec3780.jpg" className='h-[80px] w-[80px]' alt="img Error" />
            

                <div className='pl-[5px]'>
                    <h1>{data.name}</h1>
                    <h4 className='font-[400] text-[15px] text-[#00000082]'>
                        ${data.price}*{value}
                    </h4>
                    <h4 className='font-[600] text-[17px] pt-[3px] text-[#d02222]'>US${totalPrice}</h4>
                    
                </div>
<BsCartPlus size={20}/>
            </div>
        </div>
    )
}


export default Wishlist;