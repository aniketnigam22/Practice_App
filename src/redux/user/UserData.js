import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const fetchUser = createAsyncThunk("fetchUser", async () => {
    try {
        const id = await AsyncStorage.getItem('userId');
        const token = await AsyncStorage.getItem('token');
        const user = {
            user_id: id
           
        }
        console.log(`userid: ${user.user_id}`)
        const response = await axios.post("http://192.168.29.244:5000/api/auth/get-profile", user,   { headers: { Authorization: `Bearer ${token}` } });
        console.log(`Response in userInfo reducer: ${response}`)
        return response.data;
    } catch (error) {
        console.log('inside catch')
        console.log(error)
    }
});


const userDataSlice = createSlice({
    name: "userId",
    initialState: {
        isLoading: false,
        data: null,
        isError: false,
    },
    extraReducers: (builder) => {
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
    },
});
export default userDataSlice.reducer;