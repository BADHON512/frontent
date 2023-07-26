import React from 'react';
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSideBar';
import ShopDashboardHeader from '../../components/Shop/Layout/ShopDashboardHeader';
import CreateEvents from '../../components/Shop/CreateEvents.jsx'

const ShopCreateEventsPage = () => {
    return (
        <div>
        <ShopDashboardHeader/>
        <div className="flex  justify-between w-full">
        <div className=" w-[70px] 800px:w-[330px]">
            <DashBoardSideBar active={6}/>
        </div>
             <div className="w-full flex items-center justify-center mt-2">
               <CreateEvents/>
             </div>
  
       </div>
    </div>
    );
};

export default ShopCreateEventsPage;