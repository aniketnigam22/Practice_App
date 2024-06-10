import React, { useCallback, useMemo, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native'
import { mystyles } from '../../common/mystyle'
import MapView, { Marker } from 'react-native-maps';
// import { Marker } from 'react-native-maps';
import BottomNav from '../../components/bottomNav';
import HomeHeader from './homeHeader/HomeHeader';
import BottomSheet, { TouchableOpacity } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button, Divider } from 'react-native-paper';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../common/metrices';
import BookButton from '../../components/bookButton/BookButton';
import { AppImages } from '../../common/AppImages';
import { commonColor } from '../../common/color';
import { Drawer } from '../../components/sideDrawer';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { open } from '../../redux/drawer/ToggleDrawer';



const HomeScreen = ({ navigation }) => {
    const [book, setBook] = useState(false);
    const [cancel, setCancel] = useState(false);
    const [multibook, setMultiBook] = useState(false);
    const [openDrawer, setDrawerOpen] = useState(false)

    const toggleDrawerValue = useSelector((state) => state.ToggleDrawer.toggleDrawer)
    const dispatch = useDispatch()



    console.log('open',openDrawer)


    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);
    return (
        <>
            <SafeAreaView style={mystyles.app_background}>
                <Drawer open={toggleDrawerValue} toggleDrawer={toggleDrawerValue}>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000 }}>
                        <HomeHeader onChangeText={(e) => {
                            bottomSheetRef.current.snapToIndex(1)
                            setBook(false)
                            setCancel(false)
                            setMultiBook(false)

                        }}
                            onPress={()=>dispatch(open())}
                        />
                    </View>
                    <View style={styles.MainContainer}>
                        <MapView
                            style={styles.mapStyle}
                            showsUserLocation={false}
                            zoomEnabled={true}
                            zoomControlEnabled={true}
                            initialRegion={{
                                latitude: 28.579660,
                                longitude: 77.321110,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}>

                            {/* <Marker
                            coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
                            title={"JavaTpoint"}
                            description={"Java Training Institute"}
                        /> */}
                        </MapView>
                    </View>
                    <View style={{ position: 'absolute', bottom: 0, right: 0, left: 0, zIndex: 1000 }}>
                        <BottomNav handlenavigatehelp={() => {
                            navigation.navigate('Help')
                        }}
                            handlenavigateqr={() => {
                                navigation.navigate('QrCodeBooking')
                            }}
                        />
                    </View>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <View style={styles.container}>

                            <BottomSheet
                                enablePanDownToClose={true}
                                ref={bottomSheetRef}
                                index={-1}
                                snapPoints={snapPoints}
                                onChange={handleSheetChanges}
                                enableOverDrag={false}
                                handleIndicatorStyle={{ display: "none" }}
                                handleComponent={null}
                            >

                                <View style={styles.contentContainer}>
                                    {
                                        book ?
                                            <View style={{ backgroundColor: '#C3ECBE', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                                <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-evenly' }}>
                                                    <View>
                                                        <Text style={{ color: 'black', fontSize: 14, marginTop: 5 }}>You have booked !</Text>
                                                        <Text style={{ color: '#1BB507', fontSize: 18 }}>Mohammad Masjid</Text>
                                                        <Text style={{ color: '#AAB1BB', fontSize: 14, marginTop: 5 }}>{"Awal Avenue Corner Al Fatih \nHighway, Bahrain"}</Text>
                                                        <Text style={{ color: 'black', fontSize: 14, marginTop: 5 }}>1.4 km</Text>
                                                    </View>

                                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                                                        <TouchableOpacity style={{
                                                            height: responsiveHeight(22),
                                                            width: responsiveWidth(100),
                                                            borderWidth: 1,
                                                            borderColor: 'red',
                                                            borderRadius: 11,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginTop: 10,
                                                            backgroundColor: 'red'
                                                        }}
                                                            onPress={() => {
                                                                setBook(false)
                                                                setCancel(true)
                                                            }}>
                                                            <Text style={{ color: 'white' }}>Cancel booking</Text>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={{
                                                            height: responsiveHeight(22),
                                                            width: responsiveWidth(100),
                                                            borderWidth: 1,
                                                            borderColor: 'green',
                                                            borderRadius: 11,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginTop: 10
                                                        }}>
                                                            <Text style={{ color: 'green' }}>Navigate now</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View> : null
                                    }
                                    {
                                        cancel ?
                                            <View style={{ backgroundColor: '#F9D9DC', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                                                <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-between', marginHorizontal: 25 }}>
                                                    <View>
                                                        <Text style={{ color: '#CE1126', fontSize: 17, marginTop: 5, fontWeight: '700' }}>Abdullah Masjid</Text>
                                                        <Text style={{ color: '#343434', fontSize: 14, marginTop: 5 }}>Booking cancelled by following reason :</Text>
                                                        <Text style={{ color: '#CE1126', fontSize: 14, marginTop: 1, fontWeight: '700' }}>{"- Corona Virus found there"}</Text>
                                                        <Text style={{ color: 'black', fontSize: 10, marginTop: 5 }}>Don’t worry you can still book from your near by Mosque</Text>
                                                    </View>

                                                    <View style={{ justifyContent: 'flex-start', alignItems: 'center' }}>

                                                        <TouchableOpacity style={{
                                                            height: responsiveHeight(20),
                                                            width: responsiveWidth(20),
                                                            borderWidth: 1,
                                                            borderColor: 'red',
                                                            borderRadius: 11,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            marginTop: 10,
                                                        }}
                                                            onPress={() => {
                                                                setBook(false)
                                                                setCancel(false)
                                                            }}>
                                                            <Text style={{ color: 'red' }}>X</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View> : null
                                    }

                                    {
                                        multibook === false ? (
                                            <>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', backgroundColor: '#F3F5F9', borderTopLeftRadius: 15, borderTopRightRadius: 15, height: responsiveHeight(33), alignItems: 'center' }}>
                                                    <Text style={{ color: '#AAB1BB', fontSize: 18 }}>Book your location</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={{ height: 10, width: 10, backgroundColor: 'green', borderRadius: 5 }}></View>
                                                        <Text style={{ marginLeft: responsiveWidth(10), fontWeight: '500', fontSize: 16, color: '#AAB1BB' }}>{'Vacant'}</Text>
                                                    </View>

                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        <View style={{ height: 10, width: 10, backgroundColor: 'red', borderRadius: 5 }}></View>
                                                        <Text style={{ marginLeft: responsiveWidth(10), fontWeight: '500', fontSize: 16, color: '#AAB1BB' }}>{'Booked'}</Text>
                                                    </View>

                                                </View>
                                                <View style={{ marginTop: 12, marginBottom: 10, }}>
                                                    <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-evenly' }}>
                                                        <View>
                                                            <Text style={{ color: 'black', fontSize: 18 }}>Mohammad Masjid</Text>
                                                            <Text style={{ color: '#AAB1BB', fontSize: 14, marginTop: 5 }}>{"Awal Avenue Corner Al Fatih \nHighway, Bahrain"}</Text>
                                                            <Text style={{ color: 'black', fontSize: 14, marginTop: 5 }}>1.4 km</Text>
                                                        </View>

                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <AnimatedCircularProgress
                                                                size={40}
                                                                width={3}
                                                                fill={70}
                                                                tintColor="#1BB507"
                                                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                                                backgroundColor="red" >
                                                                {
                                                                    (fill) => (
                                                                        <Text style={{ color: 'black', fontSize: 15 }}>
                                                                            {'75'}
                                                                        </Text>
                                                                    )
                                                                }
                                                            </AnimatedCircularProgress>
                                                            <BookButton borderCol={'green'} buttonValue={'Book Now'} buttonColor={'green'} handleBook={() => setBook(true)} />
                                                        </View>
                                                    </View>
                                                </View>
                                                <Divider />
                                                <View style={{ marginTop: 12, marginBottom: 10, }}>
                                                    <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-evenly' }}>
                                                        <View>
                                                            <Text style={{ color: '#AAB1BB', fontSize: 18 }}>Mohammad Masjid</Text>
                                                            <Text style={{ color: '#AAB1BB', fontSize: 14, marginTop: 5 }}>{"Awal Avenue Corner Al Fatih \nHighway, Bahrain"}</Text>
                                                            <Text style={{ color: '#AAB1BB', fontSize: 14, marginTop: 5 }}>2.5 km</Text>
                                                        </View>

                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <BookButton borderCol={'red'} buttonValue={'Booked'} buttonColor={'red'} />
                                                        </View>
                                                    </View>
                                                </View>
                                                <Divider />

                                                <View style={{ marginTop: 12, marginBottom: 10, }}>
                                                    <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-evenly' }}>
                                                        <View>
                                                            <Text style={{ color: 'black', fontSize: 18 }}>Mohammad Masjid</Text>
                                                            <Text style={{ color: '#AAB1BB', fontSize: 14, marginTop: 5 }}>{"Awal Avenue Corner Al Fatih \nHighway, Bahrain"}</Text>
                                                            <Text style={{ color: 'black', fontSize: 14, marginTop: 5 }}>2.9 km</Text>
                                                        </View>

                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <AnimatedCircularProgress
                                                                size={40}
                                                                width={5}
                                                                fill={100}
                                                                tintColor="#1BB507"
                                                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                                                backgroundColor="red" >
                                                                {
                                                                    (fill) => (
                                                                        <Text style={{ color: 'black', fontSize: 15 }}>
                                                                            {'100'}
                                                                        </Text>
                                                                    )
                                                                }
                                                            </AnimatedCircularProgress>
                                                            <BookButton borderCol={'green'} buttonValue={'Book Now'} buttonColor={'green'} />
                                                        </View>
                                                    </View>
                                                </View>
                                                <Divider />
                                                <View style={{ marginTop: 12, marginBottom: 10, }}>
                                                    <View style={{ flexDirection: 'row', margin: 5, justifyContent: 'space-evenly' }}>
                                                        <View>
                                                            <Text style={{ color: 'black', fontSize: 18 }}>Mohammad Masjid</Text>
                                                            <Text style={{ color: '#AAB1BB', fontSize: 14, marginTop: 5 }}>{"Awal Avenue Corner Al Fatih \nHighway, Bahrain"}</Text>
                                                            <Text style={{ color: 'black', fontSize: 14, marginTop: 5 }}>2.9 km</Text>
                                                        </View>

                                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                            <AnimatedCircularProgress
                                                                size={40}
                                                                width={5}
                                                                fill={50}
                                                                tintColor="#1BB507"
                                                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                                                backgroundColor="red" >
                                                                {
                                                                    (fill) => (
                                                                        <Text style={{ color: 'black', fontSize: 15 }}>
                                                                            {'50'}
                                                                        </Text>
                                                                    )
                                                                }
                                                            </AnimatedCircularProgress>
                                                            <BookButton borderCol={'green'} buttonValue={'Book Now'} buttonColor={'green'} handleBook={() => {
                                                                setMultiBook(true)
                                                            }} />
                                                        </View>
                                                    </View>
                                                </View>
                                                <Divider />
                                            </>
                                        )
                                            :
                                            <>
                                                <View style={{ paddingTop: 12, marginBottom: 10, paddingLeft: '5%', justifyContent: 'center', alignItems: 'flex-start', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                                    <View style={{ flexDirection: 'row', backgroundColor: 'white', alignItems: 'center' }}>
                                                        <Image source={AppImages.multiBooking} style={{ height: 28, width: 28 }} />
                                                        <View style={{ marginLeft: '5%' }} >
                                                            <Text style={{ color: 'red', fontSize: 18 }}>Sorry !</Text>
                                                            <Text style={{ color: 'red', fontSize: 12 }}>you can’t book two location for the same Salah</Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ marginTop: '12%' }}>
                                                        <Text style={{ color: 'black' }}>
                                                            You are already booked a location in <Text style={{ fontWeight: 900 }}>{'Ahmad \nMasjid'}</Text> for Juma’a Salah on 12-Dec-2020 at 11:30 AM
                                                        </Text>
                                                    </View>


                                                </View>
                                                <View style={mystyles.flex_center}>
                                                    <TouchableOpacity style={[styles.buttonStyle]}>
                                                        <View style={[styles.buttonInnerStyle]}>
                                                            <Text style={{ color: 'white', fontSize: responsiveFontSize(14), fontWeight: '900', }}>OK</Text>
                                                        </View>
                                                        <View style={{ justifyContent: 'center', alignItems: 'flex-end', margin: 5, paddingHorizontal: 14, width: responsiveWidth(50) }}>
                                                            <Image source={AppImages.right_arrow} />
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </>
                                    }
                                </View>
                            </BottomSheet>
                        </View>
                    </GestureHandlerRootView>
                </Drawer>
            </SafeAreaView>


        </>
    )
}
const styles = StyleSheet.create({
    MainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        backgroundColor: '#007bff',
        borderRadius: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentText: {
        fontSize: 18,
        textAlign: 'center',
    },
    buttonStyle: {
        height: responsiveHeight(47),
        width: responsiveWidth(141),
        flexDirection: 'row',
        backgroundColor: commonColor.redButton_color,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: '10%'
    },
    buttonInnerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        marginLeft: 40
    }
});
export default HomeScreen
