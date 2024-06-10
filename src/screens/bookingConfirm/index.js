import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { mystyles } from '../../common/mystyle'
import ScreenHeader from '../../components/screenHeader'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices'
import { Divider } from 'react-native-paper'
import { AppImages } from '../../common/AppImages'
import { commonColor } from '../../common/color'

const BookingConfirm = ({navigation}) => {

    return (
        <SafeAreaView style={mystyles.app_background}>
            <ScreenHeader screenHeadingValue={'Booking confirmation'} />
            <View>
                <View style={mystyles.flex_center}>
                    <View style={[styles.bookingDetailContainer,{ marginTop: '15%' }]}>
                        <View style={{ padding: 18, flexDirection: 'row', }}>
                            <View>
                                <Text style={{ color: '#343434', fontSize: responsiveFontSize(19), fontWeight: '400' }}>Ahmad Masjid</Text>
                                <Text style={{ color: '#AAB1BB', fontSize: responsiveFontSize(13), fontWeight: '400', marginTop: '1%' }}>{'Awal Avenue Corner Al Fatih \nHighway, Bahrain'}</Text>
                                <Text style={{ color: '#626364', fontSize: responsiveFontSize(15), fontWeight: '400', marginTop: '3%' }}>1.3 Km away</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', width: responsiveWidth(110) }}>
                                <Text style={{ color: 'green', fontSize: responsiveFontSize(15), fontWeight: '400' }}>Get Details</Text>
                            </View>
                        </View>
                        <Divider />
                        <View style={{ flexDirection: 'row', justifyContent: "space-around" }}>
                            <Text style={{ color: '#343434', fontSize: responsiveFontSize(15), fontWeight: '900', marginTop: '1%' }}>Dec 12, 2020</Text>
                            <Text style={{ color: '#343434', fontSize: responsiveFontSize(15), fontWeight: '900', marginTop: '1%' }}>11:30 AM</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: '50%' }}>
                        <Image source={AppImages.mask} style={styles.ImageStyle} />
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: '10%' }}>

                        <View style={{ marginRight: '2%' }}>
                            <Image source={AppImages.checkbox} />
                        </View>
                        <Text style={{ color: "#AAB1BB" }}>{'I Confirm taking all precautions for social\n distancing and the published rules of Sunni\n Awqaf for Juma’a Salah'}</Text>
                    </View>

                    <TouchableOpacity style={[styles.buttonStyle, {marginTop:'10%'}]} onPress={() => {
                        navigation.navigate('MosqDetail')
                    }}>
                        <View style={[styles.buttonInnerStyle]}>
                            <Text style={{ color: '#FFFFFF', fontSize: responsiveFontSize(14), fontWeight: '700',}}>CONFIRM BOOKING</Text>
                        </View>
                        <View style={{ justifyContent: 'center', margin: 5, paddingHorizontal: 14 }}>
                            <Image source={AppImages.rightWhiteArrow} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    bookingDetailContainer: {
        height: responsiveHeight(154),
        width: responsiveWidth(300),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 8
    },
    ImageStyle: {
        height: responsiveHeight(107),
        width: responsiveWidth(173),
    },
    checkbox: {
        alignSelf: 'center',
    },
    buttonStyle: {
        height: responsiveHeight(50),
        width: responsiveWidth(300),
        flexDirection: 'row',
        backgroundColor: '#1BB507',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonInnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default BookingConfirm
