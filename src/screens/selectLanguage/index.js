import React from 'react'
import { Image, SafeAreaView, ScrollView, View, Text } from 'react-native'
import { mystyles } from '../../common/mystyle'
import LanguageDropdown from './component/LanguageDropdown'
import { AppImages } from '../../common/AppImages'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'
import { commonColor } from '../../common/color'
import RedButton from '../../components/RedButton'

const SelectLanguage = ({navigation}) => {
    const LanguageHeader = () => {
        return (
            <>
                <View style={[mystyles.flex_1, mystyles.flex_center]}>
                    <View style={{ marginTop: responsiveHeight(40) }}>
                        <Image source={AppImages.app_logo} style={{ height: responsiveHeight(120), width: responsiveWidth(120) }} />
                    </View>
                    <View style={{ marginVertical: responsiveHeight(20) }}>
                        <Text style={mystyles.font_22}>{"Let's get started"}</Text>
                        <Text style={mystyles.font_12}>{"Please select your language"}</Text>
                    </View>
                </View>
            </>
        )
    }
    return (
        <>
            <SafeAreaView style={[mystyles.app_background]}>
                <ScrollView style={{ marginHorizontal: 16 }}>
                    <View style={mystyles.flex_1}>
                        <LanguageHeader />
                        <LanguageDropdown />
                        <View style={{marginTop:'90%'}}>
                            <RedButton buttonText={'Continue'} buttonIconValue={AppImages.right_arrow} handleButtonClick={() => {
                        navigation.navigate('Notification')
                    }} />
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SelectLanguage
