import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { mystyles } from '../../common/mystyle'
import ScreenHeader from '../../components/screenHeader'
import HeaderText from '../../components/headerText'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices'
import { commonColor } from '../../common/color'
import { AppImages } from '../../common/AppImages'
import RedButton from '../../components/RedButton'
import ImagePicker from 'react-native-image-crop-picker';
import { useSelector } from 'react-redux'
const Profile = ({ navigation }) => {
    const redux_data = useSelector((state) => state.userId?.data?.user);
    {/* ?. is used to prevent from undefined error, */}
    const [profilePic, setProfilePic] = useState(redux_data?.profileImage == '-'  ? '-' : redux_data?.profileImage)
    const selectProfile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setProfilePic(image.path)
        });
    }
    const [text, setText] = useState('')

    return (
        <SafeAreaView style={mystyles.app_background}>
            <ScreenHeader />
            <View style={{ margin: 25 }}>
                <HeaderText HeadingText={'Profile'} />
            </View>
            <View style={[mystyles.mh_16, { height: 100, flexDirection: 'row', backgroundColor: commonColor.white, borderTopLeftRadius: 15, borderTopRightRadius: 15 }]}>
                <TouchableOpacity onPress={selectProfile} style={{ width: '30%', justifyContent: 'center', alignItems: 'center', }}>
                    {profilePic == '-'   ?
                        <Image source={AppImages.profileImage} style={{ height: 60, width: 60, borderRadius: 60, borderWidth: 1, borderColor: "grey" }} />
                        :
                        <Image source={{ uri: profilePic }} style={{ height: 60, width: 60, borderRadius: 60, borderWidth: 1, borderColor: "#333" }} />
                    }
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'black' }}>Tauseef Ahmed</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#AAB1BB' }}>CPR5874</Text>
                </View>
            </View>
            <TouchableHighlight style={[mystyles.mh_16,]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.mobileIcon, { backgroundColor: '#F3F5F9' }]}>
                        <Image source={AppImages.address} style={{ height: responsiveHeight(18), width: responsiveWidth(12), }} />
                    </View>
                    <TextInput
                        placeholder="Address"
                        placeholderTextColor={'#AAB1BB'}
                        style={[styles.textInputStyle, { backgroundColor: '#F3F5F9' }]}

                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={[mystyles.mh_16,]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.mobileIcon,]}>
                        {/* <Image source={AppImages.lock} style={{ height: responsiveHeight(18), width: responsiveWidth(12), }} /> */}
                    </View>
                    <TextInput
                        placeholder="Area"
                        placeholderTextColor={'#AAB1BB'}
                        style={[styles.textInputStyle,]}
                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={[mystyles.mh_16,]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.mobileIcon,]}>
                        {/* <Image source={AppImages.lock} style={{ height: responsiveHeight(18), width: responsiveWidth(12), }} /> */}
                    </View>
                    <TextInput
                        placeholder="Block"
                        placeholderTextColor={'#AAB1BB'}
                        style={[styles.textInputStyle,]}

                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={[mystyles.mh_16,]}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={[styles.mobileIcon,]}>
                        {/* <Image source={AppImages.lock} style={{ height: responsiveHeight(18), width: responsiveWidth(12), }} /> */}
                    </View>
                    <TextInput
                        placeholder="Road"
                        placeholderTextColor={'#AAB1BB'}
                        style={[styles.textInputStyle,]}

                    />
                </View>
            </TouchableHighlight>
            <TouchableHighlight style={[mystyles.mh_16,]}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={[styles.mobileIcon, { borderBottomLeftRadius: 15 }]}>
                        {/* <Image source={AppImages.lock} style={{ height: responsiveHeight(18), width: responsiveWidth(12), }} /> */}
                    </View>
                    <TextInput
                        placeholder="Building"
                        placeholderTextColor={'#AAB1BB'}
                        style={[styles.textInputStyle, { borderBottomRightRadius: 15 }]}

                    />
                </View>
            </TouchableHighlight>
            <TouchableOpacity style={[styles.buttonStyle]} onPress={() => {
                navigation.navigate('HomeScreen')
            }} >
                <View style={[styles.buttonInnerStyle]}>
                    <Text style={{ color: 'black', fontSize: responsiveFontSize(14), fontWeight: '500', color: '#FFFFFF' }}>REGISTER</Text>
                </View>
                <View style={{ justifyContent: 'center', margin: 5, paddingHorizontal: 14, }}>
                    <Image source={AppImages.right_arrow} />
                </View>
            </TouchableOpacity>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    textInputStyle: {
        width: "80%",
        height: responsiveHeight(56),
        backgroundColor: commonColor.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        color: 'black'
    },
    mobileIcon: {
        width: "20%",
        height: responsiveHeight(56),
        backgroundColor: commonColor.white,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,

    },
    buttonStyle: {
        height: responsiveHeight(47),
        marginHorizontal: 16,
        flexDirection: 'row',
        backgroundColor: commonColor.redButton_color,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: '10%'
    },
    buttonInnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Profile
