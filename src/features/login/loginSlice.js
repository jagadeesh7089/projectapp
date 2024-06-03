import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isLoggedin:window.localStorage.getItem("user")?true:false,
    user:JSON.parse(window.localStorage.getItem("user")) 
}
export  const loginSlice=createSlice({
    name:"login",
    initialState,
    reducers:{
        updateloggedin:(state,action)=>{
            state.isLoggedin=action.payload.status;
            state.user=action.payload.user
        }
    }
})
export const {updateloggedin}=loginSlice.actions
export default loginSlice.reducer