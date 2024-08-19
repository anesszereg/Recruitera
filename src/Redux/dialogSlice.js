import { createSlice } from "@reduxjs/toolkit";



const dialogSlice = createSlice({
    name: "dialog",
    initialState: {
        open: false,
       
    },
    reducers: {
        setDialog: (state, action) => {
            state.open = action.payload.open
      
        }
    }
})

export const { setDialog } = dialogSlice.actions

export default dialogSlice.reducer
