import React from 'react';
import { View, FlatList,Text} from 'react-native';
import feed from '../assets/data/feed'
import Post from '../components/post';
const ReservaScreen = () => {
    return (
      <View >
        <Text>PRUEBA DE LISTA</Text>
        <FlatList
            data={feed}
            contentContainerStyle={{paddingVertical:30,paddingLeft:20}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=> <Post post={item}/>}
          
        />
      </View>
    );
};

export default ReservaScreen;
 