import React from "react";
import { Outlet } from "react-router-dom";

function Manager(){
    return(
        <div>
            
            <h2 className="bg bg-primary p-2 text-warning">Manager Dashboard</h2>
          
            <Outlet></Outlet>
        </div>
    )
}
export default Manager