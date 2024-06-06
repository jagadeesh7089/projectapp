import React from "react";
import { useGetAllloansQuery } from "../../service/loanAPI";
import { useNavigate } from "react-router-dom";
function Agenthome(){
   var navigate= useNavigate()
   var {isLoading,data}=useGetAllloansQuery()
   console.log(isLoading)
   console.log(data)

//    function approve(loan){
//     loan.status.push({
//         code:"approved",
//          timestamp:Date.now()

//     })
//    }
   function downpay(loan){
        navigate(`/agent/downpayment`,{state:loan})
   }
    return(
        <div>
            <div className="m-1">
                <table className="table table-striped ">
                    <thead>
                        <tr className="table-danger">
                            <th className="p-3">#</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Mobile</th>
                            <th className="p-3">Loan item</th>
                            <th className="p-3">Cost</th>
                            <th className="p-3">Status</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            data?.map(loan=>{
                                return <tr>
                                    <td className="p-3">{loan.id}</td>
                                    <td className="p-3">{loan.email}</td>
                                    <td className="p-3">{loan.customerMobile}</td>
                                    <td className="p-3">{loan.loanitem}</td>
                                    <td className="p-3">{loan.productcost}</td>
                                    <td>{[...loan.status].sort((a,b)=>{ return a.timestamp< b.timestamp ? 1:-1})[0].code}</td>
                                    <td>
                                       
                                        {[...loan.status].sort((a,b)=>{return a.timestamp<b.timestamp ? 1:-1})[0].code==="approved"&&
                                        <>
                                            <button className="btn btn-warning" onClick={()=>{downpay(loan)}}>Take downpayment</button>
                                            
                                        </>
                                        }
                                         <button className="btn btn-danger m-2">Reject</button>
                                    </td>
                                    
                                </tr>
                            })
                         }
                  </tbody>
                </table>
            </div>
              

        </div>
    )
}
export default Agenthome