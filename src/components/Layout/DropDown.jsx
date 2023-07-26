import React from 'react';
import { useNavigate } from 'react-router-dom';


const DropDown = ({categoriesData,setDropDown}) => {
    const Navigate=useNavigate()
    const submitHandle=(i)=>{
        Navigate(`/products?category=${i.title}`)
        setDropDown(false)
        console.log()
        window.location.reload()
    }
    return (
        <div className='pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm'>
            {categoriesData&&categoriesData.map((i,index)=>(
                <div className='flex items-center' onClick={()=>submitHandle(i)} key={index}>
                   <img src={i.image_Url} alt="" 
                   className='h-[25px] w-[25px] object-contain mr-[10px] select-none'/>
                   <h3 className='m-3 cursor-pointer select-none'>{i.title}</h3>
                </div>)
            )}
            
        </div>
    );
};

export default DropDown;