import React, { useEffect, useState } from 'react';
import Header from '../components/Layout/Header';
import styles from '../styles/style';
import { useSearchParams } from 'react-router-dom';

import ProductCart from '../components/Route/ProductCart/ProductCart';
import { useSelector } from 'react-redux';

const ProductsPage = () => {
    const [data,setData]=useState([])
    const {product}=useSelector((state)=>state.product)
    console.log()
    const[searchParams]=useSearchParams()
    const categoryData=searchParams.get("category")
    useEffect(()=>{
        if(categoryData===null){
            const d=product
            setData(d)
        }else{
            const d=product&&product.filter((a)=> a.category===categoryData)
            setData(d)
        }
    },[product])
    return (
        <div>
         <Header activeHeading={3}/>
         <br />
         <br />
         <div className={`${styles.section}`}>
            <div className="grid grid-cols-1 gap-32 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-8 mb-12">
              {
                data&&data.map((v,index)=><ProductCart data={v} key={index}/>)
              }
         
            </div>
            {
                data&&data.length===0?<h1 className='text-center'>Product not found</h1>:null
              }
         </div>
    
        </div>
    );
};

export default ProductsPage;