import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Agent(){
   var navigate=useNavigate()
    function agentform(){
        navigate(`/agent/agentform`)
    }
    // navigate(`/agent/`)
    return(
        <div className=" border border-warning " >
        <div className="d-flex justify-content-between p-2 bg bg-primary " >
            <h2 className="text-danger fw-bold">Agent Dashboard</h2>
          <button onClick={()=>{agentform()}} className="btn btn-success border border-2 border-light">AddLoan</button>
          
          </div>
            <Outlet></Outlet>
        </div>
    )
}
export default Agent