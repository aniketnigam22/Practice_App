import { StyleSheet } from "react-native";
import { commonColor } from "./color";
import { responsiveFontSize, responsiveWidth } from "./metrices";

export const mystyles = StyleSheet.create({
    app_background:{
        flex:1,
        backgroundColor:commonColor.background_color,
    },
    flex_1:{
        flex:1
    },
    flex_center: {
        justifyContent:'center',
        alignItems:'center'
    },
    mh_16:{
        marginHorizontal:responsiveWidth(16)
    },
    font_22:{
        fontSize: responsiveFontSize(22),
        color:commonColor.font22_color,
        fontWeight:'500'
    },
    
    font_12:{
        fontSize: responsiveFontSize(12),
        color:commonColor.placeholder_color,
        fontWeight:'500'
    },
    headerStyle:{
        fontSize:responsiveFontSize(22),
        color:commonColor.header_color,
        fontWeight:'500'
    },    
})