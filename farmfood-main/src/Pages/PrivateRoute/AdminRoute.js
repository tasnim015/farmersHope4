import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({children}) => {
    const location=useLocation();
    const {user,admin,loading}=useAuth();
    if(loading){
       <h2>Loading.....</h2>
    }
    if(user && admin){
    return children
    }
    return <Navigate to="/home" state={{from:location}}   /> 
    
};

export default AdminRoute;