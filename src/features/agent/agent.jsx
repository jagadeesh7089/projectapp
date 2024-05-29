import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
function Agent(){
   var navigate=useNavigate()
    function agentform(){
        navigate(`/agent/agentform`)
    }
    return(
        <div>
            <h1>Agent</h1>
          <button onClick={()=>{agentform()}}>AddForm</button>
            <Outlet></Outlet>
        </div>
    )
}
export default Agent