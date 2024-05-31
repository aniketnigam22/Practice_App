import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useSelector, useDispatch, } from 'react-redux'
import { increment, decrement, onchangeVal, incrementByAmount, clearValue } from '../../redux/counter/counterSlice'
import { red, blue } from '../../redux/color/colorSlice'

const Box = ({ }) => {
    const count = useSelector((state) => state.counter.value)
    const value = useSelector((state) => state.counter.input_val)
    const colorValue = useSelector((state) => state.color.value)
    const borderValue = useSelector((state) => state.color.borderLine)


    const dispatch = useDispatch()

    const hangleChangeText = (e) => {
        dispatch(onchangeVal(e))
    }
    
    return (
        <>
            <View>
                <Text style={{
                    color: colorValue,
                    fontSize: 50
                }}
                >
                    {count}
                </Text>
                <TextInput
                    style={{
                        height: 60,
                        width: 200,
                        borderColor: 'black',
                        backgroundColor: colorValue,
                        borderRadius: 20,
                        paddingHorizontal: 20,
                        color: 'black',
                        borderWidth: borderValue
                    }}
                    placeholderTextColor={'black'}
                    value={value}
                    onChangeText={hangleChangeText}>
                </TextInput>
            </View>
        </>
    )
}

const Redux = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.input_val)
    const addValue = (e) => {
        dispatch(onchangeVal(e))
    }


    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 2, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                    <Box />
                </View>

                <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row',  paddingHorizontal:40 , justifyContent:"space-between"}}>
                        <TouchableOpacity style={{
                            width: 100,
                            height: 50,
                            backgroundColor: 'darksalmon',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                            onPress={() => {
                                dispatch(increment())
                            }}
                        >
                            <Text style={{ color: 'black' }}>Add</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            width: 100,
                            height: 50,
                            backgroundColor: 'darksalmon',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                            marginLeft:20
                        }}
                            onPress={() => {
                                dispatch(decrement())
                            }}
                        >
                            <Text style={{ color: 'black' }}>Substract</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: 'row', justifyContent:'space-around', paddingHorizontal:40 }}>
                        <TouchableOpacity style={{
                            width: 100,
                            height: 50,
                            backgroundColor: 'darksalmon',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10
                        }}
                            onPress={() => {
                                dispatch(incrementByAmount(count))
                            }}
                        >
                            <Text style={{ color: 'black' }}>Add input value</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={{
                            width: 100,
                            height: 50,
                            backgroundColor: 'darksalmon',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10, 
                            marginLeft:20
                        }}
                            onPress={() => {
                                dispatch(clearValue())
                            }}
                        >
                            <Text style={{ color: 'black' }}>Clear</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flexDirection:'row', paddingHorizontal:40}}>
                    <TouchableOpacity style={{
                        width: 100,
                        height: 50,
                        backgroundColor: 'darksalmon',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10
                    }}
                        onPress={() => {
                            dispatch(red())
                        }}
                    >
                        <Text style={{ color: 'black' }}>red</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{
                        width: 100,
                        height: 50,
                        backgroundColor: 'darksalmon',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginLeft:20
                    }}
                        onPress={() => {
                            dispatch(blue())
                        }}
                    >
                        <Text style={{ color: 'black' }}>blue</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Redux
