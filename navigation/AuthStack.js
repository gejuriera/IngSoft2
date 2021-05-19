import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from '../screens/SignupScreen.js';
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/HomeScreen.js';

//import AsyncStorage from '@react-native-community/async-storage'

const Stack = createStackNavigator();

const AuthStack = () => {
    let routeName;
    routeName = 'Login';


    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerStyle:{
                    backgroundColor:'#1a6199'},
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                      fontWeight:'bold'},
                    title:''}}

            />

            <Stack.Screen
                name='Signup'
                component={SignupScreen}
                options={{ headerStyle:{
                    backgroundColor:'#1a6199'},
                    headerTintColor:'#fff',
                    headerTitleStyle:{
                      fontWeight:'bold'},
                    title:''}}
                

            />
              

        </Stack.Navigator>
    )
}
export default AuthStack;