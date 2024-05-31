import React from 'react'
import { Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { mystyles } from '../../common/mystyle'
import ScreenHeader from '../../components/screenHeader'
import { AppImages } from '../../common/AppImages'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'


const QrCodeBooking = ({navigation}) => {
    return (
        <SafeAreaView style={mystyles.app_background}>
            <ScreenHeader screenHeadingValue={'My booking'} />
            <View style={[mystyles.flex_center]}>
                <View style={[mystyles.flex_center, {marginTop:'8%'}]}>
                    <Text style={{ color: '#343434', fontWeight: '900', fontSize: 18 }}>Ahmad Masjid</Text>
                    <Text style={{ color: '#343434', fontSize: 16 }}>for Juma’a Salah</Text>
                </View>

                <View style={[[mystyles.flex_center, {marginTop:'8%'}]]}>
                    <Text style={{ color: '#343434', fontSize: 16 }}>Dec 12, 2020 at 11:30 AM</Text>
                </View>

                <View style={{ height: 205, width: 205, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center' ,marginTop:'8%' }}>
                    <Image source={AppImages.qrCode} style={{ height: 169, width: 170 }} />
                </View>

                <View style={[mystyles.flex_center,{marginTop:'2%'}]}>
                    <Text style={{ color: '#343434', fontSize: 14 }}>Scan this QR to enter Mosque</Text>
                </View>

                <TouchableOpacity style={{marginTop:'20%'}}  
                 onPress={() => {
                    navigation.navigate('BookingConfirm')
                 }}
                
                >
                    <View style={{ flexDirection: 'row', alignItems: "center", }}>
                        <Text style={{ color: '#1BB507', fontSize: 16, marginRight: 5 }}>Get Direction</Text>
                        <Image source={AppImages.rightArrow} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    height: responsiveHeight(38),
                    width: responsiveWidth(142),
                    borderWidth: 1,
                    borderColor: 'red',
                    borderRadius: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '25%'
                }}

               
                    >
                    <Text style={{ color: 'red' }}>Cancel Booking</Text>
                </TouchableOpacity>


            </View>
        </SafeAreaView>
    )
}

export default QrCodeBooking
