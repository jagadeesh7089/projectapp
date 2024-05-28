import React from "react";
import { useGetAllproductsQuery } from "../../service/productsApi";
function Products(){
  var {isLoading,data} = useGetAllproductsQuery()
    return(
        <div> 
            <div className="d-flex flex-wrap">
            {
                data?.map(product=>{
                    return <div className="w-25 m-5 border border-2 d-flex flex-column justify-content-between bg bg-light shadow-lg p-5">
                          <img src={product.image} className="h-50"/>
                          <p> Tittle:{product.title.slice(0,20)}</p>
                          <p> Price:${product.price}</p>
                          <p>Rating: {product.rating.rate}</p>
                          <button className="btn btn-success">Add to Cart</button>
                     </div>
                })
            }
        </div>
        </div>
    )
}
export default Products