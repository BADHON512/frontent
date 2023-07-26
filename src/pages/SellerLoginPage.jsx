import React, { useEffect } from 'react';
import SellerLogin from "../components/Seller/SellerLogin.jsx"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loader from './../components/Layout/Loader';
 
const SellerLoginPage = () => {

  const { isSeller,isLoading } = useSelector((state) => state.seller);


    return (
        <div>
          {isLoading&&isSeller?<Loader/>:<SellerLogin/>}  
        </div>
    );
};

export default SellerLoginPage;