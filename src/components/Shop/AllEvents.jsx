import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { AiOutlineEye, AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent, getAllEvent } from '../../redux/actions/events';
import { DataGrid } from '@material-ui/data-grid';

const AllEvents = () => {

    const dispatch = useDispatch()
    const { events } = useSelector((state) => state.event)
    const { seller } = useSelector((state) => state.seller)
    


    useEffect(() => {
        dispatch(getAllEvent(seller._id))
    },[])
    const handelDelete = (id) => {
       
      dispatch(deleteEvent(id))
    //   window.location.reload(true)
    }
    const columns = [
        {
            field: "id",
            headerName: "Product Id",
            minWidth: 150,
            flex: 0.7
        },
        {
            field: "name",
            headerName: "Name",
            minWidth: 80,
            flex: 1.4
        },
        {
            field: "Price",
            headerName: "Price",
            minWidth: 40,
            flex: 0.6
        }, {
            field: "Stock",
            headerName: "Stock",
            type: "number",
            minWidth: 80,
            flex: 0.5
        },
        {
            field: "sold",
            headerName: "Sold",
            minWidth: 130,
            flex: 0.6
        },    {
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
    ]

    const row = []
    events && events.forEach(element => {
        row.push({
            id: element._id,
            name: element.name,
            Stock: element.stock,
            Price: "US$" + element.originalPrice,
            sold: element?.sold_out,
        })
    });

    return (
        <div>
            <div className="w-full mx-5 pt-1 mt-10 bg-white mr-3">
                <DataGrid
                    rows={row}
                    columns={columns}
                    pageSize={10}
                    disableSelectionOnClick
                    autoHeight
                />
            </div>
        </div>
    );
};

export default AllEvents;