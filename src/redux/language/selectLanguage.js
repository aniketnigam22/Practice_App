import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    languageValue: null
}
export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        SelectLanguage: (state, action) => {
            state.languageValue = action.payload
        }
    }
})

export const { SelectLanguage } = languageSlice.actions
export default languageSlice.reducer
