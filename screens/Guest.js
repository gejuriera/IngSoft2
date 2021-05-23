import React,{useState}from 'react';
import { View,Text, Pressable } from 'react-native';
import styles from '../screens/styles';
const GuestScreen = (props) => {
    const [adults,setAdults]=useState(0);
    const [children,setChildren]=useState(0);
    const [infants,setInfants]=useState(0);
    
    return (
      <View>  
      <View style={styles.row}>
        <View>
            <Text style={{fontWeight: 'bold'}}>Adultos</Text>
            <Text style={{color:'#8d8d8d'}}> 13 años o mas</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Pressable
            onPress={()=> setAdults(Math.max(0,adults-1))}
            style={styles.button2}>
            <Text>-</Text>
            </Pressable>
            <Text style={{marginHorizontal:20,fontSize:16,color:'black'}}>{adults}</Text>
       
            <Pressable
            onPress={()=> setAdults(adults+1)}
            style={styles.button2}>
            <Text> +</Text>
            </Pressable>
        </View>
        </View>
        <View style={styles.row}>
        <View>
            <Text style={{fontWeight: 'bold'}}>Niños</Text>
            <Text style={{color:'#8d8d8d'}}> 13 años o menos</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Pressable
            onPress={()=> setChildren(Math.max(0,children-1))}
            style={styles.button2}>
            <Text>-</Text>
            </Pressable>
            <Text style={{marginHorizontal:20,fontSize:16,color:'black'}}>{children}</Text>
       
            <Pressable
            onPress={()=> setChildren(children+1)}
            style={styles.button2}>
            <Text> +</Text>
            </Pressable>
        </View>
        </View>
        <View style={styles.row}>
        <View>
            <Text style={{fontWeight: 'bold'}}>Infantes</Text>
            <Text style={{color:'#8d8d8d'}}>Menos de 2 años</Text>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Pressable
            onPress={()=> setInfants(Math.max(0,infants-1))}
            style={styles.button2}>
            <Text>-</Text>
            </Pressable>
            <Text style={{marginHorizontal:20,fontSize:16,color:'black'}}>{infants}</Text>
       
            <Pressable
            onPress={()=> setInfants(infants+1)}
            style={styles.button2}>
            <Text> +</Text>
            </Pressable>
        </View>
        </View>
    </View>  
  
    );
};

export default GuestScreen;
 