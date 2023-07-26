import React, { useState, useEffect } from 'react';

import styles from '../../styles/style';
import ProductCart from './../Route/ProductCart/ProductCart';
import { useSelector } from 'react-redux';

const SuggestedProduct = ({ data }) => {
    const {product}=useSelector((state)=>state.product)
    const [produc, setProduc] = useState()
    useEffect(() => {
        const d = product && product.filter((v) => v.category === data.category)
        setProduc(d)
    }, [product])
    return (
        <div>
       {
        data?<div className={`${styles.section} p-4`}>
               <h2 className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}>
                Related Product
               </h2>
               <div
               className='grid grid-cols-1 gap-1 800px:grid-cols-2 800px:gap-4 lg:grid-cols-3  lg:gap-7 xl:grid-cols-5 xl:gap-10'>

                {
                    produc&&produc.map((v,i)=><ProductCart data={v} key={i}/>)
                }
               </div>
        </div>:null
       }
        </div>
    );
};

export default SuggestedProduct;