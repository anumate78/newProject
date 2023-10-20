/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState,useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import Routes from './src/routes/Routes';
import store from './store'
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

import { Provider } from 'react-redux';
const App = ()=> {

  useEffect(() => {
    requestUserPermission();
    notificationListener();

  }, []);


  const notificationListener = async () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log('remoteMessageInitail1', remoteMessage);
    });

    await messaging().getInitialNotification().then(remoteMessage => {
      console.log("remoteMesssa>>>", remoteMessage)
    });

    PushNotification.createChannel(
      {
        channelId: "channel-id", // (required)
        channelName: "My channel", // (required)
        channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
        playSound: true, // (optional) default: true
        soundName: "default", // (optional) See `soundName` parameter of `localNotification` function 
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
    )

    messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    })
   
  }


  const getToken = async () => {
    //let fcmToken = await AsyncStorage.getItem(AppStrings.DEVICE_TOKEN);
    // if (!fcmToken) {
    let fcmToken = await messaging().getToken();
    if (fcmToken) {
      console.log('fcmToken: ' + Platform.OS, +' ' + fcmToken);

    }
  }

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      try {
        getToken();

      } catch (error) {

      }
    }
    else {
    }
  }
  return (
       <Provider store={store}>
       <Routes /> 
       </Provider>
  );
}

const styles = StyleSheet.create({
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
});

export default App;
