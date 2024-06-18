import { useFormik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { useAddLoanMutation, useAddUserMutation, useGetAllloantypesQuery } from "../../service/loanAPI";
import { useGetAllintrestQuery } from "../../service/intrestApi";
import { useNavigate } from "react-router-dom";
function AgentForm(){
 var navigate= useNavigate()
   var {isLoading:loanLoading,data:loandata}=useGetAllloantypesQuery()
  var {isLoading:intrestLoading,data:intrestdata}= useGetAllintrestQuery()
    var [addLoanFn]= useAddLoanMutation()
      var[addUserFn]= useAddUserMutation()
   

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

    },
    onSubmit:(values)=>{
        values.intrest=JSON.parse(values.intrest)
        console.log(values) 
        addLoanFn(values).then(res=>{navigate(`/agent/`)})
        addUserFn({
          username: values.email,
          password: 123,
          role: "customer",
          mobile:values.customerMobile 
        })  
    }
   })
   
    return (
      // #f7ca4559
    <div className="shadow-lg p-5 " style={{width:"60%",  margin:"auto",marginTop:"10px",
    backgroundColor:" rgb(244 ,236 ,246)",borderRadius:"20px",height:"600px",}}>
      <div className="">
        <h4 className="text-center  p-3 shadow-lg rounded-4  text-success fw-bold">Application  for Customer Loan</h4>
      </div>

    <form onSubmit={agentform.handleSubmit}>
    <div class="row g-3 mt-3">
  <div class="col"> 
    <input type="text" class="form-control p-3 m-3 rounded-4 " placeholder="Mobile" aria-label="" {...agentform.getFieldProps("customerMobile")}/>
  </div>
  <div class="col">
    <input type="email" class="form-control p-3 m-3 rounded-4 " placeholder="email@gmail.com" aria-label="Email"{...agentform.getFieldProps("email")} />
  </div>
</div>

<div className="d-flex justify-content-evenly ">
<div className="w-50">
<select class="form-select form-select-lg mt-4  " aria-label="Large select example"{...agentform.getFieldProps("typeofloan")} >
<option selected>Select the type of loan</option>
  {
    loandata?.map((type)=>{
        return <option>{type}</option>
    })
  }
</select>
</div>
<div className="w-50">
<select class="form-select form-select-lg m-4  " aria-label="Large select example"{...agentform.getFieldProps("intrest")} >
<option selected>Select the intreset</option>
  {
    intrestdata?.map((intrest)=>{
        return <option value={JSON.stringify(intrest)}>{`${intrest.rateofinterest} % for ${intrest.tenure}${intrest.tenuretype}`}</option>
    })
  }
</select>
</div>
</div>  

<div class="row g-3">
  <div class="col"> 
    <input type="text" class="form-control p-3 m-3 rounded-4 " placeholder="Product Cost" aria-label="text" {...agentform.getFieldProps("productcost")}/>
  </div>
  <div class="col">
    <input type="text" class="form-control p-3 m-3 rounded-4 " placeholder="Loanitem" aria-label="loanitem"{...agentform.getFieldProps("loanitem")} />
  </div>
</div>



<div class="col">
    <input type="text" class="form-control p-3 m-3 rounded-4 " placeholder="Downpayment" aria-label="loanitem"{...agentform.getFieldProps("downpayment")} />
  </div>





   <center><button className="btn btn-success mt-4">Apply Loan</button></center>

</form>
        </div>
    )
}
export default AgentForm