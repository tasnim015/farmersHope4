import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTrash } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import DisplayOrderedItems from './DisplayOrderedItems';

const ShowAllOrders = ({order}) => {
    const handleRemoveOrder=(orderId)=>{
        if(window.confirm('are you sure you want to delete this order?')===true){
            fetch('http://localhost:8080/orders',{
                method:'DELETE',
                headers:{
                    'content-type':'application/json'
                },
             body:JSON.stringify({orderId})
            }).then(res=>res.json()).then(data=>{
                if(data.acknowledged){
                    alert('Order Deleted');
                }else{
                alert('something went wrong');
                }
            });
        }
    }
   
     const {items}=order;
    return (
        <div className='grid text-center grid-cols-6 items-center my-9 border-2 px-5 py-2'>
            <div className='col-span-2'>
        
            <h4 className="text-sm">Email : {order.email}</h4>
            </div>

            <div className="col-span-3">
                {
                    items?.map(pd=><DisplayOrderedItems key={pd._id} pd={pd} />)
                }
            </div>

            <div className="pl-5 flex justify-around">
                <h3>{
                   order.totalPrice
                    } Taka</h3>     
                <FontAwesomeIcon onClick={()=> handleRemoveOrder(order._id)} style={{color:'red',fontSize:'35px',cursor:'pointer'}} icon={faTrash} />
        
            </div>

           

        </div>
    );
};

export default ShowAllOrders;