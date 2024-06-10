import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { mystyles } from '../../common/mystyle'
import { AppImages } from '../../common/AppImages'
import ScreenHeader from '../../components/screenHeader'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices'
import LinearGradient from 'react-native-linear-gradient'
import { Divider } from 'react-native-paper'

const MosqDetail = () => {
    return (
        <SafeAreaView style={[mystyles.app_background, { flex: 1 }]}>
            <View style={[{ flex: 1 }]}>
                <LinearGradient
                    colors={['#595F83', '#2A315A']}
                    style={[{ flex: 1/2 }]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                >
                    <Image source={AppImages.leftWhiteArrow} style={[{ zIndex: 1000, margin: responsiveWidth(20) }]} />
                    <Image source={AppImages.mosq} style={[{ width: '100%', position: 'absolute' }]} />
                </LinearGradient>
                <View style={[mystyles.flex_center, { position: 'absolute', top: '38%', left: '10%' }]}>
                    <View style={[styles.bookingDetailContainer22, { marginTop: '15%', elevation: 3, }]}>
                        <View style={{ padding: 25, flexDirection: 'row', }}>
                            <View>
                                <Text style={{ color: '#343434', fontSize: responsiveFontSize(19), fontWeight: '800' }}>Ahmad Masjid</Text>
                                <Text style={{ color: '#AAB1BB', fontSize: responsiveFontSize(13), fontWeight: '400', marginTop: '1%' }}>{'Awal Avenue Corner Al Fatih \nHighway, Bahrain'}</Text>
                                <Text style={{ color: '#626364', fontSize: responsiveFontSize(15), fontWeight: '900', marginTop: '3%' }}>1.3 Km away</Text>
                            </View>
                            <View style={{ justifyContent: 'flex-end', alignItems: 'flex-end', width: responsiveWidth(110) }}>
                                <TouchableOpacity style={{
                                    height: responsiveHeight(22),
                                    width: responsiveWidth(73),
                                    borderWidth: 1,
                                    borderColor: 'green',
                                    borderRadius: 11,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    backgroundColor: 'green'
                                }}
                                >
                                    <Text style={{ color: 'white' }}>Book Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[{ flex: 3 }]}>
                <View style={{ marginTop: '14%' }}>
                    <View style={[{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between', marginHorizontal: 25 }]}>
                        <View style={[{}]}>
                            <Text style={[{ color: '#AAB1BB', fontSize: 16 }]}>Capacity</Text>
                            <Text style={[{ color: '#AAB1BB', fontSize: 16, marginTop: '5%' }]}>Booking Status</Text>
                        </View>
                        <View style={[{ alignItems: 'flex-end' }]}>
                            <Text style={[{ color: '#343434', fontSize: 16 }]}>150 Person</Text>
                            <Text style={[{ color: '#343434', fontSize: 16, marginTop: '5%' }]}>75% Booked</Text>
                        </View>
                    </View>
                    <Divider style={{ marginTop: '5%', marginHorizontal: 26 }} />
                    <View style={[{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between', marginHorizontal: 25 }]}>
                        <View style={[{}]}>
                            <Text style={[{ color: '#AAB1BB', fontSize: 16, }]}>Imam name</Text>
                            <Text style={[{ color: '#AAB1BB', fontSize: 16, marginTop: '5%' }]}>Moazzin name</Text>
                            <Text style={[{ color: '#AAB1BB', fontSize: 16, marginTop: '5%' }]}>Khadim name</Text>
                            <Text style={[{ color: '#AAB1BB', fontSize: 16, marginTop: '5%' }]}>President</Text>
                        </View>
                        <View style={[{ alignItems: 'flex-end' }]}>
                            <Text style={[{ color: '#343434', fontSize: 16 }]}>Mr. Ibrahim (Hafiz / Qari / Alim)</Text>
                            <Text style={[{ color: '#343434', fontSize: 16, marginTop: '5%' }]}>Mr. Ismall</Text>
                            <Text style={[{ color: '#343434', fontSize: 16, marginTop: '5%' }]}>Mr. Suleman</Text>
                            <Text style={[{ color: '#343434', fontSize: 16, marginTop: '5%' }]}>Mr. Suleman</Text>
                        </View>
                    </View>
                    <Divider style={{ marginTop: '5%', marginHorizontal: 26 }} />
                    <View style={[{ flexDirection: 'row', marginTop: '5%', justifyContent: 'space-between', marginHorizontal: 25 }]}>
                        <View style={[{}]}>
                            <Text style={[{ color: '#AAB1BB', fontSize: 16 }]}>Contact number</Text>
                            <Text style={[{ color: '#AAB1BB', fontSize: 16, marginTop: '5%' }]}>Emails</Text>
                        </View>
                        <View style={[{ alignItems: 'flex-end' }]}>
                            <Text style={[{ color: '#343434', fontSize: 16 }]}>365424565</Text>
                            <Text style={[{ color: '#343434', fontSize: 16, marginTop: '5%' }]}>abcde@gmail.com</Text>
                        </View>
                    </View>
                </View>
                <View style={mystyles.flex_center}>
                    <View style={[styles.bookingDetailContainer, { marginTop: '10%' }]}>
                        <View style={{ padding: '5%' }}>
                            <Text style={{ color: '#AAB1BB', fontSize: responsiveFontSize(20) }}>About the Mosque</Text>
                            <Text style={{ color: '#626364', fontSize: responsiveFontSize(16), marginTop: "2%" }}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "}<Text style={{ color: 'black', fontWeight: '900' }}> more...</Text></Text>
                        </View>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    bookingDetailContainer: {
        height: responsiveHeight(160),
        width: responsiveWidth(300),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 1
    },
    bookingDetailContainer22: {
        height: responsiveHeight(120),
        width: responsiveWidth(300),
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})
export default MosqDetail
