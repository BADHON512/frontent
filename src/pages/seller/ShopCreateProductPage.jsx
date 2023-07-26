import React from 'react';
import ShopDashboardHeader from './../../components/Shop/Layout/ShopDashboardHeader';
import DashBoardSideBar from '../../components/Shop/Layout/DashBoardSideBar';
import CreateProduct from "../../components/Seller/CreateProduct.jsx"

const ShopCreateProductPage = () => {
    return (
        <div>
            <ShopDashboardHeader/>
            <div className="flex  justify-between w-full">
            <div className=" w-[70px] 800px:w-[330px]">
                <DashBoardSideBar active={4}/>
            </div>
                 <div className="w-full flex items-center justify-center mt-2">
                   <CreateProduct/>
                 </div>
      
           </div>
        </div>
    );
};

export default ShopCreateProductPage;