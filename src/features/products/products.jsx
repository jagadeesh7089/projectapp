import React from "react";
import { useGetAllproductsQuery } from "../../service/productsApi";
function Products(){
  var {isLoading,data} = useGetAllproductsQuery()
    return(
        <div> 
            <div className="d-flex flex-wrap">
            {
                data?.map(product=>{
                    return <div className="w-25 m-5 border d-flex flex-column ">
                          <img src={product.image} className="w-75"/>
                          <p> Tittle:{product.title.slice(0,20)}</p>
                          <p> Price:${product.price}</p>
                          <button>Add to Cart</button>
                     </div>
                })
            }
        </div>
        </div>
    )
}
export default Products