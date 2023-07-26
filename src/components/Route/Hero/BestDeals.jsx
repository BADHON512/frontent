import React, { useEffect, useState } from 'react';

import ProductCart from '../ProductCart/ProductCart.jsx'
import { useSelector } from 'react-redux';

const BestDeals = () => {
    const [data,setData]=useState([])
    const {product}=useSelector((state)=>state.product)
    useEffect(()=>{
      const productData=product
        const d=productData
        const firstFive= d
        setData(firstFive)
    },[])
    return (
        <div>
          <div className="w-[91%] mx-auto ">
            <div className="text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]">
             <h1>Best Deals</h1>
            </div>
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5 xl:gap-7">
                   {
                    data&&data.map((v,index)=>(<ProductCart data={v} key={index}/>))
                   }

            </div>
          </div>
        </div>
    );
};

export default BestDeals;