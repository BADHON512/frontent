import React from 'react';
import ShopDashboardHeader from '../../components/Shop/Layout/ShopDashboardHeader';
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSideBar';
import AllCoupons from "../../components/Shop/AllCoupons.jsx"

const ShopAllCouponsPage = () => {
    return (
        <div>
        <ShopDashboardHeader/>
        <div className="flex justify-between w-full">
        <div className=" w-[70px] 800px:w-[330px]">
            <DashBoardSideBar active={9}/>
            
        </div>
        <div className="flex w-full justify-center">
            <AllCoupons/> 
        </div>
          
       </div>
    </div>
    );
};

export default ShopAllCouponsPage;