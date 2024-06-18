import React from "react";
import { Outlet } from "react-router-dom";
 
function Customer(){
    return (
        <div>
            <h3 className="bg bg-primary p-2"><i>Customer Dashboard</i></h3>
            <Outlet></Outlet>
        </div>
    )
}
export default Customer