import React, { useState } from 'react';
import { AiOutlineArrowRight, AiOutlineCamera, AiOutlineDelete } from 'react-icons/ai';
import styles from '../../styles/style';
import { MdOutlineTrackChanges } from "react-icons/md"
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { server, serverR } from '../../server';
import { addressUpdate, loadUser, upDateUer } from '../../redux/actions/user';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RxCross1 } from 'react-icons/rx';
import { Country, State } from "country-state-city"



const ProfileContent = ({ active }) => {
    const dispatch = useDispatch()
    const { user, isAuthenticated } = useSelector((state) => state.user)

    const [name, setName] = useState(user?.name)
    const [email, setEmail] = useState(user?.email)
    const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber)
    const [zipCode, setZipCode] = useState()
    const [address1, setAddress1] = useState()
    const [address2, setAddress2] = useState()
    const [password, setPassword] = useState("");

    const [avatar, setAvatar] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(upDateUer(name, email, password, phoneNumber))
    }
    const handleImageChange = async (e) => {
        const file = e.target.files[0]
        setAvatar(file)
        const newForm = new FormData()
        newForm.append("image", e.target.files[0])


        await axios.put(`${server}/user/update-avatar`, newForm, { headers: { "Application-Type": "multipart/form-data" }, withCredentials: true }).then((res) => {
            toast.success("avatar update successfully")
            dispatch(loadUser())
        }).catch((err) => { toast.error(err) })


    };



    return (
        <div className='w-full'>
            {/* profilePage */}
            {
                active === 1 && <>

                    <div className='w-full flex justify-center'>
                        <div className="relative">
                            <img className='w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#3ad132]' src={`${serverR}/${user?.avatar}`} alt='img not found' />
                            <div className='w-[30px] h-[30px] bg-white rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]'>
                                <input type="file" className='hidden' id='images' onChange={handleImageChange} />
                                <label htmlFor="images">
                                    <AiOutlineCamera />
                                </label>

                            </div>
                        </div>



                    </div>
                    <br />
                    <br />

                    <div className='w-full px-5 '>
                        <form onSubmit={handleSubmit} area-required={true}>
                            <div className='w-full 800px:flex pb-3'>
                                <div className="800px:w-[50%] w-full pb-4">
                                    <label className='block pb-2'>
                                        Full Name
                                    </label>
                                    <input type="text" className={`${styles.input} !w-[95%]`}
                                        required
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>

                                <div className="800px:w-[50%] w-full pb-4">
                                    <label className='block pb-2'>
                                        Email
                                    </label>
                                    <input type="text" className={`${styles.input} !w-[95%]`}
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='w-full 800px:flex pb-3'>
                                <div className="800px:w-[50%] w-full pb-4">
                                    <label className='block pb-2'>
                                        Phone Number
                                    </label>
                                    <input type="number" className={`${styles.input} !w-[95%]`}
                                        required
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                    />
                                </div>
                                <div className="800px:w-[50%] w-full pb-4]">
                                    <label className='block pb-2'>
                                        Zip Code
                                    </label>
                                    <input type="number" className={`${styles.input} !w-[95%]`}
                                        required
                                        value={zipCode}
                                        onChange={(e) => setZipCode(e.target.value)}
                                    />
                                </div>

                            </div>

                            <div className='w-full 800px:flex pb-3'>

                                <div className="800px:w-[50%] w-full pb-4">
                                    <label className='block pb-2'>
                                        Address1
                                    </label>
                                    <input type="text" className={`${styles.input} !w-[95%]`}
                                        required
                                        value={address1}
                                        onChange={(e) => setAddress1(e.target.value)}
                                    />
                                </div>
                                <div className="800px:w-[50%] w-full pb-4">
                                    <label className='block pb-2'>
                                        Password
                                    </label>
                                    <input type="password" className={`${styles.input} !w-[95%]`}
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                            </div>



                            <input type="submit" className='w-[250px] h-[40px] border border-[#3a24db] text-center text-[#3a24db] rounded-[3px] mt-8 cursor-pointer mb-8'
                                value="Update"
                            />

                        </form>
                    </div>
                </>
            }

            {/* OrdersPage */}
            {
                active === 2 && <>
                    <div className="w-full">
                        <AllOrders />
                    </div>
                </>
            }
            {/* AllRefundsOrdersPage*/}
            {
                active === 3 && <>
                    <div className="w-full">
                        <AllRefundsOrders />
                    </div>
                </>
            }

            {/* TrackOrdersPage*/}
            {
                active === 5 && <>
                    <div className="w-full">
                        <TrackOrders />
                    </div>
                </>
            }

            {/* PaymentMethod*/}
            {
                active === 12 && <>
                    <div className="w-full">
                        <PaymentMethod />
                    </div>
                </>
            }

            {/* Addresses*/}
            {
                active === 7 && <>
                    <div className="w-full">
                        <Addresses />
                    </div>
                </>
            }
        </div >
    );
};

const AllOrders = () => {
    const orders = [
        {
            _id: "a31sd6f4as1df65asd4f1as6d5f",
            orderItems: [
                { name: "Iphone 14 Pro max" }
            ],
            totalPrice: 120,
            orderStatus: "Processing"
        },
    ]


    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/order/${params.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row = []
    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: orders.length,
            total: "US$" + item.totalPrice,
            status: item.orderStatus
        })
    })
    return (

        <div className="pl-8 pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
            />
        </div>
    )
}

const AllRefundsOrders = () => {
    const orders = [
        {
            _id: "a31sd6f4as1df65asd4f1as6d5f",
            orderItems: [
                { name: "Samphony p6 Pro max" }
            ],
            totalPrice: 120,
            orderStatus: "Refunding"
        },
    ]


    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 150,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/order/${params.id}`}>
                            <Button>
                                <AiOutlineArrowRight size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row = []
    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: orders.length,
            total: "US$" + item.totalPrice,
            status: item.orderStatus
        })
    })
    return (

        <div className="pl-8 pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
            />
        </div>
    )
}

const TrackOrders = () => {
    const orders = [
        {
            _id: "a31sd6f4as1df65asd4f1as6d5f",
            orderItems: [
                { name: "Samphony p6 Pro max" }
            ],
            totalPrice: 120,
            orderStatus: "Refunding"
        },
    ]


    const columns = [
        { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },

        {
            field: "status",
            headerName: "Status",
            minWidth: 130,
            flex: 0.7,
            cellClassName: (params) => {
                return params.getValue(params.id, "status") === "Delivered"
                    ? "greenColor"
                    : "redColor";
            },
        },
        {
            field: "itemsQty",
            headerName: "Items Qty",
            type: "number",
            minWidth: 130,
            flex: 0.7,
        },

        {
            field: "total",
            headerName: "Total",
            type: "number",
            minWidth: 130,
            flex: 0.8,
        },

        {
            field: " ",
            flex: 1,
            minWidth: 130,
            headerName: "",
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/user/order/${params.id}`}>
                            <Button>
                                <MdOutlineTrackChanges size={20} />
                            </Button>
                        </Link>
                    </>
                );
            },
        },
    ];

    const row = []
    orders && orders.forEach((item) => {
        row.push({
            id: item._id,
            itemsQty: orders.length,
            total: "US$" + item.totalPrice,
            status: item.orderStatus
        })
    })
    return (

        <div className="pl-8 pt-1">
            <DataGrid
                rows={row}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight
            />
        </div>
    )
}

const PaymentMethod = () => {
    const [old,setOld]=useState("")
    const [Newn,setNew]=useState("")
    const [confirm,setConfirm]=useState("")

    const formHandle=async(e)=>{
        e.preventDefault()
        await axios.put(`${server}/user/update-password`,{old,Newn,confirm},{withCredentials:true}).then((res)=>{
            toast.success(res.data.message)
        }).catch((err)=>{
            toast.error(err.response.data.message)
        })
        
    }
    

    return (
        <div className="w-full p-5">
            <h1 className='text-[25px] font-Poppins text-center'>Change Password</h1>
              <div className="w-full flex justify-center mt-8 min-h-[50vh] 
              ">
                <div className=' min-h-[45vh] w-[90%] 800px:w-[50%] ]'>
                     <form onSubmit={formHandle} action="" className='w-full flex justify-center flex-col'>
                    <div className='p-3 w-[99%] 800px:w-[95%]'>
                        <label htmlFor=""className='block pb-3'>Old password</label>
                       <input type="password" value={old} onChange={(e)=>setOld(e.target.value)}  name="" id="" className='w-full border border-blue-400 focus:outline-none placeholder:gray-400 rounded-sm p-2 h-[35px]'placeholder='Old password ...'  />   
                    </div>
          
                    <div className='p-3 w-[99%] 800px:w-[95%]'>
                        <label htmlFor=""className='block pb-2'>New password</label>
                       <input type="password"  value={Newn} onChange={(e)=>setNew(e.target.value)} name="" id="" className='w-full border border-blue-400 focus:outline-none placeholder:gray-400 rounded-sm p-2 h-[35px]'placeholder=' password ...'  />   
                    </div>
                 
                    <div className='p-3 w-[99%] 800px:w-[95%]'>
                        <label htmlFor=""className='block pb-2'>Confirm password</label>
                       <input type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)}  name="" id="" className='w-full border border-blue-400 focus:outline-none placeholder:gray-400 rounded-sm p-2 h-[35px]'placeholder='confirm password ...'  />   
                    </div>
                    <div className='p-3 w-[99%] 800px:w-[95%] text-center'>
                    <input type="submit" value="Change Password " className='bg-black text-white p-3 w-[60%] rounded-sm ' />
                    </div>
                </form>
                </div>
               
              </div>
        </div>

    )
}

const Addresses = () => {
    const dispatch = useDispatch()
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState();
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [addressType, setAddressType] = useState("");
    const [Code, setCode] = useState("")
    const [open, setOpen] = useState(false)
    const addressSubmit = async (e) => {

        e.preventDefault()
        console.log({ country, addressType, address2, address1, zipCode, city, })
        dispatch(addressUpdate(country, addressType, address2, address1, zipCode, city,))
        dispatch(loadUser())
    }
    const addressTypeData = [
        {
            name: "Default",
        },
        {
            name: "Home",
        },
        {
            name: "Office",
        },
    ];

    const handleCode = (i) => {

        setCode(i)
    }
    const { user } = useSelector((state) => state.user)
    const deleteAddress = async (id) => {
        console.log({ id })
        await axios.delete(`${server}/user/delete-address/${id}`, { withCredentials: true }).then((res) => {
            toast.success(res.data.message)
            dispatch(loadUser())
        }).catch((err) => {
            toast.error(err.response.data.message)
        })
    }
    return (
        <>
            <div className="w-full px-5">
                <div className="flex w-full items-center justify-between">
                    <h1 className='text-[25px] font-[600] text-[#000000ba] pb-2'>
                        My Addresses
                    </h1>
                    <div onClick={() => setOpen(true)} className={`${styles.button} !rounded-md`}>

                        <span className='text-white'>Add New</span>
                    </div>
                </div>
            </div>

            {
                user.addresses?.map((v, i) => (
                    <div key={i} className="w-full px-5">

                        <div className='w-full bg-white h-[70px] rounded-[4px] flex items-center px-3 shadow justify-between'>
                            <div className="flex items-center">

                                <h5 className='pl-5 font-[600] '>{v?.addressType} </h5>

                            </div>
                            <div className="flex pl-8 items-center">

                                <h5 className=''>{v.country}{","}{v.city}{","}{v.address1}</h5>
                            </div>
                            <div className="flex pl-8 items-center">

                                <h5 className=''>{v.zipCode}</h5>
                            </div>
                            <div onClick={() => deleteAddress(v._id)} className='min-w-[10%] flex items-center justify-between'>
                                <AiOutlineDelete size={25} className='cursor-pointer' />
                            </div>
                        </div>


                    </div>
                ))
            }
            {
                open && (
                    <div className='bg-[#00000048] min-h-screen w-full top-0 left-0 fixed flex items-center'>
                        <div
                            className='w-[80%] 800px:w-[50%] mx-auto bg-slate-50 min-h-[80vh] rounded-sm p-5 '>
                            <div className='flex justify-end'>
                                <RxCross1 onClick={() => setOpen(false)} size={30} />
                            </div>
                            <h1 className='text-center text-[25px] font-Poppins'>
                                Add new Address
                            </h1>
                            <div className='w-full mt-5'>
                                <form onSubmit={addressSubmit}
                                    className='w-full'>

                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Country</label>
                                        <select
                                            name=""
                                            id=""
                                            value={country}
                                            onChange={(e) => {
                                                setCountry(e.target.value);
                                                handleCode(e.target.selectedOptions[0].dataset.isocode);
                                            }}
                                            className="w-[95%] border h-[40px] rounded-[5px]"
                                        >
                                            <option value="" className="block border pb-2">
                                                Choose your country
                                            </option>
                                            {Country && Country.getAllCountries().map((item) => (
                                                <option
                                                    className="block pb-2"
                                                    key={item.isoCode}
                                                    value={item.name}
                                                    data-isoCode={item.isoCode}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </select>

                                    </div>

                                    {Code && (
                                        <div className="w-full pb-2">
                                            <label className="block pb-2">Choose your City</label>
                                            <select
                                                name=""
                                                id=""
                                                value={city}
                                                onChange={(e) => setCity(e.target.value)}
                                                className="w-[95%] border h-[40px] rounded-[5px]"
                                            >
                                                <option value="" className="block border pb-2">
                                                    Choose your city
                                                </option>
                                                {State && State.getStatesOfCountry(Code).map((item) => (
                                                    <option
                                                        className="block pb-2"
                                                        key={item.isoCode}
                                                        value={item.name}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    )}


                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Address 1</label>
                                        <input
                                            type="address"
                                            className={`${styles.input}`}
                                            required
                                            value={address1}
                                            onChange={(e) => setAddress1(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Address 2</label>
                                        <input
                                            type="address"
                                            className={`${styles.input}`}
                                            required
                                            value={address2}
                                            onChange={(e) => setAddress2(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Zip Code</label>
                                        <input
                                            type="number"
                                            className={`${styles.input}`}
                                            required
                                            value={zipCode}
                                            onChange={(e) => setZipCode(e.target.value)}
                                        />
                                    </div>

                                    <div className="w-full pb-2">
                                        <label className="block pb-2">Address Type</label>
                                        <select
                                            name=""
                                            id=""
                                            value={addressType}
                                            onChange={(e) => setAddressType(e.target.value)}
                                            className="w-[95%] border h-[40px] rounded-[5px]"
                                        >
                                            <option value="" className="block border pb-2">
                                                Choose your Address Type
                                            </option>
                                            {addressTypeData &&
                                                addressTypeData.map((item) => (
                                                    <option
                                                        className="block pb-2"
                                                        key={item.name}
                                                        value={item.name}
                                                    >
                                                        {item.name}
                                                    </option>
                                                ))}
                                        </select>
                                    </div>

                                    <div className=" w-full pb-2">
                                        <input
                                            type="submit"
                                            className={`${styles.input} mt-5 cursor-pointer`}
                                            required
                                            readOnly
                                        />
                                    </div>


                                </form>
                            </div>

                        </div>

                    </div>

                )
            }
        </>


    )
}
export default ProfileContent;