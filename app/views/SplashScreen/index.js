import React, { useContext, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Text,
  Image
} from 'react-native';
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage';

// import * as Animatable from 'react-native-animatable';

const SplashScreen = (props) => {
  const changePage = async () => {
    const landing = await AsyncStorage.getItem('@landing')
    if(landing =="seen"){
      props.navigation.replace("Main")
    }else{
      props.navigation.replace("Landing")
    }

  }
  useEffect(() => {
    setTimeout(() => {
      changePage()
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