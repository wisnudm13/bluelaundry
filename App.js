import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Register from './src/screens/Register'

const Stack = createStackNavigator()

export default () => (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen 
      options={{
        headerShown: false
      }}
      name ="Login" 
      component={Login}/>
      <Stack.Screen 
        options={{
          headerShown: false
        }}
        name ="Register" 
        component={Register}
        //options={{title: ''}}
        /> 
      

    </Stack.Navigator>
  </NavigationContainer>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
