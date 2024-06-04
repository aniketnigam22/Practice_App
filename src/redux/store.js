import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import colorReducer from './color/colorSlice'
import userReducer from './data/dataSlice'
import userInfoReducer from './user/UserData'
import drawerReducer from './drawer/ToggleDrawer'


export const store = configureStore({
  reducer: {
    counter:counterReducer,
    color:colorReducer,
    user:userReducer,
    userId:userInfoReducer,
    drawer:drawerReducer
  },
})