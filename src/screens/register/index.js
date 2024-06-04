import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, TouchableHighlight, Image, TextInput, Text, ScrollView, Alert, } from 'react-native'
import { mystyles } from '../../common/mystyle'
import ScreenHeader from '../../components/screenHeader'
import HeaderText from '../../components/headerText'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import { commonColor } from '../../common/color'
import { AppImages } from '../../common/AppImages'
import RedButton from '../../components/RedButton'
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUser } from '../../redux/user/UserData'
import Toast from 'react-native-toast-message'
import { useDispatch } from 'react-redux'

const Register = ({ navigation }) => {

  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');


  const dispatch = useDispatch()
  const submit = async () => {
    if (text == '' && text2 == '' && text3 == '' && text4 == '') {
      Alert.alert("All  Field's Required*");
      return
    }
    if (text3.length > 10) {
      Alert.alert("Invalid Number");
      return
    }
    if (text4 != text5) {
      Alert.alert("Confirm Password Not Match ");
      return
    }

    const user = {
      name: text,
      crNo: text2,
      mobileNo: text3,
      password: text4,
      confirmPassword: text5
    }


    const showToast = (type, text1, text2) => {
      Toast.show({
        type: type,
        text1: text1,
        text2: text2,
      });
    };

    try {
      const response = await axios.post('http://192.168.29.244:5000/api/auth/register', user)
      console.log(response)
      if (response.status === 201) {
        AsyncStorage.setItem('userId', response.data.user.id)
        AsyncStorage.setItem('token', response.data.token)
        AsyncStorage.setItem('userLoggedIn', '1')
        dispatch(fetchUser())
        showToast('success', 'Success', 'Registerd Successful');
        navigation.navigate('MobileInput')
      }
      else {
        showToast('error', 'Failed', 'Registerd Failed');
      }
    }
    catch (error) {
      console.error('error during register:  ', error)
      showToast('error', 'Failed', 'Something went wrong');
    }
  }
  return (
    <SafeAreaView style={mystyles.app_background}>
      <ScreenHeader />
      <ScrollView>
        <View style={{ margin: 20 }}>
          <HeaderText HeadingText={'Register'} SubHeadingText={'Enter your login details to create \nyour account'} />
        </View>
        <TouchableHighlight style={[mystyles.mh_16, { marginTop: '15%', }]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.mobileIcon, { borderTopLeftRadius: 12 }]}>
              <Image source={AppImages.human} style={{ height: responsiveHeight(18), width: responsiveWidth(12), }} />
            </View>
            <TextInput
              placeholder="Enter you name"
              placeholderTextColor={'#AAB1BB'}
              value={text}
              onChangeText={setText}
              style={[styles.textInputStyle, { borderTopRightRadius: 12 }]}

            />
          </View>
        </TouchableHighlight>

        
        <TouchableHighlight style={[mystyles.mh_16]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.mobileIcon,]}>
              <Image source={AppImages.mobile} style={{ height: responsiveHeight(18), width: responsiveWidth(12) }} />
            </View>
            <TextInput
              placeholder="CPR Number"
              placeholderTextColor={'#AAB1BB'}
              value={text2}
              onChangeText={setText2}
              style={[styles.textInputStyle,]}
              keyboardType='numeric'
            />
          </View>
        </TouchableHighlight>


        <TouchableHighlight style={[mystyles.mh_16]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.mobileIcon,]}>
              <Image source={AppImages.mobile} style={{ height: responsiveHeight(18), width: responsiveWidth(12) }} />
            </View>
            <TextInput
              placeholder="Enter mobile number"
              placeholderTextColor={'#AAB1BB'}
              value={text3}
              onChangeText={setText3}
              style={[styles.textInputStyle,]}
              maxLength={10}
              keyboardType='numeric'
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={[mystyles.mh_16,]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.mobileIcon,]}>
              <Image source={AppImages.lock} style={{ height: responsiveHeight(18), width: responsiveWidth(12), }} />
            </View>
            <TextInput
              placeholder="Enter Password"
              placeholderTextColor={'#AAB1BB'}
              value={text4}
              onChangeText={setText4}
              style={[styles.textInputStyle,]}
              secureTextEntry={true}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={[mystyles.mh_16]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.mobileIcon, { borderBottomLeftRadius: 12 }]}>
              <Image source={AppImages.lock} style={{ height: responsiveHeight(18), width: responsiveWidth(12) }} />
            </View>
            <TextInput
              placeholder="Re-enter Password"
              placeholderTextColor={'#AAB1BB'}
              value={text5}
              onChangeText={setText5}
              style={[styles.textInputStyle, { borderBottomRightRadius: 12 }]}
              secureTextEntry={true}
            />
          </View>
        </TouchableHighlight>

        <View style={[mystyles.mh_16, { marginTop: "15%" }]}>
          <RedButton buttonText={'CONTINUE'} buttonIconValue={AppImages.right_arrow} handleButtonClick={submit} />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
          <Text style={{ color: '#AAB1BB', fontSize: 16, fontWeight: '800' }}>Have an account?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{ color: '#CE1126', fontSize: 16, fontWeight: '800' }}>Login</Text></TouchableOpacity>
        </View>

        <TouchableOpacity>
          <View style={{ flexDirection: 'row', marginTop: 15, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ color: '#AAB1BB', fontSize: 16, fontWeight: '800' }}>Continue with google </Text>
            <View style={{ height: 20, width: 20 }}><Image source={AppImages.google} style={{ height: 20, width: 20 }} resizeMode='contain' /></View>
          </View>
        </TouchableOpacity>
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

  }
})

export default Register
