import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isLoggedin:false
}
export  const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        updateloggedin:(state,action)=>{
            state.isLoggedin=action.payload
        }
    }
})
export const {updateloggedin}=loginSlice.actions
export default loginSlice.reducer