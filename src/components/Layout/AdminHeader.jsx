import React from 'react';
import { AiOutlineGift } from 'react-icons/ai';
import { MdOutlineLocalOffer } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiPackage, FiShoppingBag } from "react-icons/fi"
import { BiMessageSquareDetail } from 'react-icons/bi';

const AdminHeader = () => {
    const {user}=useSelector((state)=>state.user)
    return (
        <div className='w-full h-[80px] shadow-md flex bg-white sticky top-0 left-0 z-30 items-center justify-between px-4 '>
        <div>
            <Link to="/dashboard">
                <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="img not found" />
            </Link>
        </div>

        <div className="flex items-center">

            <div className="flex items-center mr-4">
                <Link to="/dashboard/coupons">
                    <AiOutlineGift
                        color='#555'
                        size={30}
                        className=' hidden 800px:block mx-5 cursor-pointer' />
                </Link>

                <Link to="/dashboard-events">
                    <MdOutlineLocalOffer
                        color='#555'
                        size={30}
                        className='mx-5 hidden 800px:block cursor-pointer' />
                </Link>

                <Link to="/dashboard-product">
                    <FiShoppingBag
                        color='#555'

                        size={30}
                        className='mx-5 hidden 800px:block cursor-pointer' />
                </Link>
                <Link to="/dashboard-orders">
                    <FiPackage
                        color='#555'
                        size={30}
                        className='mx-5 hidden 800px:block cursor-pointer' />
                </Link>

                <Link to="/dashboard-messages">
                    <BiMessageSquareDetail
                        color='#555'
                        size={30}
                        className='mx-5 hidden 800px:block cursor-pointer' />
                </Link>

                
                    <img src={`http://localhost:8000/${user?.avatar}`} alt=""
                        className='w-[50px] h-[50px] rounded-full object-cover' />
                
            </div>

        </div>
    </div>
    );
};

export default AdminHeader;