import React from "react";
import { useGetAllloansQuery, useLazyGetAllloansQuery, useUpdateLoanMutation } from "../../service/loanAPI";
import { useNavigate } from "react-router-dom";
function Managerhome(){
   var navigate= useNavigate()
   var {isLoading,data}=useGetAllloansQuery()
   var [updateloanFn]=useUpdateLoanMutation()
   var[lazyLoanFn]=useLazyGetAllloansQuery()

   console.log(isLoading)
   console.log(data)

    function approve(loan){
    var temp=JSON.parse(JSON.stringify(loan))
    temp.status.push({
        code:"approved",
         timestamp:Date.now()

    })
    updateloanFn (temp).then(res=>{
       lazyLoanFn()
    })
   
   }

    function disburse(loan){
        var temp=JSON.parse(JSON.stringify(loan))
        temp.status.push({
            code:"disbursed",
            timestamp:Date.now()
        })

        var emis=[]
         var totalintrest=(temp.productcost-temp.downpayment)*temp.intrest.rateofinterest/100
        var totalLoanAmount=(temp.productcost-temp.downpayment)+totalintrest
        var emi=totalLoanAmount/temp.intrest.tenure

        for(var i=1;i<=temp.intrest.tenure;i++){
            emis.push({
                emiAmount:emi,
                emiDate: Date.now()+(30*24*60*60*1000)*i
            })
        }
        temp.emis=[...emis]
        updateloanFn(temp).then(res=>{lazyLoanFn()})
    }
    return(
        <div>
            <div className="m-1">
                <table className="table table-striped ">
                    <thead>
                        <tr className="table-danger ">
                            <th className="p-3">#</th>
                            <th className="p-3">Email</th>
                            <th className="p-3">Mobile</th>
                            <th className="p-3">Loan Type</th>
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
                                    <td className="p-3">{loan.typeofloan}</td>
                                    <td className="p-3">{loan.loanitem}</td>
                                    <td className="p-3">{loan.productcost}</td>
                                    <td>
                                        { [...loan.status].sort((a,b)=>{return a.timestmap<b.timestamp ? 1:-1})[0].code}
                                        
                                    </td>
                                    <td>
                                        {
                                            [...loan.status].sort((a,b)=>{return a.timestmap<b.timestamp ? 1:-1})[0].code==="applied" &&
                                             <>
                                                <button className="btn btn-success m-1" onClick={()=>{approve(loan)}}>Approve</button>
                                                {/* <button className="btn  btn-danger">Reject</button> */}
                                            </>
                                        }
                                        {
                                            [...loan.status].sort((a,b)=>{return a.timestmap<b.timestamp ? 1:-1})[0].code==="approved" &&
                                             <>
                                                <button className="btn btn-info">...Waiting for downpayment</button>
                                                {/* <button className="btn  btn-danger">Reject</button> */}
                                            </>
                                        }
                                        {
                                            [...loan.status].sort((a,b)=>{return a.timestmap<b.timestamp ? 1:-1})[0].code==="downpayment received" &&
                                             <>
                                                <button className="btn btn-warning" onClick={()=>{disburse(loan)}}>Disbursed</button>
                                                {/* <button className="btn  btn-danger">Reject</button> */}
                                            </>
                                        }
                                        {
                                           [...loan.status].sort((a,b)=>{return a.timestamp<b.timestamp? 1:-1})[0].code==="disbursed"&&<i>emis Pending...</i> 
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
export default Managerhome