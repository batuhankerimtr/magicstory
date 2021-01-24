import React, { useContext, useEffect, useState } from "react";
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

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false
};


const SplashScreen = (props) => {
  handleViewRef = ref => this.view = ref;

  const [count, setCount] = useState(700);
  useEffect(() => {
    this.view.pulse(700)
  })

  const magitize = () => {
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
    setTimeout(() => props.navigation.navigate('Result'), 3000)
    this.view.pulse(300)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={() => magitize()}>
        <Animatable.Image ref={this.handleViewRef} duration={count} animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.logo} source={require('../../../assets/img/icon.png')} />
      </Pressable>
    </SafeAreaView>
  );
};
export default SplashScreen;
