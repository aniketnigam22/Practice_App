import React, { useState } from 'react';
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
import { Button, Dialog, Divider, Portal, Provider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { removeUser } from '../../redux/user/UserData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDrawerText } from '../../common/language';
import { close } from '../../redux/drawer/ToggleDrawer';


export const Drawer = (props) => {
    const navigation = useNavigation();
    const redux_data = useSelector((state) => state.userId?.data?.user);
    const language = useSelector((state) => state.language.languageValue);
    const toggleDrawerValue = useSelector((state) => state.ToggleDrawer.toggleDrawer)

    const PROFILE_BASE_URL = 'http://192.168.29.244:5000/uploads/';

    const [profilePic, setProfilePic] = useState(redux_data?.profileImage == '-' ? '-' : PROFILE_BASE_URL);
    console.log('profilePic', profilePic);

    const [visible, setVisible] = useState(false);
    const hideDialog = () => setVisible(true);

    const username = redux_data?.name;
    const crp = redux_data?.crNo;
    const mobile = redux_data?.mobileNo;

    const overlay = false;
    const position = 'left';

    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem('userId');
            await AsyncStorage.removeItem('token');
            const userLoggedInValue = AsyncStorage.setItem('userLoggedIn', '0');
            console.log('User data removed successfully during logout');
            console.log('user logged value during logout', userLoggedInValue);
            dispatch(removeUser());
            setVisible(false);
            dispatch(close());
            console.log(toggleDrawerValue)
            navigation.navigate('Login');
        } catch (error) {
            console.error('error in handleLogout', error);
        }
    }

    const drawerText = getDrawerText(language);

    const drawerContent = () => {
        const edges = position == 'right' ? ['bottom', 'top', 'right'] : ['bottom', 'top', 'left'];
        const baseStyle = { flex: 1, borderStyle: 'solid' };

        console.log(profilePic + '?=' + new Date());

        return (
            <SafeAreaView edges={edges} style={baseStyle}>
                <Provider>
                    <View style={{ flex: 1, backgroundColor: '#F3F5F9' }}>
                        <ScreenHeader backNavigate={() => dispatch(close())} />
                        <View style={{ flexDirection: 'row', margin: '5%', alignItems: 'center' }}>
                            <View style={{ height: 74, width: 74, borderRadius: 37, justifyContent: 'center', alignItems: 'center' }}>
                                {
                                    profilePic == '-' ?
                                        <Image source={AppImages.profileImage} style={{ height: 60, width: 60, borderRadius: 60, borderWidth: 1, borderColor: "grey" }} />
                                        :
                                        <Image source={{ uri: profilePic + redux_data?.profileImage + '?=' + new Date() }} style={{ height: 60, width: 60, borderRadius: 60, borderWidth: 1, borderColor: "#333" }} />
                                }
                            </View>

                            <View style={{ marginLeft: '5%' }}>
                                <Text style={{ color: '#343434', fontSize: 18, fontWeight: '600' }}>{username}</Text>
                                <Text style={{ color: '#AAB1BB', fontSize: 12, fontWeight: '600', marginTop: 2 }}>{crp}</Text>
                                <Text style={{ color: '#343434', fontSize: 14, fontWeight: '600', marginTop: 2 }}>{mobile}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 4, backgroundColor: '#FFFFFF' }}>
                        <TouchableOpacity style={[styles.drawerOptionContainer]} onPress={() => navigation.navigate('Profile')}>
                            <Image source={AppImages.human} style={styles.drawerOptionIcon} />
                            <Text style={styles.drawerOptionText}>{drawerText.myProfile}</Text>
                        </TouchableOpacity>

                        <Divider />

                        <TouchableOpacity style={[styles.drawerOptionContainer]} onPress={() => navigation.navigate('QrCodeBooking')}>
                            <Image source={AppImages.lightQrCode} style={styles.drawerOptionIcon} />
                            <Text style={styles.drawerOptionText}>{drawerText.myBooking}</Text>
                        </TouchableOpacity>

                        <Divider />

                        <TouchableOpacity style={[styles.drawerOptionContainer]} onPress={() => navigation.navigate('SelectLanguage')}>
                            <Image source={AppImages.Language} style={styles.drawerOptionIcon} />
                            <Text style={styles.drawerOptionText}>{drawerText.language}</Text>
                        </TouchableOpacity>

                        <Divider />

                        <TouchableOpacity style={[styles.drawerOptionContainer]}>
                            <Image source={AppImages.inviteOthers} style={styles.drawerOptionIcon} />
                            <Text style={styles.drawerOptionText}>{drawerText.inviteOthers}</Text>
                        </TouchableOpacity>

                        <Divider />

                        <TouchableOpacity style={[styles.drawerOptionContainer]}>
                            <Image source={AppImages.writeToUs} style={styles.drawerOptionIcon} />
                            <Text style={styles.drawerOptionText}>{drawerText.writeToUs}</Text>
                        </TouchableOpacity>

                        <Divider />

                        <TouchableOpacity style={[styles.drawerOptionContainer]} onPress={hideDialog}>
                            <Image source={AppImages.logout} style={styles.drawerOptionIcon} />
                            <Text style={styles.drawerOptionText}>{drawerText.logout}</Text>
                        </TouchableOpacity>

                        <Portal>
                            <Dialog visible={visible}>
                                <Dialog.Title style={styles.title}>{drawerText.dialogTitle}</Dialog.Title>
                                <Dialog.Content>
                                    <Text variant="bodyMedium">{drawerText.dialogContent}</Text>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <Button onPress={() => setVisible(false)}>{drawerText.cancel}</Button>
                                    <Button onPress={handleLogout}>{drawerText.ok}</Button>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                        <Divider />
                    </View>
                </Provider>
            </SafeAreaView>
        );
    };

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
};

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
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});
