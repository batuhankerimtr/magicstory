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
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
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
    await axios.get('https://magicstory.vercel.app/getMagic')
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
      <Text style={styles.title}>Magic Story</Text>
      <Pressable onPress={() => magitize()}>
        <Animatable.Image ref={handleViewRef} duration={count} animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.logo} source={require('../../../assets/img/icon.png')} />
      </Pressable>
      <View style={styles.infoLabel}>
        <View style={styles.infoIcon}>
          <Icon name="exclamation" color="#FFFC00"/>
        </View>
        <Text style={styles.infoText}>Appuyez sur la boule doucement</Text>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;
