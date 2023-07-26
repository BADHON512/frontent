import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../../Assets/24151-ecommerce-animation.json"
const Loader = () => {
    const defaultOption={
        loop:true,
        autoplay:true,
        animationData:animationData,
        rendererSettingRatio:"xMidYMid slice"
    }
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <Lottie options={defaultOption} width={300} height={300}/>
        </div>
    );
};

export default Loader;