import React, { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../served/navbar";
import { useSelector } from "react-redux";
 function Home(){
        var navigate=useNavigate()
       var {user}=useSelector(state=>state.loginReducer)
        console.log(user.role)
       
         useEffect(()=>{
            navigate(`/${user.role}`)
         },[user])
      
    return (
        <div>
            
            <Navbar></Navbar>
           <Outlet></Outlet>
            
        </div>
    )
 }
 export default Home