import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ReservaScreen = () => {
    return (
      <View style={styles.container}>
        <Text>ReservaScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default ReservaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});