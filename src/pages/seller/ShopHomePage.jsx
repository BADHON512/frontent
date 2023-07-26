import ShopInfo from "../../components/Shop/ShopInfo.jsx"
import ShopProfileData from "../../components/Shop/ShopProfileData.jsx"
import React from 'react';
import styles from './../../styles/style';

const ShopHomePage = () => {
    return (
        <div className={`${styles.section} bg-white`}>
          <div className="w-full flex py-10 justify-between">
            <div className='w-[25%] bg-[#f5f5f5] rounded-sm shadow-sm overscroll-y-auto h-[90vh] sticky left-0 z-10'>
                <ShopInfo isOwner={true}/>
            </div>
            <div className="w-[72%] rounded-sm">

                <ShopProfileData isOwner={true}/>
            </div>
          </div>
        </div>
    );
};

export default ShopHomePage;