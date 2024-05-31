import React, { useState } from 'react'
import { Alert, SafeAreaView, ScrollView, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native'
import { mystyles } from '../../../common/mystyle'
import HeaderText from '../../../components/headerText'
import ScreenHeader from '../../../components/screenHeader'
import LanguageDropdown from '../../selectLanguage/component/LanguageDropdown'
import { responsiveHeight } from '../../../common/metrices'
import { commonColor } from '../../../common/color'
import CountryCodeDropdown from '../component/CountryCodeDropdown'
import RedButton from '../../../components/RedButton'
import { AppImages } from '../../../common/AppImages'


function MobileInput({ navigation }) {

  const [text, setText] = useState('');

  const handleMobileInput = () => {
    if(text == '' ) {
     Alert.alert('Moble field cannot be empty');
     return;
    }
    if(text.length  > 10){
      Alert.alert('Invali mobile number');
      return;
    }
    navigation.navigate('Notification')
  }
  return (
    <SafeAreaView style={mystyles.app_background}>
      <ScreenHeader />
      <ScrollView>
        <View style={{ margin: 20 }}>
          <HeaderText HeadingText={'Verify Number'} SubHeadingText={'Enter your Mobile number to \nenable 2-step verification'} />
        </View>
        <TouchableHighlight style={[mystyles.mh_16, { marginTop: '5%' }]}>
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
