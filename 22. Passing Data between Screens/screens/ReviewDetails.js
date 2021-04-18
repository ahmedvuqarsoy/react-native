import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/Global'


const ReviewDetails = ({route, navigation}) => {

    const pressHandler = () => {
        navigation.goBack();
    }

    const {title, rating, body} = route.params

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Review Page.</Text>
            <Button 
                title="Go Back"
                onPress={pressHandler}
            />
            <View>
                <Text style={globalStyles.titleText}>{title}</Text>
                <Text style={globalStyles.titleText}>{rating}</Text>
                <Text style={globalStyles.titleText}>{body}</Text>
            </View>
        </View>
    )
}

export default ReviewDetails;