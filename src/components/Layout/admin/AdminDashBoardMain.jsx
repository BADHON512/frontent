import React from 'react';
import { AiOutlineMoneyCollect } from 'react-icons/ai';
import { DataGrid } from '@material-ui/data-grid';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AdminDashBoardMain = () => {
    const {users}=useSelector((state)=>state.user)
    const {allSeller}=useSelector((state)=>state.seller)

  
    const colunm=[
        {
            field:"id",
            headerName:"Order ID",
            minWidth:150,
            flex:0.7
        },
        {
            field:"status",
            headerName:"Status",
            minWidth:130,
            flex:0.7,
            cellClassName:(params)=>{
                return params.getValue(params.id ,"status")=== "Delivered"?"greenColor":"redColor";
            }
        },
        {
            field:"itemQty",
            headerName:"Items Qty",
            minWidth:130,
            flex:0.7,
            type:"number"
        },{
            field:"total",
            headerName:"Total",
            minWidth:130,
            flex:0.7
        },
        {
            field:"createdAt",
            headerName:"Order Date"
            ,minWidth:130,
            flex:0.7

        }
    ]
  
    
    const row=[] 
     row.push({
            id:"6565964651",
            status:"preparing",
            total:4,
            itemsQty:5,
            createdAt: new Date().toISOString().slice(0,10)
        })
    // product&&product?.forEach(element => {
      
    // });


    return (
        <div className='  p-4  w-full bg-[#80808023] min-h-[80vh]'>
          <h1 className='text-[22px] font-Roboto'>Overview</h1>
             
             <div className=' mt-4 flex justify-between flex-wrap'>
               <div className='shadow-md rounded-sm bg-[white] w-full 800px:w-[30%] h-[20vh] mt-3'>
                    <div className="flex p-2">
                        <AiOutlineMoneyCollect size={25} 
                     />
                        <h1 className='font-Poppins text-gray-600 ml-2'>Total Earnings</h1>
                       
                    </div>
                    <h5 className="pt-1 pl-[36px] text-[22px] font-[500]">$ {1245}</h5>
               </div>

               <div className='shadow-md rounded-sm bg-[white] w-full 800px:w-[30%] h-[20vh] mt-3'>
                    <div className="flex p-2">
                        <AiOutlineMoneyCollect size={25} 
                     />
                        <h1 className='font-Poppins text-gray-600 ml-2'>All Seller</h1>
                       
                    </div>
                    <h5 className="pt-1 pl-[36px] text-[22px] font-[500]">$ {allSeller?.length}</h5>
                    <Link  to={""}><h2 className='mt-2 ml-4'>View all Seller</h2> </Link>
               </div>

               <div className='shadow-md rounded-sm bg-[white] w-full 800px:w-[30%] h-[20vh] mt-3'>
                    <div className="flex p-2">
                        <AiOutlineMoneyCollect size={25} 
                     />
                        <h1 className='font-Poppins text-gray-600 ml-2'>All User</h1>
                       
                    </div>
                    <h5 className="pt-1 pl-[36px] text-[22px] font-[500]">$ {users?.length}</h5>
                    <Link  to={""}><h2 className='mt-2 ml-4'>View all User</h2> </Link>
               </div>
               
             

             </div>

            

         <div className="mt-8">
           <h1 className='font-Roboto text-[22px]' >Latest Orders</h1>

           <div className="mt-4 bg-white">
            <DataGrid
            rows={row}
            columns={colunm}
            pageSize={4}
            disableSelectionOnClick
            autoHeight

            />
           </div>
         </div>

        </div>
    );
};

export default AdminDashBoardMain;