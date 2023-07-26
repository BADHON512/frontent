import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from './../../static/data';

const Navbar = ({ active }) => {
    return (
        <div className='800px:flex 800px:items-center  '>
            {
                navItems && navItems.map((v, index) => (
                    <div className="flex ">
                        <Link to={v.url} key={index} className={`${active === index + 1 ? "text-[#17dd1f]" : "pb-3 text-black 800px:text-[#fff]"} pb-[30px] 800px:pb-0 font-[500] px-4 cursor-pointer}`}
                        >{
                                v.title
                            }</Link>
                    </div>
                ))
            }

        </div>
    );
};

export default Navbar;