/**
 * Wesh - Make new friends
 * https://wesh.app
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './views/SplashScreen'
import LandingScreen from './views/LandingScreen'
import MainScreen from './views/MainScreen'
import ResultScreen from './views/ResultScreen'



const Stack = createStackNavigator();


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Main">
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Landing" component={LandingScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Result" component={ResultScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Router;
