import React, { useContext, useEffect, useState, useRef } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image,
  Pressable
} from 'react-native';
import styles from './style'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import * as Animatable from 'react-native-animatable';
import RNStoryShare from "react-native-story-share";
import axios from "axios";
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};


const SplashScreen = (props) => {
  //handleViewRef = ref => this.view = ref;
  const handleViewRef = useRef(null);

  const [count, setCount] = useState(700);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    console.log("geldi")
    handleViewRef.current.pulse(700)
  }, [])

  const magitize = async() => {
    handleViewRef.current.pulse(300)
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
    await axios.get('https://magicstory-web.vercel.app/getMagic')
    .then(function (response) {
      props.navigation.navigate('Result', {message: response.data.message})
      handleViewRef.current.pulse(700)
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => magitize()}>
        <Animatable.Image ref={handleViewRef} duration={count} animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.logo} source={require('../../../assets/img/icon.png')} />
      </Pressable>
    </SafeAreaView>
  );
};
export default SplashScreen;
