import {StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';
const styles =StyleSheet.create({
    container:{
        margin:20,
      
        justifyContent:'space-between',
        borderBottomWidth:1,
        marginHorizontal:20,
        paddingVertical:20,
        borderColor:'lightgrey'},
    image:{
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode:'cover',
        borderRadius:10,


    },
    room:{
        marginVertical:10,
        color:'#5b5b5b',
    },
    price:{
         
        height:40,
        alignItems:'center',
        marginLeft:40,
        paddingLeft:20,
        flex:1,
        backgroundColor:'#e0f4f1',
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        flexDirection:'row',
        
    },
    description:{
        fontSize:18,
        lineHeight:26,
    

    },



})
export default styles;