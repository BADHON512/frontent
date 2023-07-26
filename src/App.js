import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SignUpPage, ActivationPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FaqPage, ProductsDetailsPage, ProfilePage, SellerPage, SellerLoginPage, SellerActivationPage } from './Routes.js'

import { ShopHomePage, ShopAllEventsPage, ShopDashboardPage, ShopCreateProductPage, ShopAllProductsPage, ShopCreateEventsPage, ShopAllCouponsPage } from "./ShopRoutes.js"


import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Store from './redux/store';
import { getAllUser, loadUser } from './redux/actions/user';

import { LoadSeller, getAllSeller } from './redux/actions/seller';
import SellerProtectedRoute from './ProtectedRoute/SellerProtectedRoute';
import { getAllProduct, getAllProductsShop } from './redux/actions/product';
import { useDispatch, useSelector } from 'react-redux';
import AdminProtectedRoute from './ProtectedRoute/adminProtectedRoute'
import { AdminDashBoardPage } from './adminRoute';





function App() {
        const dispatch=useDispatch()

  useEffect(() => {
    Store.dispatch(loadUser())
    Store.dispatch(LoadSeller())
    Store.dispatch(getAllProduct())
    // Store.dispatch(getAllSeller())
    Store.dispatch(getAllUser())

  }, [dispatch])


  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/product/:id' element={<ProductsDetailsPage />} />
        <Route path='/best-selling' element={<BestSellingPage />} />
        <Route path='/seller' element={<SellerPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/seller-login' element={<SellerLoginPage />} />


        <Route path='/profile' element={
        <ProtectedRoute >
          <ProfilePage />
        </ProtectedRoute>} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='*' element={<Up />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
        <Route path='/seller-activation/:seller_activation_token' element={<SellerActivationPage />} />

        {/* shop routes */}

        <Route path='/shop/:id' element={<SellerProtectedRoute><ShopHomePage /></SellerProtectedRoute>} />

        <Route path='/dashboard-create-events'
          element={<SellerProtectedRoute>
            <ShopCreateEventsPage />
          </SellerProtectedRoute>} />

        <Route path='/dashboard-events'
          element={<SellerProtectedRoute>
            <ShopAllEventsPage />
          </SellerProtectedRoute>} />

        <Route path='/dashboard-coupons'
          element={<SellerProtectedRoute>
            <ShopAllCouponsPage />
          </SellerProtectedRoute>} />


        <Route path='/dashboard-create-product'
          element={<SellerProtectedRoute>
            <ShopCreateProductPage />
          </SellerProtectedRoute>} />

        <Route path='/dashboard-products'
          element={<SellerProtectedRoute>
            <ShopAllProductsPage />
          </SellerProtectedRoute>} />


        <Route path='/dashboard' element={<SellerProtectedRoute>

          <ShopDashboardPage />

        </SellerProtectedRoute>} />

        {/* admin Route */}
        <Route path='/admin/dashboard' element={<AdminProtectedRoute>
          <AdminDashBoardPage />
        </AdminProtectedRoute>} />

        <Route path='/badhon' element={<SSD />} />

      </Routes>

      <ToastContainer position='bottom-center' />
    </BrowserRouter>


  );
}

const SSD = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (e) => {
    const startDate = new Date(e.target.value)
    const minEndDate = new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString.slice(0, 10)
    setStartDate(startDate)
    setEndDate(null)
    document.getElementById("end").min = minEndDate
  }

  const handleEndDateChange = (e) => {
    const endDate = new Date(e.target.value)
    setEndDate(endDate)
  };
  const today = new Date().toDateString().slice(0, 10)
  const minEndDate = startDate ? new Date(startDate.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10) : ""

  const arr = ["you play football", "you play badminton", "you play cricket",]
  const ref = useRef(null)

  const [view, setView] = useState("")
  const [vie, setVie] = useState(arr)
  
  console.log(ref.current)

  //  if(ref.current){
  //   ref.current.forEach((v)=> v.checked=false)
  //  }

  const Only = (items,i) => {
      const checkbox=document.getElementsByName(items.name)
      console.log({checkbox,})
    checkbox.forEach((v)=>{
 
      if(v !==items)v.checked=false
      setView(i)
    })
  }

  const deleted=(it)=>{
      
    const x=vie.filter((v,i)=>i!==it)
   setVie(x)

  }

  return (

    <div>
      <div>
        <label className="pb-2">
          Event Start Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="price"
          min={today}
          value={startDate ? startDate.toISOString().slice(0, 10) : ""}
          className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={handleStartDateChange}

          placeholder="Enter your event product stock..."
        />
      </div>
      <br />
      <div>
        <label className="pb-2">
          Event End Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          name="price"
          id='end'
          value={endDate ? endDate.toISOString().slice(0, 10) : ""}
          min={minEndDate}
          className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          onChange={handleEndDateChange}

          placeholder="Enter your event product stock..."
        />
      </div>
      <br />
      <ul className='ml-[50px] space-y-3'>
        {
          vie.map((v, i) => <li>
            <input ref={ref} onClick={(e, ) => Only(e.target,i)} type="checkbox" name="badhon" id="checkbox" className='mr-5' />
            {v}
            {
              view===i?<button onClick={()=>deleted(i)} className='ml-2 bg-[red]'>Delete item</button>:null
            }
          </li>)
        }</ul>

    </div>
  )
}

const Up = () => {
  const [img, setImg] = useState([])
  const handleUploadImg = (e) => {
    const files = Array.from(e.target.files)

    setImg((prv) => [...prv, ...files])
  }
  const today = new Date().toISOString().slice(0, 10);
  const llp = today.split("-").reverse().join("-")
  console.log(llp)
  return (
    <div>
      <div className='flex justify-center items-center h-screen mr-4'>
        <h1>PAGE NOT FOUND</h1>
      </div>
    </div>
  )
}

export default App;
