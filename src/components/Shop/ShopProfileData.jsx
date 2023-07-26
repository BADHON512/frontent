import React, { useState } from 'react';

import styles from '../../styles/style';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductCart from '../Route/ProductCart/ProductCart';

const ShopProfileData = () => {
    const {id}=useParams()
    const {product}=useSelector((state)=>state.product)
    const Product=product&&product.filter((v,i)=>v.shopId===id)
    
    const [active, setActive] = useState(1)
    return (
        <div className='w-full '>
            <div className="flex w-full items-center justify-between pb-5">
               <div className="flex " >
               <div onClick={() => setActive(1)} className="flex items-center">
                    <h5 className={`font-[600] text-[20px] ${active === 1 ? "text-red-500" : "text-[#333]"} cursor-pointer pr-[20px]`} >Shop Product</h5>
                </div>
                <div onClick={() => setActive(2)} className="flex items-center">
                    <h5 className={`font-[600] text-[20px] ${active === 2 ? "text-red-500" : "text-[#333]"} cursor-pointer pr-[20px]`} >Running Events</h5>
                </div>
                <div onClick={() => setActive(3)} className="flex items-center">
                    <h5 className={`font-[600] text-[20px] ${active === 3 ? "text-red-500" : "text-[#333]"} cursor-pointer pr-[20px]`} >Shop Shp review</h5>
                </div>
               </div>
               
            <Link to="/dashboard"><div className={`${styles.button} !h-[42px] !rounded-sm`}> <span className='text-white'>Go to Dashboard</span> </div></Link>
              

            </div>

            <div className='pt-5 grid grid-cols-1 gap-[10px] 800px:grid-cols-2 800px:gap-[20px] lg:grid-cols-3 lg:gap-[30px] xl:grid-cols-4 xl:gap-[30px] pb-12 border'>

                {
                  Product?.map((v,i)=>(
                    <ProductCart data={v} key={i}/>
                  ))  
                }
            </div>
        </div>
    );
};

export default ShopProfileData;