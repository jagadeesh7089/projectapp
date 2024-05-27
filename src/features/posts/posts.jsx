import React from "react";
import { useSelector } from "react-redux";
import { useGetAllpostsQuery } from "../../service/postApi";
function Posts(){
   var {data}= useGetAllpostsQuery()
   
    return(
        <div className="border border-warning m-2 p-3">
            <h1 className="text-success ">Posts</h1>
            <div>
                {
                    data?.map(post=>{
                        return <li>{post.title}</li>
                    })
                }
            </div>

        </div>
    )
}
export default Posts