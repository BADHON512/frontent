import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import styles from '../styles/style';


import ProductCart from '../components/Route/ProductCart/ProductCart';
import { useSelector } from 'react-redux';

const ProductsPage = () => {
  const {product}=useSelector((state)=>state.product)

    const [data,setData]=useState()
    
 
    useEffect(()=>{
        
           
            setData(product)
    
    
    },[product])
    return (
        <div>
         <Header activeHeading={2}/>
         <br />
         <br />
         <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-[20%] md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-8 mb-12">
              {
                data&&data.map((v,index)=><ProductCart data={v} key={index}/>)
              }
         
            </div>
       
         </div>
    
        </div>
    );
};

export default ProductsPage;