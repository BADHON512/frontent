import React, { useEffect, useState } from 'react';
import Header from './../components/Layout/Header';
import Footer from './../components/Layout/Footer';
import ProductDetails from "../components/Products.ProductDetails.jsx"
import { useParams } from 'react-router-dom';

import SuggestedProduct from  "../components/products/SuggestedProduct.jsx"
import { useSelector } from 'react-redux';
const ProductsDetailsPage = () => {
    const {product}=useSelector((state)=>state.product)
   
    const {id}=useParams()
    const [data,setData]=useState()
 

    useEffect(()=>{
        const d=product&&product.find((i)=>i._id===id)
        setData(d)
    },[product,id])
    return (
        <div>
           <Header/>
           <ProductDetails data={data}/>
           {
            data&&<SuggestedProduct data={data}/>
           }
           <Footer/>
        </div>
    );
};

export default ProductsDetailsPage;