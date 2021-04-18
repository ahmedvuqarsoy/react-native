import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Custom Imports
import {globalStyles} from '../styles/GlobalStyle';

const Home = ({navigation}) => {
    
    return (
        <View>
            <Text>Stack Navigation Task - Week 3</Text>
            <TouchableOpacity onPress={ () => { navigation.navigate('Country')}}>
                <Text style={globalStyles.mainButton}>List of Countries</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ () => { navigation.navigate('Company')}}>
                <Text style={globalStyles.mainButton}>Our Company</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ () => { navigation.navigate('Form')}}>
                <Text style={globalStyles.mainButton}>Form Section</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={ () => { navigation.navigate('TextChanger')}}>
                <Text style={globalStyles.mainButton}>State Management</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;