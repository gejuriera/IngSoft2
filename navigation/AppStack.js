import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'

import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();





const AppStack = () => {
    return (

        <Stack.Navigator>

            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#1a6199'
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    title: ''
                }}
            />
        </Stack.Navigator>





    )
}

export default AppStack;