import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const loanApi = createApi({
  reducerPath: 'loanApi',
  baseQuery: fetchBaseQuery(
    { 
        baseUrl: 'http://localhost:4000',
        prepareHeaders:(headers,{getState})=>{
            var token=JSON.parse(window.localStorage.getItem("user")).token
            console.log("token in Api",token)
            headers.set("token",token)
            return headers
         }

    }
),
  endpoints: (builder) => ({
    getAllloantypes: builder.query({
      query: () => `/loanTypes`,
    }),
    getAllloans: builder.query({
      query: () => `/loans`,
    }),

    addLoan: builder.mutation({
        query:(loan)=>{
          return {
            url: `/loans`,
            method: 'POST',
            body:loan
          }
        },
        
      }),
    updateLoan: builder.mutation({
        query:(loan)=>{
          return {
            url: `/loans/${loan.id}`,
            method: 'PUT',
            body:loan
          }
        },
        
      }),
  }),

})

export const { useGetAllloantypesQuery,useAddLoanMutation,useGetAllloansQuery,useUpdateLoanMutation} =loanApi