import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// import Home from "../screens/Home";
// import ReviewDetails from "../screens/ReviewDetails";

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="ReviewDetails" component={ReviewDetails} />
    </Navigator>
);

export const AppNavigator = () => (
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
);