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
        <div className="bg bg-info w-50 p-5 text-center shadow-lg ">
            <h1 className="text-primary-emphasis px-5">Login</h1>
            <form onSubmit={loginForm.handleSubmit}>
                <input type="text" placeholder="username" {...loginForm.getFieldProps("username")}/><br/><br/>
                <input type="text" placeholder="password" {...loginForm.getFieldProps("password")}/><br/><br/>
                <button className=" btn btn-primary px-4">Login</button>
                
            </form>

        </div>
    )
}
export default Login