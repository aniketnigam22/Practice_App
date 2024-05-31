import React, { useEffect, useRef, useState } from 'react'
import { Image, Switch, Text, TouchableHighlight, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, } from 'react-native'
import { AppImages } from '../../../common/AppImages'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../common/metrices'
import { commonColor } from '../../../common/color'
import { mystyles } from '../../../common/mystyle'
import LinearGradient from 'react-native-linear-gradient';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'



const HomeHeader = ({ onChangeText, onPress }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [text5, setText5] = useState('');

  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('');
  }, []);
  return (
    <>

      <LinearGradient
        colors={['#FFFFFF', 'rgba(255, 255, 255, 0)']}
        style={mystyles.flex_1}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <View style={{ height: 150, backgroundColor: 'transparent' }}>
          <View style={{ flexDirection: "row", height: 60 }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: "center", marginLeft: responsiveWidth(12) }} onPress={onPress}>
              <Image source={AppImages.drawerIcon} style={{ height: 22, width: 28, resizeMode: "contain" }} />
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: "center", flexDirection: "row", alignItems: "center" }}>
              <TouchableHighlight style={{ backgroundColor: "#F3F3F3", borderRadius: 4, }}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", padding: responsiveWidth(3) }}>
                  <Text style={{ fontSize: responsiveFontSize(14), fontWeight: 400, color: "#343434", paddingHorizontal: responsiveWidth(6) }}>{"Near by"}</Text>
                  <Switch
                    trackColor={{ false: '#767577', true: '#1BB507' }}
                    thumbColor={isEnabled ? commonColor.white : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                  />
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={{ marginLeft: responsiveWidth(12) }}>
                <Image source={AppImages.bell} />
              </TouchableHighlight>
            </View>
          </View>
          <View style={{ height: 30, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 10, width: 10, backgroundColor: 'green', borderRadius: 5 }}></View>
            <Text style={{ marginLeft: responsiveWidth(10), fontWeight: '500', fontSize: 16, color: '#343434' }}>{'Next Juma’a on 12 Dec  at 11:30 AM'}</Text>
          </View>

          <View style={{ marginTop: responsiveHeight(5) }}>
            <TouchableHighlight style={[mystyles.mh_16]}>
              {/* <View style={{ flexDirection: 'row', elevation: 5 }}>
                <TextInput
                  placeholder="Search for Masjid"
                  placeholderTextColor={'#AAB1BB'}
                  value={text5}
                  onChangeText={onChangeText}
                  style={[styles.textInputStyle, { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 }]}
                />
                <View style={[styles.mobileIcon, { borderTopRightRadius: 8, borderBottomRightRadius: 8 },]}>
                  <Image source={AppImages.search} style={{ height: responsiveHeight(18), width: responsiveWidth(12), resizeMode: 'contain' }} />
                </View>
              </View> */}
              <ScrollView>
                <GooglePlacesAutocomplete
                  ref={ref}
                  placeholder='Search for Masjid'
                  listViewDisplayed={true}
                  fetchDetails={true}
                  onChangeText={onChangeText}

                  renderRightButton={() => (
                    <View style={{
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      height: responsiveHeight(43),
                      borderBottomRightRadius: 5,
                      borderTopRightRadius: 5,
                      width: 70

                    }}>
                      <Image
                        source={AppImages.search}
                        resizeMode='contain'
                      />
                    </View>
                  )}
                  onPress={(data, details = true) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                  }}
                  query={{
                    key: 'AIzaSyAbwv5P-iff_vVB7TpstiQ1RI1kvktza48',
                    language: 'en',
                  }}
                  textInputProps={{
                    placeholderTextColor: '#AAB1BB' // Change the placeholder text color here
                  }}
                  onFail={error => console.error(error)}
                  styles={{
                    textInput: {
                      color: '#343434', // Text color for the search box
                    },
                    description: {
                      color: '#343434', // Text color for the list items
                    },
                    predefinedPlacesDescription: {
                      color: '#AAB1BB', // Text color for predefined places description
                    },

                  }}
                />
              </ScrollView>
            </TouchableHighlight>
          </View>
        </View>
      </LinearGradient>
    </>
  )
}

const styles = StyleSheet.create({
  textInputStyle: {
    width: "80%",
    height: responsiveHeight(50),
    backgroundColor: commonColor.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    color: 'black'
  },
  mobileIcon: {
    width: "20%",
    height: responsiveHeight(50),
    backgroundColor: commonColor.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,

  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  }
})


export default HomeHeader
