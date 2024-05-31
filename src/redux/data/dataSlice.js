import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    userId: null,
    isLoggedIn: false,
   
}

export const dataSlice = createSlice({
   name:'user',
   initialState,
   reducers: {
    login: (state, action) => {
        state.userId = action.payload;
        state.isLoggedIn = true;
        console.error(`userId ---${action.payload}`)
      }
   }
}) 

export const {login} = dataSlice.actions
export default dataSlice.reducer
