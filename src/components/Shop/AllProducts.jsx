import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getAllProductsShop } from '../../redux/actions/product';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { AiOutlineEye ,AiOutlineDelete } from 'react-icons/ai';
import { DataGrid } from '@material-ui/data-grid';

const AllProducts = () => {
    const dispatch=useDispatch()
    const {seller}=useSelector((state)=>state.seller)
    const {products}=useSelector((state)=>state.product)
    console.log(products)

    useEffect(()=>{
        dispatch(getAllProductsShop(seller._id))
    },[dispatch])

    const handelDelete=(id)=>{
           dispatch(deleteProduct(id))
           window.location.reload(true)
    }

    const columns = [
        { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
        {
          field: "name",
          headerName: "Name",
          minWidth: 80,
          flex: 1.4,
        },
        {
          field: "price",
          headerName: "Price",
          minWidth: 100,
          flex: 0.6,
        },
        {
          field: "Stock",
          headerName: "Stock",
          type: "number",
          minWidth: 80,
          flex: 0.5,
        },
    
        {
          field: "sold",
          headerName: "Sold out",
          type: "number",
          minWidth: 130,
          flex: 0.6,
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
            field:"Delete",
            flex:0.8,
            minWidth:120,
            headerName:"",
            type:"number",
            sortable:false,

            renderCell:(params)=>{
                return(
                    <>
                    <Button onClick={()=>handelDelete(params.id)}>
                        <AiOutlineDelete/>
                    </Button>
                    </>
                )
            }
        }
      ];
    
      const row = [];
    products &&
    products.forEach((item) => {
          row.push({
            id: item._id,
            name: item.name,
            price: "US$ " + item.discountPrice,
            Stock: item.stock,
            sold: item?.sold_out,
          });
        });
    return (
        <>
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            autoHeight
          />
        </div>
    </>
    );
};

export default AllProducts;