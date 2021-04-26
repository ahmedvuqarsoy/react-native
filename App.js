import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {styles} from './styles/Global';
import { Ionicons } from '@expo/vector-icons';


// Screens
import Add from './screens/Add';
import Menu from './screens/Menu';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();
const AddStack = createStackNavigator();
const MenuStack = createStackNavigator();

// Stack Screens
const AddStackScreen = ({navigation}) => (
  <AddStack.Navigator initialRouteName="Menu">
    <AddStack.Screen name="Add" component={Add} />
  </AddStack.Navigator>
)

const MenuStackScreen = ({navigation}) => (
  <MenuStack.Navigator initialRouteName="Menu">
    <MenuStack.Screen
      name="Menu"
      component={Menu}
      options={{
        headerLeft: () => (
          <View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="ios-menu" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )
      }}
    />
  </MenuStack.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Menu">
        <Drawer.Screen name="Add" component={AddStackScreen}/>
        <Drawer.Screen name="Menu" component={MenuStackScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}