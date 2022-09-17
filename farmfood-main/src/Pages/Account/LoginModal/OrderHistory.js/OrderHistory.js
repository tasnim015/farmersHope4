import React,{useEffect,useState} from 'react';
import useAuth from '../../../../Hooks/useAuth';
import MyOrder from '../myOrders/MyOrder';
import Navbar from '../../../Shared/Navbar/Navbar'
import LoginModal from '../LoginModal';
import CartModal from '../../CartModal/CartModal';
const OrderHistory = () => {
    const {user}=useAuth();
    const [myOrders,setMyOrders]=useState();
    useEffect(()=>{
        const url=`http://localhost:8080/myorders?email=${user?.email}`;
        const loadMyOrders=async()=>{
            const res=await fetch(url);
            const data=await res.json();
            setMyOrders(data)
        }

        loadMyOrders();
    },[])

    
    return (
        <div>
            
            <h2 className="text-center">Your Orders History</h2>
             
            <div className="ml-9">
            {
                 myOrders?.map(order=><MyOrder key={order._id} order={order}/>)
             }

            </div>
        </div>
    );
};

export default OrderHistory;