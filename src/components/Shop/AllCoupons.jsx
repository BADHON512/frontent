import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProductsShop } from '../../redux/actions/product';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { DataGrid } from '@material-ui/data-grid';
import { RxCross1 } from 'react-icons/rx';
import axios from 'axios';
import { server } from './../../server';
import { toast } from 'react-toastify';

const AllCoupons = () => {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState("")
    const [minAmount, setMinAmount] = useState(null)
    const [maxAmount, setMaxAmount] = useState(null)
    const [value, setValue] = useState(null)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [coupon,setCoupon]=useState([])

   
    const dispatch = useDispatch()
    const { seller } = useSelector((state) => state.seller)
    const { products } = useSelector((state) => state.product)
    console.log(products)


    useEffect(() => {
        dispatch(getAllProductsShop(seller._id))
    }, [dispatch])

    useEffect(() => {
        async function badhon(){
              await axios.get(`${server}/get-all-coupon/${seller._id}`,{withCredentials:true}).then((res)=>{
                setCoupon(res.data.coupon)
              }).catch((err)=>{
                toast.error(err.response.data.message)
              })
        }
       badhon()
    }, [])


    const handelDelete = (id) => {
      async function name(id) {
        await axios.delete(`${server}/delete-coupon/${id}`,{withCredentials:true}).then((res=>{
            toast.success(res.data.message)
        })).catch((err)=>{
            toast.error(err.response.data.message)
        })
      }
      name(id)
    }

    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
        {
            field: "name",
            headerName: "Coupon Name",
            minWidth: 80,
            flex: 1.4,
        },
        {
            field: "percentage",
            headerName: "percentage",
            minWidth: 80,
            flex: 1.4,
        },



        {
            field: "Preview",
            flex: 0.8,
            minWidth: 100,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/product/${params.id}`}>
                            <Button>
                                <AiOutlineEye size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
        {
            field: "Delete",
            flex: 0.8,
            minWidth: 120,
            headerName: "",
            type: "number",
            sortable: false,

            renderCell: (params) => {
                return (
                    <>
                        <Button onClick={() => handelDelete(params.id)}>
                            <AiOutlineDelete />
                        </Button>
                    </>
                )
            }
        }
    ];

    const row = [];
    coupon&&coupon.forEach((v)=>{
        row.push({
            id:v._id,
            name:v.name,
            percentage:v.value
        })
    })
console.log(coupon)
    const handleForm =async (e) => {
        e.preventDefault()
        await axios.post(`${server}/create-coupon`,{
            name,
            selectedProduct,
            minAmount,
            maxAmount,
            value,
            shopId:seller._id,
            shop:seller
        },{withCredentials:true}).then((res)=>{
            toast.success("Coupon code Created successfully")
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
    }
    return (
        <>

            <div className="w-full mx-8 pt-1 mt-6  bg-white"> <div className='w-full mb-3'>
                <div className='flex items-center justify-end  '  >
                    <button onClick={() => setOpen(true)} className=' rounded-sm cursor-pointer text-center bg-black text-white w-[250px] p-5'>Create Coupon Code</button>
                </div>
            </div>
                <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    autoHeight
                />

                {
                    open && (
                        <div className='bg-[#00000033] flex items-center w-full h-screen fixed top-0 left-0 z-30'>
                            <div className='w-[60%]  800px:w-[50%] mx-auto bg-[#fffffffb] min-h-[70vh] z-50 rounded-sm p-5 '>

                                <div className='flex justify-end '>
                                    <RxCross1 className='cursor-pointer' size={30} onClick={() => setOpen(false)} />
                                </div>

                                <h1 className='text-center font-Roboto text-[#000000b2] font-bold text-[25px] mb-4'>Create Coupons Code</h1>

                                <form onSubmit={handleForm} aria-required={true}>
                                    <div >

                                        <label htmlFor="" >Name <span className='text-[rgb(255,0,0)]'>*</span></label>
                                        <input value={name}
                                            onChange={(e) => setName(e.target.value)} type="text" className='appearance-none  h-[35px] w-full focus:outline-none border border-gray-200 mt-2 p-2 font-Poppins focus:border-blue-500 rounded-sm focus:ring-blue-400 placeholder:gray-400 ' />
                                    </div>
                                    <br />
                                    <div >

                                        <label htmlFor="" >Discount percentage<span className='text-[red]'>*</span></label>
                                        <input value={value}
                                            onChange={(e) => setValue(e.target.value)} type="text" className='appearance-none  h-[35px] w-full focus:outline-none border border-gray-200 mt-2 p-2 font-Poppins focus:border-blue-500 rounded-sm focus:ring-blue-400 placeholder:gray-400 ' />
                                    </div>
                                    <br />

                                    <div >

                                        <label htmlFor="" >Min Amount<span className='text-[red]'> *</span></label>
                                        <input value={minAmount}
                                            onChange={(e) => setMinAmount(e.target.value)} type="text" className='appearance-none  h-[35px] w-full focus:outline-none border border-gray-200 mt-2 p-2 font-Poppins focus:border-blue-500 rounded-sm focus:ring-blue-400 placeholder:gray-400 ' />
                                    </div>
                                    <br />

                                    <div >

                                        <label htmlFor="" >Max Amount<span className='text-[red]'>*</span></label>
                                        <input value={maxAmount}
                                            onChange={(e) => setMaxAmount(e.target.value)} type="text" className='appearance-none  h-[35px] w-full focus:outline-none border border-gray-200 mt-2 p-2 font-Poppins focus:border-blue-500 rounded-sm focus:ring-blue-400 placeholder:gray-400 ' />
                                    </div>
                                    <br />
                                    <div>
                                        <label htmlFor="">Selected Products</label>

                                        <select value={selectedProduct}
                                            onChange={(e) => setSelectedProduct(e.target.value)}
                                            name="" id="" className='w-full mt-2 border h-[35px] rounded-sm focus:outline-none'>
                                            <option className='focus:outline-none' value="">Choose a selected product</option>
                                            {
                                                products && products.map((v, i) => (
                                                    <option className='focus:outline-none' value={v.name} key={i}>{v.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <br />
                                    <div>
                                        <button className='w-full border border-gray-200 h-[35px] rounded-sm focus:border-blue-600 focus:ring-blue-700'  > Create </button>
                                    </div>



                                </form>
                            </div>

                        </div>
                    )
                }
            </div>


        </>
    );
};

export default AllCoupons;