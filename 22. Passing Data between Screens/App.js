import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from './styles/Global';

// Created
import Home from './screens/Home';
import About from './screens/About';
import ReviewDetails from './screens/ReviewDetails';

import { AppNavigator } from './components/AppNavigator';


export default function App() {

  return (
    <AppNavigator/>
  )
}