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
import axios from 'axios'
import Toast from 'react-native-toast-message'
import AsyncStorage from '@react-native-async-storage/async-storage'





const Profile = ({ navigation }) => {
    const redux_data = useSelector((state) => state.userId?.data?.user);
    const PROFILE_BASE_URL = 'http://192.168.29.244:5000/uploads/'

    {/* ?. is used to prevent from undefined error, */ }
    const [profilePic, setProfilePic] = useState(redux_data?.profileImage == '-' ? '-' : PROFILE_BASE_URL + redux_data?.profileImage)
    const [base64src, setBase64Src] = useState('')

    const selectProfile = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            includeBase64: true
        }).then(image => {
            console.log(image);
            setProfilePic(image.path)
            setBase64Src(`data:${image?.mime};base64,${image.data}`);
        });
    }

    const [area, setArea] = useState(redux_data?.address?.area)
    const [block, setBlock] = useState(redux_data?.address?.block)
    const [road, setRoad] = useState(redux_data?.address?.road)
    const [building, setBuilding] = useState(redux_data?.address?.building)

    console.log(redux_data)
    console.log(area);

    const showToast = (type, text1, text2) => {
        Toast.show({
            type: type,
            text1: text1,
            text2: text2,
        });
    };


   
    const handleRegister = async () => {
        const user = {
            user_id: redux_data?._id,
            name: redux_data?.name,
            address: {
                area: area,
                block: block,
                road: road,
                building: building
            },
            profileImage: [{
                img_name: redux_data?._id + '.png',
                img_src: base64src
            }]
        }

        console.log(user);
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await axios.post('http://192.168.29.244:5000/api/auth/update-profile', user, { headers: { Authorization: `Bearer ${token}` } })
            console.log(response.data)
            if (response.data.status == 1) {
                showToast('success', 'Success', 'Detail Saved');
                navigation.replace('HomeScreen')
            }
            else {
                showToast('error', 'Failed', 'Something Went Wrong');
            }
        } catch (error) {
            console.error(error)
            showToast('error', 'Failed', 'Something Went Wrong');
        }

    }

    const [text, setText] = useState('')

    return (
        <SafeAreaView style={mystyles.app_background}>
            <ScreenHeader backNavigate={() => navigation.goBack()} />
            <View style={{ margin: 25 }}>
                <HeaderText HeadingText={'Profile'} />
            </View>
            <View style={[mystyles.mh_16, { height: 100, flexDirection: 'row', backgroundColor: commonColor.white, borderTopLeftRadius: 15, borderTopRightRadius: 15 }]}>
                <TouchableOpacity onPress={selectProfile} style={{ width: '30%', justifyContent: 'center', alignItems: 'center', }}>
                    {profilePic == '-' ?
                        <Image source={AppImages.profileImage} style={{ height: 60, width: 60, borderRadius: 60, borderWidth: 1, borderColor: "grey" }} />
                        :
                        <Image source={{ uri: profilePic }} style={{ height: 60, width: 60, borderRadius: 60, borderWidth: 1, borderColor: "#333" }} />
                    }
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: 'black' }}>{redux_data?.name}</Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', color: '#AAB1BB' }}>{redux_data?.crNo}</Text>
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
                        disable={true}
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
                        value={area}
                        onChangeText={setArea}
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
                        value={block}
                        onChangeText={setBlock}

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
                        value={road}
                        onChangeText={setRoad}

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
                        value={building}
                        onChangeText={setBuilding}

                    />
                </View>
            </TouchableHighlight>
            <TouchableOpacity style={[styles.buttonStyle]} onPress={handleRegister} >
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
