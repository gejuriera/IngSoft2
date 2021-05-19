import React from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground, TextInput, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'

const EditProfileScreen = () => {

   const renderInner=()=>(
    <View style={styles.panel}>
    <View style={{alignItems: 'center'}}>
      <Text style={styles.panelTitle}>Sube tu foto</Text>
      <Text style={styles.panelSubtitle}>Escoje tu foto de perfil</Text>
    </View>
    <TouchableOpacity style={styles.panelButton} >
      <Text style={styles.panelButtonTitle}>Tomate una foto</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.panelButton} >
      <Text style={styles.panelButtonTitle}>Escoje de la libreria</Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={styles.panelButton}
      onPress={() => bs.current.snapTo(1)}>
      <Text style={styles.panelButtonTitle}>Cancelar</Text>
    </TouchableOpacity>
  </View>

   )

   const renderHeader=()=>(
       <View style={styles.header}>
           <View styles={styles.panelHeader}>
               <View style={styles.panelHandle}>

               </View>

           </View>

       </View>
       
   )

bs=React.createRef();
fall=new Animated.Value(1);

    return (
        <View style={styles.container}>
            <BottomSheet 
               ref={bs}
               snapPoints={[330, 0]}
               renderContent={renderInner}
               renderHeader={renderHeader}
               initialSnap={1}
               callbackNode={fall}
               enabledGestureInteraction={true}
            />
            <Animated.View style={{ margin: 20,
            opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground
                                source={{
                                    uri: 'https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1210/wavebreakmediamicro121007763/16066168-mujer-haciendo-un-examen-en-el-sal%C3%B3n-de-ex%C3%A1menes-en-la-universidad.jpg'
                                }}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}
                            >

                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Icon name="camera" size={35} color='#fff' style={{
                                        opacity: 0.7,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderWidth: 1,
                                        borderColor: '#fff',
                                        borderRadius: 10,

                                    }} />
                                </View>

                            </ImageBackground>

                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>Christian Portilla</Text>

                </View>
                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput
                        placeholder="Nombre"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20} />
                    <TextInput
                        placeholder="Apellido"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <Feather name="phone" size={20} />
                    <TextInput
                        placeholder="Telefono"
                        placeholderTextColor="#666666"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name="envelope-o" size={20} />
                    <TextInput
                        placeholder="E-mail"
                        placeholderTextColor="#666666"
                        keyboardType="email-address"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name="globe" size={20} />
                    <TextInput
                        placeholder="Pais"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <Icon name="map-marker-outline" size={20} />
                    <TextInput
                        placeholder="City"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <TouchableOpacity style={styles.commandButton} onPress={() => { }}>
                    <Text style={styles.panelButtonTitle}>Enviar</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>

    );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        // shadowColor: '#000000',
        // shadowOffset: {width: 0, height: 0},
        // shadowRadius: 5,
        // shadowOpacity: 0.4,
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});