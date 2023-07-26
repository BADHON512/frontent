import React, { useEffect, useState } from 'react';
import { categoriesData } from './../../static/data';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import { createEvent } from '../../redux/actions/events';




const CreateEvents = () => {
    const { seller } = useSelector((state) => state.seller)
    console.log(seller._id + "badhonvai")
    const { success, error } = useSelector((state) => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        if (error) {
            toast.error(error)
        } if (success) {
            toast.success("events Created successfully")
    }

    }, [dispatch, success, error])

    const [images, setImages] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [tags, setTags] = useState("");
    const [originalPrice, setOriginalPrice] = useState();
    const [discountPrice, setDiscountPrice] = useState();
    const [stock, setStock] = useState();
    const [startDate,setStartDate]=useState(null)
    const [endDate,setEndDate]=useState(null)
    const formSubmitHandler = (e) => {
        e.preventDefault()

        console.log({ images, name, description, category, tags, originalPrice, discountPrice, stock,startDate,endDate   })
        const newForm = new FormData()
        images.forEach((image) => {
            newForm.append("images", image)
        })
        newForm.append("name", name)
        newForm.append("description", description)
        newForm.append("category", category)
        newForm.append("tags", tags)
        newForm.append("originalPrice", originalPrice)
        newForm.append("discountPrice", discountPrice)
        newForm.append("stock", stock)
        newForm.append("shopId", seller._id)
        newForm.append("start_Date", startDate)
        newForm.append("finish_Date",endDate )

        dispatch(createEvent(newForm))
    }

    const handleImageChange = (e) => {
        let files = Array.from(e.target.files)
        setImages((prevImages) => [...prevImages, ...files])
    }
   
    const handleStartDateChange=(e)=>{
    
     const startDate=new Date(e.target.value)
  
         const minEndDate=new Date(startDate.getTime()+3*24*60*60*1000).toDateString().slice(0,10)
         setStartDate(startDate)
         setEndDate(null)
         document.getElementById("end-date").min=minEndDate
         
    }
    const handleEndDateChange=(e)=>{
        const endDate= new Date(e.target.value)
        setEndDate(endDate)
    }
        const today=new Date().toISOString().slice(0,10)

        const minEndDate= startDate?new Date(startDate.getTime()+3*24*60*60*1000).toISOString().slice(0,10):""
    
    return (
        <div className='w-[90%] 800px:w-[70%] bg-[#f5f5f5] overflow-y-scroll p-3 rounded-sm shadow min-h-[80vh] '>

            <h5 className="text-[30px] font-Poppins text-center">Create Events</h5>
            {/* Create events form */}
            <form onSubmit={formSubmitHandler}>
                <br />

                <div>
                    <label className='pb-2'>Name <span className='text-[red]'>*</span></label>
                    <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className=' appearance-none h-[40px] mt-2 w-full px-3 border border-gray-300 rounded-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-600 sm:text-sm' placeholder='Enter your events name' required />
                </div>

                <br />
                <div>
                    <label className="pb-2">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        cols="30"
                        required
                        rows="8"
                        type="text"
                        name="description"
                        value={description}
                        className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Enter your events description..."
                    ></textarea>
                </div>
                <br />
                <div>
                    <label
                        className='pb-2'>Category <span className='text-[red]'>*</span></label>

                    <select value={category} onChange={(v) => setCategory(v.target.value)} className=' w-full mt-2 border h-[35px] rounded-sm'
                    >
                        <option value="Choose a Category">Choose a Category</option>
                        {
                            categoriesData && categoriesData.map((v, i) => (
                                <option key={i} value={v.title}>{v.title}</option>
                            ))
                        }
                    </select>
                </div>

                <br />
                <div>
                    <label className="pb-2">Tags</label>
                    <input
                        type="text"
                        name="tags"
                        value={tags}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setTags(e.target.value)}
                        placeholder="Enter your events tags..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">Original Price <span className="text-red-500">*</span></label>
                    <input
                        type="number"
                        name="price"
                        value={originalPrice}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setOriginalPrice(e.target.value)}
                        placeholder="Enter your events price..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Price (With Discount) <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={discountPrice}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setDiscountPrice(e.target.value)}
                        placeholder="Enter your events price with discount..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        events Stock <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={stock}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={(e) => setStock(e.target.value)}
                        placeholder="Enter your events stock..."
                    />
                </div>

                <br />
                <div>
                    <label className="pb-2">
                        Events start date <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        name="date"
                        value={startDate?startDate.toISOString().slice(0,10):""}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={handleStartDateChange}
                        min={today}
                        placeholder="Enter your events stock..."
                    />
                </div>
                <br />
                <div>
                    <label className="pb-2">
                        Events end date <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="date"
                        name="date"
                        id='end-date'
                        value={endDate?endDate.toISOString().slice(0,10):""}
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={handleEndDateChange}
                        min={minEndDate}
                        placeholder="Enter your events stock..."
                    />
                </div>

                <br />
                <div>
                    <label className="pb-2">
                        Upload Images <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="file"
                        name=""
                        id="upload"
                        className="hidden"
                        multiple
                        onChange={handleImageChange}
                    />
                    <div className="w-full flex items-center flex-wrap">
                        <label htmlFor="upload">
                            <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                        </label>
                        {images &&
                            images.map((i) => (
                                <img
                                    src={URL.createObjectURL(i)}
                                    key={i}
                                    alt=""
                                    className="h-[120px] w-[120px] object-cover m-2"
                                />
                            ))}
                    </div>
                    <br />
                    <div>
                        <input
                            type="submit"
                            value="Create"
                            className="mt-2 cursor-pointer appearance-none text-center block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
                </div>

            </form>
        </div>
    );
};

export default CreateEvents;
