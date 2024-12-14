import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import AddOrderScreen from '../screens/AddOrderScreen';
import OrderListScreen from '../screens/OrderListScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home"
          component={HomeScreen} 
          options={{headerStyle: { backgroundColor: '#ffb6c1' }, headerTintColor: '#000',}}/>
      <Stack.Screen name="Add Order" 
          component={AddOrderScreen}
          options={{headerStyle: { backgroundColor: '#87ceeb' }, headerTintColor: '#000',}}/>
      <Stack.Screen name="Order List" 
          component={OrderListScreen}
          options={{headerStyle: { backgroundColor: '#ffb6c1' }, headerTintColor: '#000',}}/>
    </Stack.Navigator>
  );
}