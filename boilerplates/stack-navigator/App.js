import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// React Stack Navigation Dependencies
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Custom Import
import Home from './screens/Home';
import Form from './screens/Form';
import Country from './screens/Country';
import Company from './screens/Company';
import TextChanger from './screens/TextChanger';

export default function App() {

  const Stack = createStackNavigator()



  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          component={Home}
          name="Home"
        />
        <Stack.Screen
          component={Form}
          name="Form"
        />
        <Stack.Screen
          component={Country}
          name="Country"
        />
        <Stack.Screen
          component={Company}
          name="Company"
        />
        <Stack.Screen
          component={TextChanger}
          name="TextChanger"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
