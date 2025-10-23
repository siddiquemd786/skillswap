// src/routes/PriveteRoute.jsx
import React, { use } from 'react';
import { AuthContext } from '../components/layout/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../components/home/Loading';
import { useContext } from 'react';

const PriveteRoute = ({children}) => {
  
    const {user,loading}=useContext(AuthContext)

    console.log("🌀 PrivateRoute render — user:", user, "loading:", loading);


if(loading){
    return <div>
        <Loading></Loading>
    </div>
}

    if (user && user?.email){
return children
    }

    return <Navigate to='/login'> </Navigate>

    
};

export default PriveteRoute;