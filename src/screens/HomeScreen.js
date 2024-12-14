import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jastip App By @nurasyifah_</Text>
      <Button
        title="Add Order"
        buttonStyle={styles.button}
        onPress={() => navigation.navigate('Add Order')}
      />
      <Button
        title="Order List"
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={() => navigation.navigate('Order List')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#87ceeb' 
    },
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      marginBottom: 20 
    },
    button: { 
      backgroundColor: '#ffb6c1', 
      paddingVertical: 10, 
      paddingHorizontal: 20 
    },
    buttonContainer: { 
      marginTop: 10 
    },
  });