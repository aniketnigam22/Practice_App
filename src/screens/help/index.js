import React from 'react'
import { Image, SafeAreaView, View } from 'react-native'
import { mystyles } from '../../common/mystyle'
import ScreenHeader from '../../components/screenHeader'
import { AppImages } from '../../common/AppImages'

const  Help = ({navigation}) => {
  return (
    <SafeAreaView style={mystyles.app_background}>
     <ScreenHeader screenHeadingValue={'Help'} backNavigate={() => navigation.goBack()}/>
     <View style={{flex:1}}>
        <Image source={AppImages.helpImage} style={{width:'100%', height:'100%', resizeMode:'stretch', flex:1}}/>
     </View>
    </SafeAreaView>
  )
}

export default  Help
