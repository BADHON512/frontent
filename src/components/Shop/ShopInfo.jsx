import React from 'react';
import { useSelector } from 'react-redux';
import styles from './../../styles/style';
import axios from 'axios';
import { server } from './../../server';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ShopInfo = ({isOwner}) => {
    const {id}=useParams()
    console.log(id)
    const { seller } = useSelector((state) => state.seller)
    let nor= seller.createdAt.slice(0,10)
     const DATA=nor.split("-").reverse().join("-")

    //  const createdAt = seller.createdAt.slice(0, 10);
    //  const reversedDate = createdAt.split('-').reverse().join('-');
     


    const logOutHandle=async()=>{
      const {data}=await axios.get(`${server}/seller-log-out`,{withCredentials:true})
      if(data.message){
        toast.success("Log out successfully")
      }toast.error("fail")
      window.location.reload(true)

    }
    return (<>
        <div className='w-full py-5'>
            <div className="w-full flex items-center justify-center">
                <img src={`http://localhost:8000/${seller?.avatar}`} alt=""
                    className='w-[150px] h-[150px] rounded-full object-cover'
                />
            </div>
            <h3 className='text-center py-2 text-[20px]'>
                {seller.shopName}
            </h3>
            <p className=' text-[#000000ee] p-[10px] flex items-center'>
                {seller.description}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sunt pariatur libero necessitatibus maiores blanditiis eaque dolore, eius vel accusamus eos perspiciatis. Numquam quos pariatur mollitia, reiciendis iusto quam doloribus.
            </p>
        </div>

        <div className="p-3">
            <h5 className="font-[600]">Address</h5>
            <h4 className='text-[#000000a6]'>
                {seller.address}
            </h4>
        </div>

        <div className="p-3">
            <h5 className="font-[600]">Phone Number</h5>
            <h4 className='text-[#000000a6]'>
                {seller.phoneNumber}
            </h4>
        </div>
        <div className="p-3">
            <h5 className="font-[600]">Total Products</h5>
            <h4 className='text-[#000000a6]'>
                {10}
            </h4>
        </div>
        <div className="p-3">
            <h5 className="font-[600]">Shop Ratings</h5>
            <h4 className='text-[#000000a6]'>
                {"4/3"}
            </h4>
        </div>
        <div className="p-3">
            <h5 className="font-[600]">Joined On</h5>
            <h4 className='text-[#000000a6]'>
                {DATA}
            </h4>
        </div>

        {
            isOwner&&(
                <div className="py-3 px-4">
                    <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
                        <span className='text-white'>Edit shop</span>
                    </div>

                    <div onClick={logOutHandle} className={`${styles.button}  !w-full !h-[42px] !rounded-[5px]`}>
                        <span className='text-white'>Log out</span>
                    </div>
                </div>
            )
        }

    </>
    );
};

export default ShopInfo;