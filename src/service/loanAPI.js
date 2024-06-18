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

     getLoanbyMobile: builder.query({
      query: (mobile) => `/loans?customerMobile=${mobile}`,
    }),

    addLoan: builder.mutation({
        query:(loan)=>{
          return{
            url: `/loans`,
            method: 'POST',
            body:loan
          }
        },
        
      }),
    addUser: builder.mutation({
        query:(user)=>{
          return {
            url: `/users`,
            method: 'POST',
            body:user
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

export const { 
  useGetAllloantypesQuery,
  useAddLoanMutation,
  useGetAllloansQuery,
  useUpdateLoanMutation,
  useLazyGetAllloansQuery,
  useAddUserMutation,
  useGetLoanbyMobileQuery,
} =loanApi