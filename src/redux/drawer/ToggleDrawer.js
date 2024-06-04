import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggleDrawer: false
}

export const drawerSlice = createSlice({
    name: 's',
    initialState,
    reducers: {
        open: (state, action) => {
            state.toggleDrawer = true;
        },
        close: (state, action) => {
            state.toggleDrawer = false;
        }
    }
}) 

export const {open, close} = drawerSlice.actions
export default drawerSlice.reducer
