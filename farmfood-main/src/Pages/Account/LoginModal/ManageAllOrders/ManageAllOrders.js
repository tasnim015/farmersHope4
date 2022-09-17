import React,{useState,useEffect} from 'react';
import ShowAllOrders from './ShowAllOrders';
const ManageAllOrders = () => {
    const [manageAllOrders,setManageAllOrders]=useState();
    useEffect(()=>{
        const url='http://localhost:8080/orders';

        const loadAllOrders=async()=>{
            const res=await fetch(url);
            const data=await res.json();
            setManageAllOrders(data)
        }

        loadAllOrders();
    },[])
    return (
        <div>
         
            <h2 className="text-xl text-center mt-5">Manage All orders</h2>
           {
               manageAllOrders?.map(order=><ShowAllOrders key={order._id} order={order} />)
           }
        </div>
    );
};

export default ManageAllOrders;