import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/Global'

const ReviewDetails = ({navigation}) => {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <View style={global.container}>
            <Text style={globalStyles.titleText}>Review Page.</Text>
            <Button 
                title="Go Back"
                onPress={pressHandler}
            />
        </View>
    )
}

export default ReviewDetails;