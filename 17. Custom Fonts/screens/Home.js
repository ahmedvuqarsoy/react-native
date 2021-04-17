import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

// Reference Link: https://docs.expo.io/guides/using-custom-fonts/

const Home = () => {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Home Screen with Poppins.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    },
    titleText: {
        fontFamily: "Poppins_400Regular",
        fontSize: 18
    }
})

export default Home;