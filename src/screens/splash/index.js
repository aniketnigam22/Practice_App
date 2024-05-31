import React, { useEffect } from 'react'
import { Image, ImageBackground, SafeAreaView, View } from 'react-native'
import { mystyles } from '../../common/mystyle'
import { AppImages } from '../../common/AppImages'


const Splash = ({navigation}) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            
            navigation.navigate('SelectLanguage'); 
        }, 1000);  
        return () => clearTimeout(timer);
    }, []); 

    return (
        <SafeAreaView style={mystyles.app_background}>
            <View style={mystyles.flex_1}>
                <View style={[mystyles.flex_1, mystyles.flex_center, { justifyContent: 'flex-end' }]}>
                    <Image source={AppImages.app_logo}></Image>
                </View>
                <View style={mystyles.flex_1}>
                <ImageBackground source={AppImages.mosque} style={{height:'100%'}} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Splash
