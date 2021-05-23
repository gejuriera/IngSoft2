import React from 'react';
import { View, ImageBackground,Text,Pressable} from 'react-native';
import styles from './styles' ;
import Datepicker from './Datepicker';
const HomeScreen2 = (props) => {
    return (
      <View>
        
        <ImageBackground source={require('../assets/images/poolbar.jpg')}
        style={ styles.image}>
        <Text style={styles.title}>Rios Y Montañas</Text> 
        <Pressable
         style={styles.button}
         onPress={()=>console.warn('Por subir')}
        > 
        <Text style={styles.buttonText}>Explorar contenido</Text>
        </Pressable>      
        </ImageBackground> 
        <View style={{ 
          justifyContent:'center',
          alignItems:'center',
          
          paddingTop:20}}>
        <Text>Seleccione una fecha</Text>
        <Datepicker></Datepicker>
        </View>
        <View >
        <Text>Acerca de la hosteria</Text>
        
        </View>
      </View>
      
    );
};

export default HomeScreen2;


