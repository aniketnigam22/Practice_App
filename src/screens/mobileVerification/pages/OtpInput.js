import React, { useRef } from 'react'
import { SafeAreaView, ScrollView, View, TextInput, TouchableHighlight, Text, StyleSheet, Alert } from 'react-native'
import { mystyles } from '../../../common/mystyle'
import ScreenHeader from '../../../components/screenHeader'
import HeaderText from '../../../components/headerText'
import RedButton from '../../../components/RedButton'
import { useState } from 'react'
import { responsiveHeight } from '../../../common/metrices'
import { commonColor } from '../../../common/color'
import { AppImages } from '../../../common/AppImages'
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'


const OtpInput = () => {
  const [text, setText] = useState('');
  const [otpInput, setOtpInput] = useState('');
  const input = useRef(null);

  const handleOtpChange = (otp) => {
    setOtpInput(otp)
    console.log(otpInput)
  };
  
  const navigation = useNavigation()

  const URL = 'http://192.168.29.244:5000/api/auth/verifyOtp'

  const handleButtonClick = async () => {
    if(otpInput.length < 4 ) {
      Alert.alert('Invalid OTP')
      return
    }
    try {
      const id = await AsyncStorage.getItem('userId');
      const request = {
        "user_id": id,
        "otp": otpInput.toString()
      }
      console.log(String(otpInput))

      console.log(`Request in otp verification ${JSON.stringify(request)}`)

      const response = await axios.post(URL, request);

      console.log(`Response of OTP : ${JSON.stringify(response.data)}`)

      if (response.data.status == 1) {
        console.log('Otp verified')
        navigation.navigate('SelectLanguage')
      }
      else {
        console.log('OTP did not match')
        Alert.alert('Otp did not match')
      }

    } catch (error) {
      console.log(`Error while sending otp ${error}`)
      
    }
  }


  return (
    <SafeAreaView style={mystyles.app_background}>
      <ScreenHeader />
      <ScrollView>
        <View style={{ margin: 20 }}>
          <HeaderText HeadingText={'Verification'} SubHeadingText={'We texted you a code to verify \nyour phone number'} />
        </View>
        <OTPTextView
          ref={input}
          textInputStyle={styles.textInputStyle}
          handleTextChange={handleOtpChange}
          inputCount={4}
          keyboardType="numeric"
          tintColor={'red'}
          containerStyle={mystyles.mh_16}
        />
        <View style={[mystyles.mh_16, { justifyContent: 'center', alignItems: 'center', marginTop: "6%" }]}>
          <Text style={{ color: '#AAB1BB' }}>I did not receive a code?</Text>
          <Text style={{ color: '#CE1126' }}>Resend</Text>
        </View>
        <View style={[{ marginTop: '10%' }, mystyles.mh_16]}>
          <RedButton buttonText={'Continue'} buttonIconValue={AppImages.right_arrow} handleButtonClick={handleButtonClick} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  textInputStyle: {
    width: 56,
    height: responsiveHeight(56),
    backgroundColor: commonColor.white,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    elevation: 2,
    marginTop: responsiveHeight(20),
    color: 'black'

  },
})

export default OtpInput
