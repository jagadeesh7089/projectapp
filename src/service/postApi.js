import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery(
    {
         baseUrl: 'http://localhost:4000/posts',
         prepareHeaders:(headers,{getState})=>{
            var token=window.localStorage.getItem("token");
            console.log("token in Api",token)
            headers.set("token",token)
            return headers
         }

    }
),
  endpoints: (builder) => ({
    getAllposts: builder.query({
      query: () => `/`,
    }),
  }),
})
export const {useGetAllpostsQuery}=postApi