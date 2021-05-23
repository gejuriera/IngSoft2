import {StyleSheet} from 'react-native'
const styles =StyleSheet.create({

    image:{
        width: '100%',
        height: 450,
        resizeMode: 'cover',
        justifyContent: 'center',
        

    },
    title:{
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft:25,
    },
    button:{
        backgroundColor: 'white',
        width:200,
        height:40,
        borderRadius:10,
        marginLeft:25,
        marginTop:100,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',
        borderColor: 'black',
    },
    button2:{
        borderWidth:2,
        width:30,
        height:30,
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'lightgrey',

    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        marginHorizontal:20,
        paddingVertical:20,
        borderColor:'lightgrey'},




})
export default styles;