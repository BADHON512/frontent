import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Seller from "../../src/components/Seller/Seller.jsx"
const SellerPage = () => {
    const navigate = useNavigate();
  const { isSeller,seller } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate(`/shop/${seller._id}`);
    }
  }, [])
    return (
        <div>
           <Seller/> 
        </div>
    );
};

export default SellerPage;