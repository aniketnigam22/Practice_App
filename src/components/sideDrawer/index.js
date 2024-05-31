/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
// import type {Node} from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MenuDrawer from 'react-native-side-drawer'
import ScreenHeader from '../screenHeader';
import { AppImages } from '../../common/AppImages';
import { responsiveHeight, responsiveWidth } from '../../common/metrices';
import { Divider } from 'react-native-paper';

export const Drawer = (props) => {
    const overlay = false
    const position = 'left'
  
    const drawerContent = () => {
        const edges = position == 'right' ? ['bottom', 'top', 'right'] : ['bottom', 'top', 'left']
        const baseStyle = { flex: 1, borderStyle: 'solid', borderWidth: 2, borderColor: 'black' }



        return (
            <SafeAreaView edges={edges} style={baseStyle}>
                {/* <View style={{ flexDirection: 'column', backgroundColor: 'orange', flex: 1, padding: 20 }}>
                    <Text>Overlay={overlay.toString()}</Text>
                    <Text style={styles.text}>Position={position}</Text>
                    <TouchableOpacity onPress={props.toggleDrawer}>
                        <Text style={styles.textLink}>I will disappear if you click here</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>When using overlay you will need to account for SafeAreView and it needs unique styling</Text>
                </View> */}

                <View style={{ flex: 1, backgroundColor: '#F3F5F9' }}>
                    <ScreenHeader backNavigate={props.toggleDrawer} />
                    <View style={{ flexDirection: 'row', margin: '5%', alignItems: 'center' }}>
                        <View style={{ borderColor: 'red', borderWidth: 1, height: 74, width: 74, borderRadius: 37, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={AppImages.profileImage} />
                        </View>
                        <View style={{ marginLeft: '5%' }}>
                            <Text style={{ color: '#343434', fontSize: 18, fontWeight: '600' }}>Tauseef Ahmed</Text>
                            <Text style={{ color: '#AAB1BB', fontSize: 12, fontWeight: '600', marginTop: 2 }}>CPR5874</Text>
                            <Text style={{ color: '#343434', fontSize: 14, fontWeight: '600', marginTop: 2 }}>+91 9876543210</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 4, backgroundColor: '#FFFFFF' }}>
                    <TouchableOpacity style={[styles.drawerOptionContainer]}>
                        <Image source={AppImages.human} style={styles.drawerOptionIcon} />
                        <Text style={styles.drawerOptionText}>My Profile</Text>
                    </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={[styles.drawerOptionContainer]}>
                        <Image source={AppImages.lightQrCode} style={styles.drawerOptionIcon} />
                        <Text style={styles.drawerOptionText}>My Booking</Text>
                    </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={[styles.drawerOptionContainer]}>
                        <Image source={AppImages.Language} style={styles.drawerOptionIcon} />
                        <Text style={styles.drawerOptionText}>Language</Text>
                    </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={[styles.drawerOptionContainer]}>
                        <Image source={AppImages.inviteOthers} style={styles.drawerOptionIcon} />
                        <Text style={styles.drawerOptionText}>Invite Others</Text>
                   </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={[styles.drawerOptionContainer]}>
                        <Image source={AppImages.writeToUs} style={styles.drawerOptionIcon} />
                        <Text style={styles.drawerOptionText}>Write to us</Text>
                    </TouchableOpacity>

                    <Divider />

                    <TouchableOpacity style={[styles.drawerOptionContainer]}>
                        <Image source={AppImages.logout} style={styles.drawerOptionIcon} />
                        <Text style={styles.drawerOptionText}>Logout</Text>
                    </TouchableOpacity>

                    <Divider />

                </View>
            </SafeAreaView>
        )
    }

    return (
        <MenuDrawer
            open={props.open}
            drawerContent={drawerContent()}
            position={position}
            drawerPercentage={80}
            animationTime={250}
            overlay={overlay}
          
        >
            {props.children}
        </MenuDrawer>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1, flexDirection: 'column', justifyItems: 'center', alignItems: 'center',
        backgroundColor: 'white', padding: 30
    },
    text: {
        paddingTop: 20
    },
    textLink: {
        paddingTop: 20,
        color: 'blue'
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
    drawerOptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 30
    },
    drawerOptionIcon: {
        height: responsiveHeight(22),
        width: responsiveWidth(20),
        marginHorizontal: 20,
        marginLeft: 30
    },
    drawerOptionText: {
        color: '#343434',
        fontSize: 18,
        fontWeight: '600',
        flex: 1
    }
});
