import React from 'react';
import styles from '../../../styles/style';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='flex items-center w-full bg-cover bg-center bg-no-repeat relative min-h-[70vh] 800px:min-h-[80vh]'
        style={{backgroundImage:"url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)"}}>
           <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
            <h1 className='text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize'>Best Collection for <br /> Home Decoration</h1>
            <p className='pt-5  font-Poppins font-[400] text-[#000000]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur rerum explicabo odit! Maxime dolor nihil consectetur dolorum possimus dolores!</p>
           <Link to={"/products"}>
            <div className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-sm cursor-pointer">

                <span className='text-[#fff] font-Poppins text-[18px] '>Shop Now</span>
            </div>
           </Link>
           .
           </div>
        </div>
    );
};

export default Hero;