import React, { useContext, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable,
  Linking
} from 'react-native';
import styles from './style'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import AsyncStorage from '@react-native-async-storage/async-storage';


const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};




const SplashScreen = (props) => {
  const nextBtn = async() => {
    ReactNativeHapticFeedback.trigger("notificationSuccess", options);
    await AsyncStorage.setItem('@landing', "seen")
    props.navigation.replace('Main')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => nextBtn()} style={styles.continueBtn}>
        <Text style={styles.continueBtnText}>Continuer</Text>
      </Pressable>
      <Text style={styles.acceptText}>En continuant svous acceptez les Conditions Générales & Privacy de Magic Story.</Text>
      <View style={styles.linkGroup}>
        <Pressable onPress={() => Linking.openURL("https://magicstory.vercel.app/terms")} style={styles.link}><Text style={styles.linkText}>C.G.U</Text></Pressable>
        <Pressable onPress={() => Linking.openURL("https://magicstory.vercel.app/privacy")} style={styles.link}><Text style={styles.linkText}>Privacy</Text></Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;

