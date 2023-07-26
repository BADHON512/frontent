import React from 'react';
import AdminHeader from "../../components/Layout/AdminHeader.jsx"
import AdminSideBar from "../../components/Layout/admin/AdminSideBar.jsx"
import AdminDashBoardMain from "../../components/Layout/admin/AdminDashBoardMain.jsx"


const AdminDashBoardPage = () => {
    return (
        <div>
            <AdminHeader/>
            <div className='w-full flex justify-between'>
                <div className='800px:w-[350px] w-[80px]'>
                    <AdminSideBar active={1}/>
                </div>
                <div className='w-full'> 
                    <AdminDashBoardMain/>
                </div>
            </div>
        </div>
    );
};

export default AdminDashBoardPage;