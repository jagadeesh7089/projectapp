import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLazyGetAllloansQuery, useUpdateLoanMutation } from "../../service/loanAPI";
 
function Downpayment(){
var navigate=useNavigate()
    var [lazyLoanFn]=useLazyGetAllloansQuery()
  var [updatepayFn]= useUpdateLoanMutation()
  
  
    var {state:loan}=useLocation()
        console.log(loan)

        function receive(loan){
            var temp=JSON.parse(JSON.stringify(loan))
            temp.status.push({
                code:"downpayment received",
                timestamp:Date.now()
            })

            updatepayFn(temp).then(res=>{
                navigate(`/agent/`)
                lazyLoanFn()
            })
            
        }
    return (
        <div className="bg bg-light p-5 w-100 m-auto shadow-lg mt-5">
            <div className="p-3 bg bg-primary w-100 m-auto shadow-lg">
            <div className="text-center text-warning"><h3>Downpayment Form</h3></div>
            <div className="">
                 <h5 className="p-2"> Loan type:{loan.typeofloan}</h5>
                 <h5 className="p-2"> Loan item:{loan.loanitem}</h5>
                 <h6 className="p-2"> Email:{loan.email} </h6>
                 <h6 className="p-2"> Mobile:{loan.customerMobile}</h6>
                 <h5 className="p-2"> Downpayment:{loan.downpayment}</h5>
                 <div className="text-center"> <button className="bg bg-success text-white " onClick={()=>{receive(loan)}}>Received</button></div>
            </div>
        </div>
        </div>
    )
}
export default Downpayment