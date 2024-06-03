import React from "react";
import { Outlet } from "react-router-dom";

function Manager(){
    return(
        <div>
            
            <h1 className="bg bg-info p-2 text-warning">Manager Dashboard</h1>
          
            <Outlet></Outlet>
        </div>
    )
}
export default Manager