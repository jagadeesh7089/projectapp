import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery(
    {
         baseUrl: 'http://localhost:4000/products',
         prepareHeaders:(headers,{getState})=>{
            var prouser=window.localStorage.getItem("user");
            console.log("token in Api",JSON.parse(prouser.token))
            // headers.set("token",prouser.token)
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