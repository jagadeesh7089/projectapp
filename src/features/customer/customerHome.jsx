import React from "react";
import { useSelector } from "react-redux";
import { useGetLoanbyMobileQuery } from "../../service/loanAPI";
function CustomerHome(){
  var {user} = useSelector(state=>state.loginReducer)
  var{isLoading,data}=useGetLoanbyMobileQuery(user.mobile)
  console.log(data)
    return(
        <div>
            
            <div className="d-flex ">
                <div className="w-50  border border-warning  bg bg-warning">
                     <div> <h3 className="text-center">Customer Details </h3></div>
                     <div className="bg bg-light shadow-lg m-auto w-75">
                        {/* <h2> Email :{data[0].email}</h2>  
                        <h2> mobile :{data[0].customerMobile}</h2>  
                      */}
                       
                     </div>

                </div>
                <div className="text-center w-50 border border-danger m-2">
                    <h1>Status</h1>
                    {
                        !isLoading&& JSON.stringify(data)
                    }
                </div>
            </div>
        </div>
    )
}
export default CustomerHome