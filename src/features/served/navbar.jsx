import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateloggedin } from "../login/loginSlice";
function Navbar(){
    var dispatch=useDispatch()
    var navigate = useNavigate()
    function logout(){
        window.localStorage.removeItem("token")
        dispatch(updateloggedin(false))
        navigate('/')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Navbar</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="posts">Posts</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="courses">course</Link>
        </li>
        
         <button onClick={()=>{logout()}}>Logout</button>
       

        
    
      </ul>
    </div>
  </div>
  </nav>
        </div>
    )
}
export default Navbar