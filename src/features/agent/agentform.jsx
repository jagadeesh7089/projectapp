import { useFormik } from "formik";
import React from "react";
function AgentForm(){

   var agentform= useFormik({
    initialValues:{
      "customerMobile":0,
      "email":"",
      "typeofloan":"",
      "loanitem":"",
      "productcost":0,
      "intrest":null,
      "downpayment":0,
      "status":[
        {
            "code":"applied",
            "timestamp":new Date().getTime()
        }
      ]

    }
   })
   
    return (
        <div>
            <h1>Agent Form</h1>
            <form>
                <input type="text" {...agentform.getFieldProps("customerMobile")}/><br/><br/>
                <input type="text" {...agentform.getFieldProps("email")}/><br/><br/>
                <input type="text" {...agentform.getFieldProps("typeofloan")}/><br/><br/>
                <input type="text" {...agentform.getFieldProps("loanitem")}/><br/><br/>
                <input type="text" {...agentform.getFieldProps("productcost")}/><br/><br/>
            </form>
        </div>
    )
}
export default AgentForm