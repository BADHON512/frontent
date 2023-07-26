import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import {Link, useNavigate} from "react-router-dom"
import {RxAvatar}from "react-icons/rx"
import   axios from "axios"
import { server } from '../../server';
import { toast } from 'react-toastify';



const Seller = () => {

 const [shopName, setShopName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [visible, setVisible] = useState(false)
  const [zipCode, setZipCode] = useState("")
   const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [avatar,setAvatar]=useState(null)

  const handleFileInputChange=(e)=>{
    const file=e.target.files[0]
    setAvatar(file)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const config={headers:{"Content-type":"multipart/form-data"}}
    const newForm=new FormData()
     newForm.append("file",avatar)
     newForm.append("shopName",shopName)
     newForm.append("address",address)
     newForm.append("phoneNumber",phone)
     newForm.append("zipCode",zipCode)
     newForm.append("email",email)
     newForm.append("password",password)

     axios.post(`${server}/seller-create`,newForm,config).then((res)=>{
      if(res.data.success===true){
      toast.success(res.data.message)
      }
     }).catch((err)=>{
      console.log(err)
      toast.error(err.response.data.message)
     })
   
  }

 
  return (

 


    //////////////////////no touch here/////////////////////
    <div className='min-h-screen bg-gray-500 flex flex-col justify-center py-12 sm:py-6 lg:px-8'>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">

        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
        Resister as a Seller</h2>
      </div>
      <div className="mt-8 mx-5 sm:mx-auto sm:w-full sm:max-w-xl">
        <div className="bg-white py-8 px-4 rounded-sm shadow sm:rounded-lg sm:px-10">
          <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
              <label htmlFor="shopName"
                className='block text-sm font-medium text-gray-700'>Shop name</label>
              <div className='mt-1'>
                <input type="name" name='shopName'  required value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder:bg-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="Phone Number"
                className='block text-sm font-medium text-gray-700'>Phone Number</label>
              <div className='mt-1'>
                <input type="number" name='phoneNumber' required value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder:bg-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="Address"
                className='block text-sm font-medium text-gray-700'>Address</label>
              <div className='mt-1'>
                <input type="address" name='address' required value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder:bg-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="Zip Code"
                className='block text-sm font-medium text-gray-700'>Zip Code</label>
              <div className='mt-1'>
                <input type="name" name='name' autoComplete='name' required value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder:bg-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
              </div>
            </div>
            <div>
              <label htmlFor="email"
                className='block text-sm font-medium text-gray-700'>Email address</label>
              <div className='mt-1'>
                <input type="email" name='email' autoComplete='email' required value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder:bg-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />
              </div>
            </div>

            <div>
              <label htmlFor="password"
                className='block text-sm font-medium text-gray-700'>Password</label>
              <div className='mt-1 relative'>
                <input type={visible ? "text" : "password"} name='password' autoComplete='password' required value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='appearance-none block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder:bg-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' />

                {
                  visible ? <AiOutlineEye size={25}
                    className='absolute right-2 top-2'
                    onClick={() => setVisible(false)}
                  /> : <AiOutlineEyeInvisible size={25}
                    className='absolute right-2 top-2'
                    onClick={() => setVisible(true)} />
                }
              </div>
            </div>
            <div >
              <label htmlFor="avatar" className='block text-sm font-medium text-gray-700'></label>
              <div className="mt-2 flex items-center">
                <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                    {
                        avatar?(<img src={URL.createObjectURL(avatar)}alt="img"className='h-full w-full object-cover rounded-full'/>):(<RxAvatar className="h-8 w-8"/>)
                    }
                </span>
                <label htmlFor="file-input" className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 cursor-pointer'>
                    <span>Upload a file</span>
                    <input type="file"
                     name="avatar"
                     id="file-input"
                     accept='.jpg,.jpeg,.png' 
                    onChange={handleFileInputChange} 
                    className='sr-only '/>
                </label>
              </div>
            </div>

            <div>
              <button type='submit' className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>Submit</button>
            </div>

            <div className="flex items-center w-full">
              <h4>Already have an account? </h4>
              <Link to="/seller-login" className="text-blue-600 pl-2">Seller-Login</Link>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};


export default Seller;