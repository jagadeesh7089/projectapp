import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateloggedin } from "./loginSlice";
function Login(){
    var {isLoggedin}=useSelector(state=>state.loginReducer)
    var dispatch=useDispatch()
    
   var loginForm= useFormik({
        initialValues:{
            username:"",
            password:"",
            

        },
        onSubmit:(values)=>{    
            fetch("http://localhost:4000",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(values)
            }).then(res=>{return res.json()}).then(data=>{
               if(data.msg==="loginsuccess"){
                window.localStorage.setItem("token",data.token)
                dispatch(updateloggedin(true))
                   
               }
            })
        }
    })
    return (
        <div>
            <div className="w-25 card shadow-lg">
            <div className=" mt-5 text-center">
            <i className="bi bi-image-alt  logo" ></i> 
            <h3 className="text-light m-3">LOG IN</h3>
            </div>
            <div>
            <form onSubmit={loginForm.handleSubmit}>
                <div id="inp">
                <div>
                <i className="bi bi-person-fill icon"></i>   
                <input type="text" placeholder="Username" {...loginForm.getFieldProps("username")}/><br/><br/>
                </div>
                <div>
                <i className="bi bi-lock-fill icon"></i>
                <input type="password"  placeholder="Password" {...loginForm.getFieldProps("password")}/><br/><br/>
                </div>
                </div>
                <button className="px-4 but">Login</button>
                
            </form>
            </div>
            <div className="pass">forgotpassword?</div>
            </div>
        </div>
    )
}
export default Login