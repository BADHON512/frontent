import React from 'react';
import ShopDashboardHeader from '../../components/Shop/Layout/ShopDashboardHeader';
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSideBar';
import AllEvents from "../../components/Shop/AllEvents.jsx"
const ShopAllEventsPage = () => {
    return (
        <div>
                    <ShopDashboardHeader/>
            <div className="flex  justify-between w-full">
            <div className=" w-[70px] 800px:w-[330px]">
                <DashBoardSideBar active={5}/>
            </div>
                 <div className=" w-full  mr-4">
                   <AllEvents/>
                 </div>
      
           </div>
        </div>
    );
};

export default ShopAllEventsPage;