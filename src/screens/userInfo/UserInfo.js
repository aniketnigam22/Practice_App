import React from 'react'
import { Button, View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import UserData, { fetchUser } from '../../redux/user/UserData';




const UserInfo = () => {

    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userId);
    console.log(userState)



    const getLoginInfo = async () => {
        try {
            const username = await AsyncStorage.getItem('userId');
            const token = await AsyncStorage.getItem('token');
            if (username !== null && token !== null) {
                console.log('Login information retrieved successfully.');
                console.log(username);
                console.log(token);
                return { username, token };
            } else {
                console.log('No login information found.');
                return null;
            }
        } catch (e) {
            console.error('Failed to retrieve the login information.', e);
            return null;
        }
    };
    
    return (
        <>
            <View>
                <Button onPress={getLoginInfo} title='Press to see user info' />
                <View style={{ margin: 50 }}>
                    <Button title='Get userId' onPress={() => dispatch(fetchUser())} />
                    {userState.data ? <Text style={{ color: 'black' }}>{JSON.stringify(userState.data, null, 2)}</Text> : null}
                </View>
                {userState.isLoading ? (
                    <View>
                        <Text style={{ color: 'black' }}>Loading...</Text>
                    </View>
                ) : userState.isError ? (
                    <View>
                        <Text style={{ color: 'black' }}>Error loading user data</Text>
                    </View>
                ) : null}
            </View>
        </>
    )
}

export default UserInfo
