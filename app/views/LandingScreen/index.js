import React, { useContext, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable
} from 'react-native';
import styles from './style'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};




const SplashScreen = (props) => {
  const nextBtn = () => {
    ReactNativeHapticFeedback.trigger("notificationSuccess", options);
    props.navigation.replace('Main')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => nextBtn()} style={styles.continueBtn}>
        <Text style={styles.continueBtnText}>Continuer</Text>
      </Pressable>
      <Text style={styles.acceptText}>En continuant vous acceptez les Conditions Générales & Privacy de Magic Story.</Text>
      <View style={styles.linkGroup}>
        <Pressable style={styles.link}><Text style={styles.linkText}>C.G.U</Text></Pressable>
        <Pressable style={styles.link}><Text style={styles.linkText}>Privacy</Text></Pressable>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;

