import React, { useEffect } from 'react'
import { Image, ImageBackground, SafeAreaView, View } from 'react-native'
import { mystyles } from '../../common/mystyle'
import { AppImages } from '../../common/AppImages'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { fetchUser } from '../../redux/user/UserData'




const Splash = ({ navigation }) => {

    const dispatch = useDispatch();

    const handleSplach = async () => {
        const userLoggedInValue = await AsyncStorage.getItem('userLoggedIn');
        console.log('login value in splah', userLoggedInValue);
        if (userLoggedInValue == '1') {
            navigation.navigate('HomeScreen');
        } else {
            navigation.navigate('Login')
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(fetchUser())
            handleSplach()
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <SafeAreaView style={mystyles.app_background}>
            <View style={mystyles.flex_1}>
                <View style={[mystyles.flex_1, mystyles.flex_center, { justifyContent: 'flex-end' }]}>
                    <Image source={AppImages.app_logo}></Image>
                </View>
                <View style={mystyles.flex_1}>
                    <ImageBackground source={AppImages.mosque} style={{ height: '100%' }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Splash
