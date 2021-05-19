import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer'

import { AuthContext } from '../navigation/AuthProvider';
import MetodoPagoScreen from './MetodoPagoScreen';
import ReservaScreen from './ReservaScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen2 from './HomeScreen2';

import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Text,
  TouchableRipple,
  Switch,
  Drawer
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconx from 'react-native-vector-icons/Ionicons';




export function DrawerContent(props) {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1210/wavebreakmediamicro121007763/16066168-mujer-haciendo-un-examen-en-el-sal%C3%B3n-de-ex%C3%A1menes-en-la-universidad.jpg'
                }}
                size={50}

              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Christian Portilla</Title>
                
              </View>

            </View>
            
          </View>


          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={(color, size) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Perfil"
              onPress={() => props.navigation.navigate('Perfil')}

            />

            <DrawerItem
              icon={(color, size) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Menu Principal"
              onPress={() => props.navigation.navigate('MenuPrincipal')}

            />

            <DrawerItem
              icon={(color, size) => (
                <Icon
                  name="bed-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Reservas"
              onPress={() => props.navigation.navigate('Reservas')}

            />

            <DrawerItem
              icon={(color, size) => (
                <Iconx
                  name="cash-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Metodos De Pago"
              onPress={() => props.navigation.navigate('MetodosDePago')}

            />

            <DrawerItem
              icon={(color, size) => (
                <Icon
                  name="account-settings"
                  color={color}
                  size={size}
                />
              )}
              label="Configuarion"
              onPress={() => { }}

            />



          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={(color, size) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Cerrar Sesion"
          onPress={() => logout()}

        />
      </Drawer.Section>

    </View>
  )

}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 25,
  },
  bottomDrawerSection: {
    marginBottom: 25,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

});