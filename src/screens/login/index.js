import React, { useEffect, useState } from 'react'
import { SafeAreaView, TouchableHighlight, View, TextInput, StyleSheet, Image, Text, ScrollView, Alert, TouchableOpacity } from 'react-native'
import { mystyles } from '../../common/mystyle'
import ScreenHeader from '../../components/screenHeader'
import HeaderText from '../../components/headerText'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import { commonColor } from '../../common/color'
import { AppImages } from '../../common/AppImages'
import RedButton from '../../components/RedButton'
import Register from '../register'
import axios from 'axios'
import Toast from 'react-native-toast-message'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/data/dataSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUser } from '../../redux/user/UserData'

const Login = ({ navigation }) => {
    const [text, setText] = useState('7878787878');
    const [text2, setText2] = useState('7878787878');

    const dispatch = useDispatch()
    const filter = useSelector((state) => state.user.userId)

    const showToast = (type, text1, text2) => {
        Toast.show({
            type: type,
            text1: text1,
            text2: text2,
        });
    };

    const handleLogin = async () => {
        if (text == '' || text2 == '') {
            // Alert.alert('Fields cannot be empty');
            showToast('error', 'Failed', 'Fields cannot be empty');
            return;
        }
        if (text.length > 10) {
            // Alert.alert('Invalid number');
            showToast('error', 'Failed', 'Invalid Number');
            return;
        }
        const user = {
            mobileNo: text,
            password: text2
        }
        try {
            const response = await axios.post('http://192.168.29.244:5000/api/auth/login', user)

            console.log(`status: ${response.data.status}`)

            if (response.data.status == 1) {
                console.log('if block');
                {/* saving user id in redux */ }
                dispatch(login(response.data.user.id))

                {/* saving user information in async storage */ }
                AsyncStorage.setItem('userId', response.data.user.id)
                AsyncStorage.setItem('token', response.data.token)
                const userLoggedInValue = AsyncStorage.setItem('userLoggedIn', '1') 
                console.log('user logged value during logout', userLoggedInValue)
                dispatch(fetchUser())
                showToast('success', 'Success', 'Login Successful');
                navigation.navigate('HomeScreen')
            }
            else if (response.data.status == 0) {
                console.log('else  block');
                showToast('error', 'Failed', 'Invalid credentials');
            }
            else {
                console.log('else')
                showToast('error', 'Failed', 'Invalid credentials');
            }
        } catch (error) {
            console.log('catch block during login')
            console.log(error)
            // Alert.alert('Something went wrong')
            showToast('error', 'Failed', 'Something went wrong');

        }
    }

    return (
        <SafeAreaView style={mystyles.app_background}>
            <ScreenHeader />
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <HeaderText HeadingText={'Login'} SubHeadingText={'Enter your login details to access \nyour account'} />
                </View>

                <TouchableHighlight style={[mystyles.mh_16, { marginTop: '15%', }]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.mobileIcon, { borderTopLeftRadius: 12 }]}>
                            <Image source={AppImages.mobile} style={{ height: responsiveHeight(18), width: responsiveWidth(12), }} />
                        </View>
                        <TextInput
                            placeholder="Mobile Number"
                            placeholderTextColor={'#AAB1BB'}
                            value={text}
                            onChangeText={setText}
                            style={[styles.textInputStyle, { borderTopRightRadius: 12 }]}
                            keyboardType='numeric'
                        />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={[mystyles.mh_16]}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={[styles.mobileIcon, { borderBottomLeftRadius: 12 }]}>
                            <Image source={AppImages.lock} style={{ height: responsiveHeight(18), width: responsiveWidth(12) }} />
                        </View>
                        <TextInput
                            placeholder="Enter Password"
                            placeholderTextColor={'#AAB1BB'}
                            value={text2}
                            onChangeText={setText2}
                            style={[styles.textInputStyle, { borderBottomRightRadius: 12 }]}

                        // secureTextEntry={true}
                        />
                    </View>
                </TouchableHighlight>
                <View style={{ alignItems: 'flex-end', marginHorizontal: 16, marginTop: 10 }}>
                    <Text style={{ color: '#343434', fontSize: 14 }}>Forget Password?</Text>
                </View>

                <View style={[mystyles.mh_16, { marginTop: "5%" }]}>
                    <RedButton buttonText={'LOGIN'} buttonIconValue={AppImages.right_arrow} handleButtonClick={handleLogin} />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                    <Text style={{ color: '#AAB1BB', fontSize: 16, fontWeight: '800' }}>Don't have an account?  </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}><Text style={{ color: '#CE1126', fontSize: 16, fontWeight: '800' }}>Register</Text></TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: "80%",
        height: responsiveHeight(56),
        backgroundColor: commonColor.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        elevation: 2,
        color: 'black'
    },
    mobileIcon: {
        width: "20%",
        height: responsiveHeight(56),
        backgroundColor: commonColor.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        elevation: 2,
    }
})

export default Login
