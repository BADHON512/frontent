import React from 'react';
import styles from '../../../styles/style';
import CountDown from "./CountDown/CountDown.jsx"

const EventsCart = () => {
    return (
        <div className='w-full block bg-white rounded-lg lg:flex p-2 mb-12'>
            <div className="w-full lg:w-[50%] m-auto">
                <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />

            </div>
            
            <div className="w-full lg:w-[50%] flex flex-col justify-center">
               <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256gb</h2>
      
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, debitis esse! Dolorem quas eum facere aliquid, quo recusandae, blanditiis itaque est, doloremque odio consequatur adipisci. Praesentium eos ut ad libero rem vitae perspiciatis. Blanditiis dolorum odit reiciendis nihil pariatur ipsam quas cum maxime labore quidem quam, fugit aliquid, consequuntur ab sint !</p>
               <div className="flex py-2 justify-between">
                <div className="flex">
                    <h5 className='font-[500] text-[18px] text-[#d55b45] pr-3 line-through'>
                        10099$
                    </h5>
                    <h5 className='font-bolt text-[20px] text-[#333] font-Roboto'>
                        9999$
                    </h5>
                </div>
                <span className='pr-3 font-[400] text-[#44a55e]'>120 sold</span>

               </div>
               <CountDown/>
            </div>
        </div>
    );
};

export default EventsCart;