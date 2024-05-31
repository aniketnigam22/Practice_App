import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { AppImages } from '../../common/AppImages'
import { responsiveFontSize } from '../../common/metrices'

const ScreenHeader = (props) => {
  return (
    <View style={{ margin: 15 ,flexDirection: 'row', justifyContent:'space-between' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <TouchableOpacity onPress={props.backNavigate}><Image source={AppImages.left_arrow} /></TouchableOpacity>
        <Text style={{ color: 'black', fontSize: responsiveFontSize(20), fontWeight: '500', marginLeft: 15 }}>
          {props.screenHeadingValue}
        </Text>
      </View>
    </View>
  )
}

export default ScreenHeader
