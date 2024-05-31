import React from 'react'
import { SafeAreaView, TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices'
import { commonColor } from '../../common/color'
import { AppImages } from '../../common/AppImages'

function RedButton(props) {
    return (
        // <View>
            <TouchableOpacity style={[styles.buttonStyle]} onPress={props.handleButtonClick}>
                <View style={[styles.buttonInnerStyle]}>
                    <Text style={{ color: 'black', fontSize:responsiveFontSize(14), fontWeight:'500', color:'#FFFFFF'}}>{props.buttonText}</Text>
                </View>
                <View style={{justifyContent:'center', margin:5 , paddingHorizontal:14}}>
                    <Image source={props.buttonIconValue} />
                </View>
            </TouchableOpacity>
        // </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        height: responsiveHeight(47),
        flex:1,
        flexDirection:'row',
        backgroundColor: commonColor.redButton_color,
        justifyContent:'center',
        borderRadius:10
    },
    buttonInnerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default RedButton
