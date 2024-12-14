import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OrderListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order List</Text>
      <Text>No orders yet.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#87ceeb', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 },
});