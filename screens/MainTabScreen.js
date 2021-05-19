import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconx from 'react-native-vector-icons/Ionicons';
import LoginScreen from './LoginScreen';

import MetodoPagoScreen from './MetodoPagoScreen';
import ReservaScreen from './ReservaScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen2 from './HomeScreen2';
import EditProfileScreen from './EditProfileScreen';

const HomeStack= createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ()=>(
    <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    barStyle={{ backgroundColor: '#1a6199' }}
  >
    <Tab.Screen
      name="Perfil"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon name="account-outline" color='#f4f4f4' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="MenuPrincipal"
      component={HomeStackScreen}
      options={{
       tabBarLabel: '',
      
        tabBarIcon: ({ color }) => (
          <Icon name="home-outline" color='#f4f4f4'size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Reservas"
      component={ReservaStackScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon name="bed-outline" color='#f4f4f4' size={26} />
        ),
      }}
    />

<Tab.Screen
     name="MetodosDePago"
      component={MetodoPagoStackScreen}
      options={{
        tabBarLabel: '',
        tabBarIcon: ({ color }) => (
          <Icon name="credit-card" color='#f4f4f4' size={26} />
        ),
      }}
    />

  </Tab.Navigator>



);

export default MainTabScreen;




const HomeStackScreen = ({navigation})=>(
    <HomeStack.Navigator>

    <HomeStack.Screen
        name='Home'
        component={HomeScreen2}
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
                <Iconx.Button name="ios-menu" size={25}
                backgroundColor='#1a6199'
                onPress={()=> navigation.openDrawer()}
                ></Iconx.Button>

            )
        }}
        
    />
</HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation})=>(
    <HomeStack.Navigator>

    <HomeStack.Screen
        name='Home'
        component={ProfileScreen}
        options={{
            headerStyle: {
                backgroundColor: '#1a6199',
                elevation:0,
            },
            headerTintColor: '#fff',
           
            title: '',
            headerLeft:()=>(
                <Iconx.Button name="ios-menu" size={25}
                backgroundColor='#1a6199'
                onPress={()=> navigation.openDrawer()}
               />

            ),
            headerRight:()=>(
              <Icon.Button name="account-edit" size={25}
                backgroundColor='#1a6199'
                onPress={()=> navigation.navigate('EditProfile')}
               />

            )
        }}
        
    />  
    <HomeStack.Screen
    
     name="EditProfile"
     options={{
      headerStyle: {
        backgroundColor: '#1a6199',
        elevation:0,
    },
    headerTintColor: '#fff',
       title:'Editar Perfil'
     }}
     component={EditProfileScreen}
     
    >
     

    </HomeStack.Screen>
</HomeStack.Navigator>
);

const ReservaStackScreen = ({navigation})=>(
    <HomeStack.Navigator>

    <HomeStack.Screen
        name='Reserva'
        component={ReservaScreen}
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
                <Iconx.Button name="ios-menu" size={25}
                backgroundColor='#1a6199'
                onPress={()=> navigation.openDrawer()}
                ></Iconx.Button>

            )
        }}
        
    />  
</HomeStack.Navigator>
);

const MetodoPagoStackScreen = ({navigation})=>(
    <HomeStack.Navigator>

    <HomeStack.Screen
        name='MetodosDePago'
        component={MetodoPagoScreen}
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
                <Iconx.Button name="ios-menu" size={25}
                backgroundColor='#1a6199'
                onPress={()=> navigation.openDrawer()}
                ></Iconx.Button>

            )
        }}
        
    />  
</HomeStack.Navigator>
);