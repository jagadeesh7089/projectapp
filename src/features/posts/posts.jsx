import React from "react";
import { useSelector } from "react-redux";
import { useGetAllpostsQuery } from "../../service/postApi";
function Posts(){
   var {data}= useGetAllpostsQuery()
   
    return(
        <div>
            <h1>posts</h1>
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