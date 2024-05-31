import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { mystyles } from '../../common/mystyle'
import { AppImages } from '../../common/AppImages'

const BottomNav = (props) => {
    return (
        <>
            <View style={[{ backgroundColor: 'blue', height: 57, flexDirection: 'row' }]}>

                <View style={{ backgroundColor: '#F3F3F3', height: 57, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image source={AppImages.home} />
                    </TouchableOpacity>
                </View>


                <View style={{ backgroundColor: '#F3F3F3', height: 57, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={props.handlenavigateqr}>
                        <View style={{ backgroundColor: 'red', height: 52, width: 52, justifyContent: 'center', alignItems: 'center', borderRadius: 26 }}>
                            <Image source={AppImages.qr} />
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={{ backgroundColor: '#F3F3F3', height: 57, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={props.handlenavigatehelp}> 
                        <View style={{ borderColor: 'black', borderWidth: 1, height: 30, width: 30, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <Image source={AppImages.quesionMark} />
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </>
    )
}

export default BottomNav
