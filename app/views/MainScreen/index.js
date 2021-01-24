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
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      props.navigation.navigate('Result', {message: response.data.message})
=======
      setMessage(response.data.message)
      props.navigation.navigate('Result', {message: message})
>>>>>>> Stashed changes
      handleViewRef.current.pulse(700)
    })
    .catch(function (error) {
      console.log(error);
    })
<<<<<<< Updated upstream
=======
     
    //setTimeout(() => , 3000)
    //handleViewRef.current.pulse(300)
>>>>>>> Stashed changes
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
