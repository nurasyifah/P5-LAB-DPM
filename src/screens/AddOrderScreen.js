import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';

export default function AddOrderScreen() {
  const [order, setOrder] = useState('');

  const handleAddOrder = () => {
    console.log(`Order added: ${order}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter order details"
        placeholderTextColor="#000" 
        value={order}
        onChangeText={setOrder}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddOrder}>
        <Text style={styles.buttonText}>ADD ORDER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffb6c1', 
    justifyContent: 'center', 
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#87ceeb', 
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#87ceeb',
    paddingVertical: 15,
    borderRadius: 5, 
    alignItems: 'center', 
  },
  buttonText: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 16,
  },
});