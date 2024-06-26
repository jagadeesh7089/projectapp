import React from "react";
import { useSelector } from "react-redux";
import { useGetLoanbyMobileQuery, useLazyGetAllloansQuery, useLazyGetLoanbyMobileQuery, useUpdateLoanMutation } from "../../service/loanAPI";
import { json } from "react-router-dom";
function CustomerHome(){
 var[updateLoanFn]= useUpdateLoanMutation()
  var {user} = useSelector(state=>state.loginReducer)
  var{isLoading,data}=useGetLoanbyMobileQuery(user.mobile)
 var[lazyLoanFn]=useLazyGetLoanbyMobileQuery()
  console.log(data)
  function payemi(cdate){
    var temp=JSON.parse(JSON.stringify(data[0]))
    
    console.log(temp[0])
    console.log(cdate)
    temp.emis.map(emi=>{
     if(cdate.emiDate===emi.emiDate){
       return emi.emiStatus=false
     }
     
    })
    console.log(temp)
     updateLoanFn(temp).then(res=>{lazyLoanFn()})

  }
    return(
        <div>
            
            <div className="d-flex">
                <div className="w-50  border border-warning  bg bg-warning ">
                     <div> <h3 className="text-center">Customer Details </h3></div>
                     <div className="bg bg-light shadow-lg m-auto w-75 p-5">
                       {
                        !isLoading && data.map(cus=>{   
                            return <table>
                              <tr>
                                <td>Customer Mobile:</td>
                                <td>{cus.customerMobile}</td>
                              </tr>
                              <tr>
                                <td>Customer Email:</td>
                                <td>{cus.email}</td>
                              </tr>
                              <tr>
                                <td> Typeof Loan:</td>
                                <td>{cus.typeofloan}</td>
                              </tr>
                              <tr>
                                <td>Loan Item:</td>
                                <td>{cus.loanitem}</td>
                              </tr>
                              <tr>
                                <td>ProductCost:</td>
                                <td>{cus.productcost }</td>
                              </tr>
                            </table>
                        })
                       
                       }
                       
                     </div>

                </div>
                <div  style={{textAlign:"center",width:"50%",border:"1px solid red",margin:"10px",height:"580px",overflow:"scroll"}}>
                    <h1 style={{color:"green"}}>Status</h1>
                     <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>EMI Amount</th>
                                <th>EMI Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                !isLoading && data[0].emis.map((cdata,i)=>{
                                 return <tr>
                                    <th>{i+1}</th>
                                    <th>{Math.floor(cdata.emiAmount)}</th>
                                    <th>{new Date(cdata.emiDate).toDateString()}</th>
                                    <th>

                                        {cdata.emiStatus===false?<button className="btn btn-info">Emi Payed</button>:
                                        <button onClick={()=>{payemi(cdata)}} className="btn btn-success">Pay EMI</button>}
                                    </th>
                                 </tr>
                                })
                                    
                                
                            }
                        </tbody>
                     </table>
                </div>
            </div>
        </div>
    )
}
export default CustomerHome