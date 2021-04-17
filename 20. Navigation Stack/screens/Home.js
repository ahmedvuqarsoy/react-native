import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { globalStyles } from '../styles/Global';

// Reference Link: https://docs.expo.io/guides/using-custom-fonts/

const Home = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    const pressHandler = () => {
        navigation.navigate('ReviewDetails');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Cool Header with Poppins?</Text>
            <Button
                title="Go to Reviews Page"
                onPress={pressHandler}
            />
        </View>
    )
}



export default Home;