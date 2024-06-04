import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


//createAsyncThunk is used for async action , for ex api calling in redux
export const fetchUser = createAsyncThunk("fetchUser", async () => {
    try {
        const id = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
        const user = {
            user_id: id
        }
        console.log(`userid: ${user.user_id}`)
        const response = await axios.post("http://192.168.29.244:5000/api/auth/get-profile", user, { headers: { Authorization: `Bearer ${token}` } });
        console.log(`Response in userInfo reducer: ${response}`)
        return response.data;
    } catch (error) {
        console.log('inside catch')
        console.log(error)
    }
});

export const removeUser = createAsyncThunk('removeUser', async () => {
    try {
        await AsyncStorage.removeItem('userId');
        await AsyncStorage.removeItem('token');
        console.log('User data removed successfully in redux');
        return true;
    } catch (error) {
        console.error('Error in remove user redux: ', error);
    }
})


const userDataSlice = createSlice({
    name: "userId",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
        isRemoveSuccess: false,
    },
    //extraReducer is used for createAsyncThunk
    extraReducers: (builder) => {
        //this fetchUser is the one which is inside createAsyncThunk fun
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = true;
        });
        builder.addCase(removeUser.pending, (state) => {
            state.isLoading = true;
            state.isRemoveSuccess = false;
        })
        builder.addCase(removeUser.fulfilled, (state) => {
            state.isLoading = false;
            state.data = null;
            state.isError = false;
            state.isRemoveSuccess = true;
        })
        builder.addCase(removeUser.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
            state.isRemoveSuccess = false;
        });
    },
});
export default userDataSlice.reducer;












