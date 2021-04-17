import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { globalStyles } from '../styles/Global';

// Reference Link: https://docs.expo.io/guides/using-custom-fonts/

const Home = () => {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen with Poppins.</Text>
        </View>
    )
}



export default Home;