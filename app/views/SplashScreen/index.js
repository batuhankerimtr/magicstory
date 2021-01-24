import React, { useContext, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image
} from 'react-native';
import styles from './style'

// import * as Animatable from 'react-native-animatable';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("Landing")
    }, 1000)
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <Image  style={styles.logo} source={require('../../../assets/img/icon.png')} />
    </SafeAreaView>
  );
};
export default SplashScreen;

// duration={700} animation="pulse" easing="ease-out" iterationCount="infinite"