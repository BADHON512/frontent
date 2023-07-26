import React from 'react'
import { useState } from 'react';

import { categoriesData, productData } from "../../static/data"
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart, AiOutlineLogin } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io"
import { BiMenuAltLeft } from "react-icons/bi"
import styles from './../../styles/style';
import DropDown from "./DropDown.jsx"
import Navbar from "./Navbar.jsx"
import { CgProfile } from "react-icons/cg"
import Cart from "../Cart/Cart.jsx"
import Wishlist from "../Wishlist/Wishlist.jsx"
import { Link } from 'react-router-dom';
import { RxCross1 } from 'react-icons/rx';
import { useSelector } from 'react-redux';
import { serverR } from '../../server';


const Header = ({ activeHeading }) => {
    const { cart } = useSelector((state) => state.cart)
    const { wishlist } = useSelector((state) => state.wishlist)
    const { user, isAuthenticated } = useSelector((state) => state.user)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchData, setSearchData] = useState(null)
    const [active, setActive] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [open, setOpen] = useState(false)

    const [openWishlist, setOpenWishlist] = useState(false)

    const handleSearchChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term)
        const filterProducts = productData && productData.filter((product) =>
            product.name.toLowerCase().includes(term.toLowerCase())
        )

        setSearchData(filterProducts)


    }

    window.addEventListener("scroll", () => {
        if (window.scrollY > 70) { setActive(true) }
        else { setActive(false) }
    })
    return (
        <>
            <div className='w-11/12 mx-auto' >
                <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
                    <Link to="/">
                        <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="" />
                    </Link>
                    {/*search box*/}
                    <div className="w-[50%] relative">
                        <input type="text" placeholder='Product Search ... ' value={searchTerm}
                            className='h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md outline-none'
                            onChange={handleSearchChange}
                        />
                        <AiOutlineSearch className='absolute  right-2 top-1.5' size={30}></AiOutlineSearch>
                        {
                            searchData && searchData.length !== 0 ? (
                                <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4 ">
                                    {searchData && searchData.map((i, index) => {
                                        return (
                                            <Link to={`/product/${i._id}`}>

                                                <div className="w-full flex items-start-py-3">
                                                    <img src={`${i.image_Url[0].url}`} alt=""
                                                        className='w-[40px] h-[40px] mr-[10px]' />
                                                    <h1>{i.name}</h1>
                                                </div>

                                            </Link>
                                        )
                                    })}
                                </div>
                            ) : null
                        }

                    </div>

                    <div className={`${styles.button}`}>
                        <Link to="/seller">
                            <h1 className='text-[#fff] flex items-center'>
                                Become Seller <IoIosArrowForward />

                            </h1>

                        </Link>
                    </div>

                </div>

            </div>

            <div className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} transition hidden 800px:flex justify-between w-full bg-blue-700 h-[60px] `}>

                <div className="w-11/12 mx-auto relative flex  items-center justify-between">
                    {/*category*/}
                    <div className="">
                        <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block lg:block ">
                            <BiMenuAltLeft size={30} className='absolute top-3 left-2' />
                            <button
                                className={`h-[100%] w-full justify-between flex items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
                                onClick={() => setDropDown(!dropDown)}>All Categories
                            </button>
                            <IoIosArrowDown size={20} className='absolute right-2 top-4 cursor-pointer'

                            />{
                                dropDown ? <DropDown categoriesData={categoriesData} setDropDown={setDropDown} /> : null
                            }
                        </div>

                    </div>

                    {/*navbar*/}
                    <div className="flex items-center ">
                        <Navbar active={activeHeading} />
                    </div>

                    {/*Icon*/}
                    <div className="flex">
                        <div className="flex items-center">
                            <div className="relative cursor-pointer mr-[15px]" onClick={() => setOpenWishlist(true)}>
                                <AiOutlineHeart

                                    size={30} color='rgb(255 255 255 /83%)' />
                                <span className='absolute right-0 top-0 rounded-full bg-[rgb(50,240,12)] w-5 h-5 m-0 p-0 top right text-[black] font-semibold font-mono  leading-4 text-center'>{wishlist?.length}</span>
                            </div>

                        </div>
                        <div className="flex items-center">
                            <div className="relative cursor-pointer mr-[15px]" onClick={() => setOpenCart(true)}>
                                <AiOutlineShoppingCart size={30} color='rgb(255 255 255 /83%)' />
                                <span className='absolute right-0 top-0 rounded-full bg-[rgb(50,240,12)] w-5 h-5 m-0 p-0 top right text-[black] font-mono  leading-4 text-center font-semibold'>{cart?.length}</span>
                            </div>

                        </div>
                        <div className="flex items-center">
                            <div className="relative cursor-pointer mr-[15px]">
                                {isAuthenticated ? (<Link to="/profile"><img className='rounded-full object-cover h-[50px] w-[50px]' src={`${serverR}/${user?.avatar}`}alt='img not found' /></Link>) : (<Link to={"/login"}><AiOutlineLogin size={30} color='white'/></Link>)}


                            </div>

                        </div>
                        {/*Cart pop up */}
                        {
                            openCart ? <Cart setOpenCart={setOpenCart} /> : null
                        }
                        {/*Wishlist pop up */}
                        {
                            openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null
                        }
                    </div>
                </div>
            </div>




            {/* mobile header */}
            <div className={`${active === true ? "shadow-sm fixed  top-0 w-full left-0 z-10" : null}pt-3  w-full h-[60px]  bg-white z-50 top-0 left-0 800px:hidden`}>
                <div className='w-full flex items-center justify-between z-20'>
                    <div>
                        <BiMenuAltLeft size={40}
                            className='ml-4' onClick={() => setOpen(true)} />
                    </div>
                    <div>
                        <Link to={"/"}>
                            <img src="https://shopo.quomodothemes.website/assets/images/logo.svg" alt="" className='mt-3 mr-2 cursor-pointer' />
                        </Link>
                    </div>
                    <div className=''>
                        <div className="relative mr-[20px]">
                            <AiOutlineShoppingCart size={40} />
                            <span className='absolute text-white font-bold top right bg-green-700 h-5 w-5 rounded-full top-0 right-0 text-center'> {cart?.length}</span>
                        </div>
                    </div>
                </div>
                {/* header sidebar */}
                {open && (

                    <div className='fixed w-full bg-[#0000005f] h-full top-0 left-0 z-30'>
                        <div className="fixed w-[60%] bg-white h-screen top-0 left-0 overflow-y-auto">
                            <div className="flex justify-between w-full pr-3">
                                <div>
                                    <div className="relative mr-[15px]">
                                        <AiOutlineHeart size={40} className='mt-5 ml-3' />
                                        <span className='absolute text-white font-bold top right bg-green-700 h-5 w-5 rounded-full top-0 right-0 text-center'> 0</span>
                                    </div>
                                </div>
                                <RxCross1
                                    size={30}
                                    className='ml-4 mt-5'
                                    onClick={() => setOpen(false)} />
                            </div>
                            <div className="my-8 w-[92%] m-auto h-[40px] relative">
                                <input
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    type="search" placeholder='Search Product...'
                                    className='h-[40px] w-full px-2 border-[#4a4ae7] border-[2px] rounded-md' />

                                {
                                    searchData && (
                                        <div className='absolute p-3'>
                                            {
                                                searchData.map((v) => {
                                                    const d = v.name
                                                    const Product_name = d.replace(/\s+/g, "-")

                                                    return (
                                                        <Link to={`/product/${Product_name}`}>
                                                            <div className='flex my-2'>
                                                                <img src={`${v.image_Url[0].url}`} alt=""
                                                                    className='w-[40px] h-[40px] mr-[10px]' />
                                                                <div className='tex-[20px]'>{v.name}</div>
                                                            </div>
                                                        </Link>
                                                    )


                                                })
                                            }
                                        </div>
                                    )
                                }
                            </div>
                            <Navbar active={activeHeading} />


                            <div className={`${styles.button} ml-3 !rounded-sm`}>
                                <Link to="/seller">
                                    <h1 className='text-[#fff] flex items-center'>
                                        Become Seller <IoIosArrowForward />

                                    </h1>

                                </Link>
                            </div>
                            <br /><br /><br />

                            <div className="flex justify-center">
                                {
                                    isAuthenticated ? (<Link to="/profile">
                                        <img src="https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/332493979_932747854386443_1630553002903684291_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ejm6gtIVQooAX_B6qfo&_nc_ht=scontent.fdac24-1.fna&oh=00_AfBQUawIEu_m2pEjd6zx0sJdOHOhK_bDzS1Mr5sioIP0OQ&oe=647F911A" alt="" className='text-center w-[80px] h-[80px] rounded-full object-cover border-[3px] border-[#3ad132]' />
                                    </Link>) : <Link to="/login" className='text-[20px] font-Roboto font-bold '>Login</Link>
                                }

                            </div>



                        </div>
                    </div>

                )}
            </div>
        </>

    )
}

export default Header
