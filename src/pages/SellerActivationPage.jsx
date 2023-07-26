import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { server } from './../server';
import { toast } from "react-toastify";


const SellerActivationPage = () => {
  const { seller_activation_token } = useParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (seller_activation_token) {
      const sendRequest = async () => {
        await axios
          .post(`${server}/seller-activation`, {
            seller_activation_token,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error)
            toast.error(error.response.data.message)
            setError(true)
          });
      };
      sendRequest();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your token is expired!</p>
      ) : (
        <p>Your seller account has been created successfully!</p>
      )}
    </div>
  );
};

export default SellerActivationPage;