import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth';
import ManageAllOrders from '../Account/LoginModal/ManageAllOrders/ManageAllOrders';
import OrderHistory from '../Account/LoginModal/OrderHistory.js/OrderHistory';
import AddProduct from './AddProduct/AddProduct';
import Products from './Products/Products';

const Dashboard = () => {
    const navigate=useNavigate();
    const {logOut,user,admin,farmer}=useAuth();
    const handleLogout=()=>{
        logOut();
        navigate('/');
    }
    console.log(user?.role);
    console.log(admin,farmer);
  return (
    <div className='grid  grid-cols-7'>
      <div className='col-span-2 bg-slate-300'>
          <div>
            <ul className='mt-12 text-center h-screen'>
                <li onClick={()=>navigate('/')} className='my-9 hover:bg-slate-500 hover:cursor-pointer px-14 py-4'>Home</li>
                <li onClick={()=>navigate('/dashboard/my-orders')} className='my-9 hover:bg-slate-500 hover:cursor-pointer px-14 py-4'>My Orders</li>
                {admin &&<li onClick={()=>navigate('/dashboard/all-orders')} className='my-9 hover:bg-slate-500 hover:cursor-pointer px-14 py-4'>All Orders</li>}
              {  (farmer || admin) &&<li onClick={()=>navigate('/dashboard/add-products')} className='my-9 hover:bg-slate-500 hover:cursor-pointer px-14 py-4'>Add Products</li>}
                {admin &&<li onClick={()=>navigate('/dashboard/all-products')} className='my-9 hover:bg-slate-500 hover:cursor-pointer px-14 py-4'>All Products</li>}
                <li onClick={handleLogout} className='my-9 hover:bg-slate-500 hover:cursor-pointer px-14 py-4'>Log Out</li>
            </ul>
          </div>
      </div>
      <div className='col-span-5'>
           <Routes>
            <Route path='/my-orders' element={<OrderHistory/>}/>
            <Route path='/all-orders' element={<ManageAllOrders/>}/>
            <Route path='/add-products' element={<AddProduct/>}/>
            <Route path='/all-products' element={<Products/>}/>
           </Routes>
      </div>
    </div>
  )
}

export default Dashboard