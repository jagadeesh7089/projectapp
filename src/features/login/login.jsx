import { useFormik } from "formik";
import React from "react";
function Login(){
   var loginForm= useFormik({
        initialValues:{
            username:"",
            password:"",
            

        },
        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={loginForm.handleSubmit}>
                <input type="text" placeholder="username" {...loginForm.getFieldProps("username")}/><br/><br/>
                <input type="text" placeholder="password" {...loginForm.getFieldProps("password")}/><br/><br/>
                <button>Login</button>
                
            </form>

        </div>
    )
}
export default Login