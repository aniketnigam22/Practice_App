import React from 'react';
import Splash from './src/screens/splash';
import SelectLanguage from './src/screens/selectLanguage';
import MobileInput from './src/screens/mobileVerification/pages/MobileInput';
import OtpInput from './src/screens/mobileVerification/pages/OtpInput';
import Notification from './src/screens/notification';
import Login from './src/screens/login';
import Register from './src/screens/register';
import HomeScreen from './src/screens/homeScreen';
import BottomNav from './src/components/bottomNav';
import HomeHeader from './src/screens/homeScreen/homeHeader/HomeHeader';
import QrCodeBooking from './src/screens/qrCodeBooking';
import BookingConfirm from './src/screens/bookingConfirm';
import Help from './src/screens/help';
import MosqDetail from './src/screens/mosqDetail';
import Profile from './src/screens/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import Redux from './src/screens/reduxScreen/Redux';
import Toast from 'react-native-toast-message';
import { StyleSheet, View , Text, } from 'react-native';
import UserInfo from './src/screens/userInfo/UserInfo';


const Stack = createStackNavigator();

function App() {
  const toastConfig = {
    success: ({ text1, text2 }) => (
      <View style={[styles.toastContainer, styles.successToast]}>
        <Text style={styles.toastText}>{text1}</Text>
        <Text style={styles.toastText}>{text2}</Text>
      </View>
    ),
    error: ({ text1, text2 }) => (
      <View style={[styles.toastContainer, styles.errorToast]}>
        <Text style={styles.toastText}>{text1}</Text>
        <Text style={styles.toastText}>{text2}</Text>
      </View>
    ),
  };

  return (
    <>
      {/* <HomeScreen/> */}
      {/* <QrCodeBooking/> */}
      {/* <Splash/> */}
      {/* <Register/> */}
      {/* <Login/> */}
      {/* <Notification/> */}
      {/* <MobileInput/> */}
      {/* <OtpInput/> */}
      {/* <SelectLanguage/> */}
      {/* <BookingConfirm /> */}
      {/* <Help/> */}
      {/* <MosqDetail/> */}
      {/* <Profile/> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerShown: false,
            animationEnabled: true,
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            cardStyleInterpolator: ({ current, next, layouts }) => {
              return {
                cardStyle: {
                  transform: [
                    {
                      translateX: current.progress.interpolate({
                        inputRange: [0, 1],
                        outputRange: [layouts.screen.width, 0],
                      }),
                    },
                  ],
                },
                overlayStyle: {
                  opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                  }),
                },
              };
            },
          }}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'push', }} />
            <Stack.Screen name="userInfo" component={UserInfo} options={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'push', }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false, animation: 'slide_from_right', animationTypeForReplace: 'push', }} />
            <Stack.Screen name="MobileInput" component={MobileInput} options={{ headerShown: false }} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="SelectLanguage" component={SelectLanguage} options={{ headerShown: false }} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Stack.Screen name="QrCodeBooking" component={QrCodeBooking} options={{ headerShown: false }} />
            <Stack.Screen name="BookingConfirm" component={BookingConfirm} options={{ headerShown: false }} />
            <Stack.Screen name="Help" component={Help} options={{ headerShown: false }} />
            <Stack.Screen name="MosqDetail" component={MosqDetail} options={{ headerShown: false }} />
            <Stack.Screen name="Redux" component={Redux} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </Provider>
    </>

  );
}

const styles = StyleSheet.create({
  toastContainer: {
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  successToast: {
    backgroundColor: 'green',
  },
  errorToast: {
    backgroundColor: 'red',
  },
  toastText: {
    color: 'white',
    fontSize: 16,
  },
});



export default App;



/*
 * #8 Send Notification to React Native App using
 * Firebase Cloud Messaging
 * https://aboutreact.com/react-native-notification-firebase-cloud-messaging
 */

// import React in our code
// import React, {useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image
// } from 'react-native';

// import messaging from '@react-native-firebase/messaging';
// import { AppImages } from './src/common/AppImages';

// const TOPIC = 'MyNews';

// const App = () => {
//   const requestUserPermission = async () => {
//     /**
//      * On iOS, messaging permission must be requested by
//      * the current application before messages can be
//      * received or sent
//      */
//     const authStatus = await messaging().requestPermission();
//     console.log('Authorization status(authStatus):', authStatus);
//     return (
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL
//     );
//   };

//   useEffect(() => {
//     if (requestUserPermission()) {
//       /**
//        * Returns an FCM token for this device
//        */
//       messaging()
//         .getToken()
//         .then((fcmToken) => {
//           console.log('FCM Token -> ', fcmToken);
//         });
//     } else console.log('Not Authorization status:', authStatus);

//     /**
//      * When a notification from FCM has triggered the application
//      * to open from a quit state, this method will return a
//      * `RemoteMessage` containing the notification data, or
//      * `null` if the app was opened via another method.
//      */
//     messaging()
//       .getInitialNotification()
//       .then(async (remoteMessage) => {
//         if (remoteMessage) {
//           console.log(
//             'getInitialNotification:' +
//               'Notification caused app to open from quit state',
//           );
//           console.log(remoteMessage);
//           alert(
//             'getInitialNotification: Notification caused app to' +
//             ' open from quit state',
//           );
//         }
//       });

//     /**
//      * When the user presses a notification displayed via FCM,
//      * this listener will be called if the app has opened from
//      * a background state. See `getInitialNotification` to see
//      * how to watch for when a notification opens the app from
//      * a quit state.
//      */
//     messaging().onNotificationOpenedApp(async (remoteMessage) => {
//       if (remoteMessage) {
//         console.log(
//           'onNotificationOpenedApp: ' +
//             'Notification caused app to open from background state',
//         );
//         console.log(remoteMessage);
//         alert(
//           'onNotificationOpenedApp: Notification caused app to' +
//           ' open from background state',
//         );
//       }
//     });

//     /**
//      * Set a message handler function which is called when
//      * the app is in the background or terminated. In Android,
//      * a headless task is created, allowing you to access the
//      * React Native environment to perform tasks such as updating
//      * local storage, or sending a network request.
//      */
//     messaging().setBackgroundMessageHandler(
//       async (remoteMessage) => {
//         console.log(
//           'Message handled in the background!',
//           remoteMessage
//         );
//     });

//     /**
//      * When any FCM payload is received, the listener callback
//      * is called with a `RemoteMessage`. Returns an unsubscribe
//      * function to stop listening for new messages.
//      */
//     const unsubscribe = messaging().onMessage(
//       async (remoteMessage) => {
//         alert('A new FCM message arrived!');
//         console.log(
//           'A new FCM message arrived!',
//           JSON.stringify(remoteMessage)
//         );
//       }
//     );

//     /**
//      * Apps can subscribe to a topic, which allows the FCM
//      * server to send targeted messages to only those devices
//      * subscribed to that topic.
//      */
//     messaging()
//       .subscribeToTopic(TOPIC)
//       .then(() => {
//         console.log(`Topic: ${TOPIC} Suscribed`);
//       });

//     return () => {
//       unsubscribe;
//       /**
//        * Unsubscribe the device from a topic.
//        */
//       // messaging().unsubscribeFromTopic(TOPIC);
//     };
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Text style={styles.titleText}>
//           Send Notification to React Native App
//         </Text>
//         <Text style={styles.textStyle}>using</Text>
//         <Image
//           source={AppImages.Language}
//           style={{
//             width: '90%',
//             height: '50%',
//             resizeMode: 'contain',
//             margin: 30,
//           }}
//         />
//         <Text style={styles.titleText}>
//           Firebase Cloud Messaging
//         </Text>
//       </View>
//       <Text
//         style={{
//           fontSize: 16,
//           textAlign: 'center',
//           color: 'white',
//         }}>
//         www.aboutreact.com
//       </Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     textAlign: 'center',
//     backgroundColor: '#307ecc',
//   },
//   titleText: {
//     fontSize: 24,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     marginVertical: 10,
//     color: 'white',
//   },
//   textStyle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//     color: 'white',
//   },
// });

// export default App;