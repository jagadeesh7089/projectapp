import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const intrestApi = createApi({
  reducerPath: 'intrestApi',
  baseQuery: fetchBaseQuery(
    { 
        baseUrl: 'http://localhost:4000/intrestrates',
        prepareHeaders:(headers,{getState})=>{
            var token=JSON.parse(window.localStorage.getItem("user")).token
            console.log("token in Api",token)
            headers.set("token",token)
            return headers
         }

    }
),
  endpoints: (builder) => ({
    getAllintrest: builder.query({
      query: () => `/`,
    }),
  }),
})

export const {useGetAllintrestQuery} =intrestApi