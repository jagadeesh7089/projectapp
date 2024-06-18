import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery(
    {
         baseUrl: 'http://localhost:4000/products',
         prepareHeaders:(headers,{getState})=>{
            var token=JSON.parse(window.localStorage.getItem("user")).token
            console.log("token in Api",token)
            headers.set("token",token)
            return headers
         }

    }   
),
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: () => `/`,
    }),
  }),
})
export const {useGetAllproductsQuery}=productsApi