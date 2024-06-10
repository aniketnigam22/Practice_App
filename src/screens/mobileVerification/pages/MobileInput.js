import React, { useState } from 'react'
import { Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import { mystyles } from '../../../common/mystyle'
import HeaderText from '../../../components/headerText'
import ScreenHeader from '../../../components/screenHeader'
import LanguageDropdown from '../../selectLanguage/component/LanguageDropdown'
import { responsiveHeight, responsiveWidth } from '../../../common/metrices'
import { commonColor } from '../../../common/color'
import CountryCodeDropdown from '../component/CountryCodeDropdown'
import RedButton from '../../../components/RedButton'
import { AppImages } from '../../../common/AppImages'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'




function MobileInput({ navigation }) {

  const [text, setText] = useState('');

  const URL = 'http://192.168.29.244:5000/api/auth/sendToEmail'


  const handleMobileInput = async () => {
    if (text == '') {
      Alert.alert('Field cannot be empty');
      return;
    }
    const id = await AsyncStorage.getItem('userId');

    try {
      const user = {
        "user_id": id,
        "email": text
      }
      console.log( 'user data: ' , user);
      console.log('email url: ', URL)
      const response = await axios.post(URL, user)
      console.log('Email sending for otp response : ', response.data)
      navigation.navigate('OtpInput')
    } catch (error) {
      console.log(`Error while sending email: ${error}`);
    }

  }
  return (
    <SafeAreaView style={mystyles.app_background}>
      <ScreenHeader />
      <ScrollView>
        <View style={{ margin: 20 }}>
          <HeaderText HeadingText={'Verify '} SubHeadingText={'Enter your email to \nenable 2-step verification'} />
        </View>
        {

          /* <TouchableHighlight style={[mystyles.mh_16, { marginTop: '5%' }]}>
            <View style={{ flexDirection: 'row' }}>
              <CountryCodeDropdown />
              <TextInput
                placeholder="Mobile Number"
                placeholderTextColor={'#AAB1BB'}
                value={text}
                onChangeText={setText}
                style={styles.textInputStyle}
                keyboardType='numeric'
              />
            </View>
          </TouchableHighlight> */
        }


        <TouchableHighlight style={[mystyles.mh_16, { marginTop: '5%' }]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={
              [styles.mobileIcon,
              {
                borderTopLeftRadius: 12,
                backgroundColor: commonColor.white,
                height: 54,
                marginTop: 20,
                borderBottomLeftRadius: 12,
                width: '20%',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 2
              }]}>
              {/* <Image source={AppImages.lock} style={{ height: responsiveHeight(12), width: responsiveWidth(12), }} /> */}
              <Text>@</Text>
            </View>
            <TextInput
              placeholder="Enter email"
              placeholderTextColor={'#AAB1BB'}
              value={text}
              onChangeText={setText}
              style={[styles.textInputStyle, { borderTopRightRadius: 12 }]}
            />
          </View>
        </TouchableHighlight>



        <View style={[{ marginTop: '10%' }, mystyles.mh_16]}>
          <RedButton buttonText={'Continue'} buttonIconValue={AppImages.right_arrow} handleButtonClick={handleMobileInput} />
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
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    elevation: 2,
    marginTop: responsiveHeight(20),
    color: 'black'
  },
})

export default MobileInput
