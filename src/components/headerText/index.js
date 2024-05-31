import React from 'react'
import { View, Text } from 'react-native'
import { mystyles } from '../../common/mystyle'
import { responsiveFontSize } from '../../common/metrices'



function HeaderText(props) {
    return (
        <View>
            <Text style={mystyles.headerStyle}>{props.HeadingText}</Text>
            <Text style={{ color: '#AAB1BB', fontSize: responsiveFontSize(14), fontWeight: "400", marginTop:12 }}>{props.SubHeadingText}</Text>
        </View>
    )
}

export default HeaderText
