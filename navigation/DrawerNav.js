import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import Icon from 'react-native-vector-icons/Ionicons'


import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent} from '../screens/DrawerContent'
import MainTabScreen from '../screens/MainTabScreen';
const Drawer = createDrawerNavigator();


/*
//creo homestacknavigator
const HomeStack = createStackNavigator();
const HomeStackScreen = ({navigation})=>(
    <HomeStack.Navigator>

    <HomeStack.Screen
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
            title: '',
            headerLeft:()=>(
                <Icon.Button name="ios-menu" size={25}
                backgroundColor='#1a6199'
                onPress={()=> navigation.openDrawer()}
                ></Icon.Button>

            )
        }}
        
    />
</HomeStack.Navigator>




)
*/



const DrawerNav = () => {
    return (
        

    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MainTabScreen}/>
        <Drawer.Screen name="Notifications" component={LoginScreen} />
        
    </Drawer.Navigator>
    

    

      
        
    )
}

export default DrawerNav;