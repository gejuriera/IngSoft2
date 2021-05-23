import React from 'react';
import {View,Text, Image} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import styles from './styles';
 
 


const Post=(props)=>{
   
    const post= props.post;
    return(
    <View style={styles.container}>
        {/*imagen */}
    <Image 
        style={styles.image}
        source={{uri: post.image}}
    />
    {/*titulo habitacion*/}
<Text style={styles.room}>{post.bed} Camas {post.bedroom} Habitaciones</Text>
{/*descripcion */}
<Text style={styles.description} numberOfLines={2}>
{post.type}
</Text>
<Text style={styles.title} numberOfLines={2}>
{post.title}
</Text>
{/*Precio */}
<View style={{
   marginTop: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    alignItems:'center'


}}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Precio por noche</Text>
    <View style={styles.price}>
    <Text style={{fontSize:15,fontWeight:'bold',color:'#908e8c',}}> ${post.price}</Text>
    
    </View>

</View>



    </View>  
    );
};
export default Post;