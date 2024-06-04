import React from 'react'
import { AppRegistry, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ScreenHeader from '../../components/screenHeader'
import { mystyles } from '../../common/mystyle'
import { AppImages } from '../../common/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices'
import { commonColor } from '../../common/color'

const Notification = ({ navigation }) => {
  return (
    
    <SafeAreaView style={mystyles.app_background}>
      <View style={{ flex: 1, }}>
        <ScreenHeader />
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: '10%' }}>
          <View style={styles.imageStyleContainer}>
            <Image source={AppImages.notification} />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={[mystyles.flex_center,]}>
          <Text style={{ color: '#343434', fontSize: responsiveFontSize(30), fontWeight: '700' }}>Notification</Text>
          <Text style={{ color: '#AAB1BB', fontWeight: '400', fontSize: responsiveFontSize(15), marginTop: 10 }}>{'Stay notified about to Alert and remind '}</Text>
          <Text style={{ color: '#AAB1BB', fontWeight: '400', fontSize: responsiveFontSize(15), }}>{'he booking'}</Text>
          <View style={{ marginTop: '14%' }}>
            <TouchableOpacity style={[styles.buttonStyle]} onPress={() => {
              navigation.navigate('HomeScreen')
            }}>
              <View style={[styles.buttonInnerStyle]}>
                <Text style={{ color: 'black', fontSize: responsiveFontSize(18), fontWeight: '500', color: '#FFFFFF' }}>ALLOW</Text>
              </View>
              <View style={{ justifyContent: 'center', margin: 5, paddingHorizontal: 14 }}>
                <Image source={AppImages.right_arrow} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: '#F3F5F9', marginTop: 10 }]}>
              <View style={[styles.buttonInnerStyle]}>
                <Text style={{ color: 'black', fontSize: responsiveFontSize(18), fontWeight: '500', color: '#AAB1BB' }}>SKIP</Text>
              </View>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageStyleContainer: {
    height: responsiveHeight(176),
    borderRadius: responsiveHeight(176),
    backgroundColor: '#FFFFFF',
    width: responsiveHeight(176),
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    height: responsiveHeight(47),
    width: responsiveWidth(141),
    flexDirection: 'row',
    backgroundColor: commonColor.redButton_color,
    justifyContent: 'center',
    borderRadius: 10
  },
  buttonInnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Notification
