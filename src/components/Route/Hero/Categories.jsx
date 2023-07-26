import React from 'react';
import { brandingData, categoriesData } from '../../../static/data';
import { useNavigate } from 'react-router-dom';

const Categories = () => {
    const Navigate=useNavigate()
    return (
        <>
            <div className="w-[91%] mx-auto hidden sm:block">
                <div className="branding my-12 flex justify-between w-full  shadow-sm bg-white p-5">
                    {
                        brandingData&&brandingData.map((v,index)=>(
                            <div className='flex items-start ' key={index}>
                                {v.icon}
                                <div className="px-3">
                                    <h3 className='font-bolt text-sm md:text-base'>
                                        {v.title}
                                        <div className="text-xs md:text-sm">
                                            {v.Description}
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-[91%] mx-auto p-6 rounded-lg mb-12" id='categories'>
               <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 lg:gap-5 xl:grid-cols-5 xl:gap-7">

                {
                    categoriesData&&categoriesData.map((v,index)=>{
                        const handleSubmit=(i)=>{
                            Navigate(`/product?category=${v.title}`)
                        }
                        return(
                            <div className=" h-[100px] flex items-center justify-center cursor-pointer overflow-hidden"
                            key={v.id} onClick={()=>handleSubmit(v)}>
                                <h5 className='text-[18px] leading-[1.3]'>{v.title}</h5>
                                <img src={v.image_Url} className='w-[120px] object-cover' alt=" img error" />
                            </div>
                        )
                    })
                }
               </div>
            </div>
        </>
    );
};

export default Categories;