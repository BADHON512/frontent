import React, { useEffect } from 'react';
import { AiOutlineCreditCard, AiOutlineLogin, AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from 'react-icons/hi';
import {TbAddressBook} from "react-icons/tb"
import {MdOutlineTrackChanges} from "react-icons/md"
import { RxPerson } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../server';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './../../redux/actions/user';

const ProfileSideBar = ({ active, setActive }) => {

    const {user}=useSelector((state)=>state.user)
    const dispatch=useDispatch()
    
        const UserLogOut=async()=>{
          await axios.get(`${server}/user/user-log-out`,{withCredentials:true}).then((res)=>{
                toast.success(res.data.message)
                dispatch(loadUser())
            }).catch((err)=>{
                toast.success(err.response.data.message)
            })
        }
   
    const Navigate=useNavigate()
    return (
        <div className='w-full bg-white shadow-sm rounded-[10px] p-4 pt-8'>
            <div onClick={() => setActive(1)} className="flex items-center cursor-pointer w-full mb-8">
                <RxPerson size={20} color={active === 1 ? "red" : null} />
                <span className={`${active === 1 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Profile</span>
            </div>


            <div onClick={() => setActive(2)} className="flex items-center cursor-pointer w-full mb-8">
                <HiOutlineShoppingBag size={20} color={active === 2 ? "red" : null} />
                <span className={`${active === 2 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Orders</span>
            </div>

            <div onClick={() => setActive(3)} className="flex items-center cursor-pointer w-full mb-8">
                <HiOutlineReceiptRefund size={20} color={active === 3 ? "red" : null} />
                <span className={`${active === 3 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Refunds</span>
            </div>

            <div onClick={() => setActive(4)|| Navigate("/inbox")} className="flex items-center cursor-pointer w-full mb-8">
                <AiOutlineMessage size={20} color={active === 4 ? "red" : null} />
                <span className={`${active === 4 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Inbox</span>
            </div>
            <div onClick={() => setActive(5)} className="flex items-center cursor-pointer w-full mb-8">
                <MdOutlineTrackChanges size={20} color={active === 5 ? "red" : null} />
                <span className={`${active === 5 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Track Order</span>
            </div>

            <div onClick={() => setActive(12)} className="flex items-center cursor-pointer w-full mb-8">
                <AiOutlineCreditCard size={20} color={active === 12 ? "red" : null} />
                <span className={`${active === 12 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Change Password</span>
            </div>
        {
            user?.role==="Admin"&&(
                <div onClick={() => setActive(6)} className="flex items-center cursor-pointer w-full mb-8">
                <AiOutlineCreditCard size={20} color={active === 6 ? "red" : null} />
               <Link to={"/admin/dashboard"}>
               <span className={`${active === 6 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Admin Dashboard</span>
               </Link>
            </div>
            )
        }
            <div onClick={() => setActive(7)} className="flex items-center cursor-pointer w-full mb-8">
                <TbAddressBook size={20} color={active === 7 ? "red" : null} />
                <span className={`${active === 7 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Address</span>
            </div>

            <div onClick={() => setActive(8)} className="flex items-center cursor-pointer w-full mb-8">
                <AiOutlineLogin size={20} color={active === 8 ? "red" : null} />
                <span onClick={()=>UserLogOut()} className={`${active === 8 ? "text-[red]" : ""} pl-3 800px:block hidden`}>Log out</span>
            </div>


        </div>
    );
};

export default ProfileSideBar;