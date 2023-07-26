import React from 'react';
import ShopDashboardHeader from "../../../components/Shop/Layout/ShopDashboardHeader.jsx"
import DashBoardSideBar from "../../../components/Shop/Layout/DashBoardSideBar.jsx"

const ShopDashboardPage = () => {
   
    return (
        <div>
           <ShopDashboardHeader/>
           <div className="flex justify-between w-full">
            <div className=" w-[70px] 800px:w-[330px]">
                <DashBoardSideBar active={1}/>
            </div>
      
           </div>
        </div>
    );
};

export default ShopDashboardPage;