import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateloggedin } from "../login/loginSlice";
function Navbar(){
   var {user}=useSelector(state=>state.loginReducer)
    var dispatch=useDispatch()
    var navigate = useNavigate()
    function logout(){
        window.localStorage.removeItem("user")
        dispatch(updateloggedin(false))
        navigate('/')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                
                <div class="container-fluid">
                  <Link class="navbar-brand" to={`/${user.role}`}><i className="fs-4 text-danger bg bg-info p-2">Bajaj Finserve </i></Link>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item mx-3">
                        <Link class="nav-link active" aria-current="page" to={`/${user.role}`}>Mydashboard</Link>
                      </li>
                      
                      <button onClick={()=>{logout()}} className="btn btn-danger mx-5">Logout</button>


                      
                  
                    </ul>
                  </div>
                </div>
             </nav>
      </div>
    )
}
export default Navbar