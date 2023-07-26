import React from 'react';
import styles from './../../../styles/style';

import ProductCart from '../ProductCart/ProductCart';
import { useSelector } from 'react-redux';

const FeaturedProduct = () => {
    const {product}=useSelector((state)=>state.product)
    return (
        <div>
            <div className={`${styles.section}`}>
                <div className={`${styles.heading}`}>
                    <h1>Featured Products</h1></div>
                    <div className='grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5 xl:gap-7'>
                        {product&&product.map((v,index)=><ProductCart data={v} key={index}/>)}
                    </div>
                
            </div>
        </div>
    );
};

export default FeaturedProduct;