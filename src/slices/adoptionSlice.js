import { createSlice } from "@reduxjs/toolkit";

const adoptionSlice = createSlice({

    name : 'adoption',
    initialState : {
        adoptionStatus : {adoptionId : 0, status : ""}
    },

    reducers: {
        statusChange: (state)=>{
            state.status = true
        }

        
    }
})


export const {logOut,login } =  userSlice.actions
export default adoptionSlice.reducer