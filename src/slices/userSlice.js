import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name : 'user',
    initialState : {
        status : false
    },

    reducers: {
        login: (state)=>{
            state.status = true
        },

        logOut :(state)=>{
            state.status = false
        } 
    }
})


export const {logOut,login } =  userSlice.actions
export default userSlice.reducer