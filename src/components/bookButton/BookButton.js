import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { responsiveHeight, responsiveWidth } from '../../common/metrices'


const BookButton = (props) => {
  return (
   <>
   <TouchableOpacity style={{
    height:responsiveHeight(22), 
    width:responsiveWidth(73), 
    borderWidth:1, 
    borderColor:props.borderCol,
    borderRadius:11,
    justifyContent:'center',
    alignItems:'center',
    marginTop:10
    }}
    onPress={props.handleBook}>
    <Text style={{color:props.buttonColor}}>{props.buttonValue}</Text>
   </TouchableOpacity>
   </>
  )
}

export default BookButton
