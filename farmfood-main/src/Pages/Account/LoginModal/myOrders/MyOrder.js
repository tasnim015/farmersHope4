import React from 'react';
import ShowMyOrder from './ShowMyOrder';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MyOrder = ({order}) => {

    const cancelMyOrder=(orderId)=>{
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
   
    return (
        <div className="grid grid-cols-6 my-5 items-center border-2 bg-slate-200 text-sm">
           
          <div className="col-span-4">
          {
                order.items?.map(myPd=><ShowMyOrder key={myPd._id} myPd={myPd} />)
            }
              </div>

             <div className="h-auto py-14 mx-3 border-2 border-black">
             <h2 className="text-center text-lg">Total : {order.totalPrice} </h2>
             
          
             </div>
             <div className='cursor-pointer text-2xl border border-black h-12 mx-auto text-center w-12' onClick={()=>cancelMyOrder(order._id)}>
            <FontAwesomeIcon color='red' icon={faTrash}  /> 
            </div>
        </div>
    );
};

export default MyOrder;