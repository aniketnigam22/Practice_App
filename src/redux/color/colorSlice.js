import { createSlice } from '@reduxjs/toolkit'


const initialState = {
   value:'mediumaquamarine',
   borderLine:1
}

export const colorSlice = createSlice({
   name:'color',
   initialState,
   reducers: {
     red: (state) => {
        state.value = 'lightcoral',
        state.borderLine=2
     },
     blue: (state) => {
        state.value = 'dodgerblue',
        state.borderLine=4
     }
   }
}) 

export const {red, blue} = colorSlice.actions
export default colorSlice.reducer
