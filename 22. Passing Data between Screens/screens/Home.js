import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';
import { globalStyles } from '../styles/Global';

// Reference Link: https://docs.expo.io/guides/using-custom-fonts/

const Home = ({ navigation }) => {

    const [reviews, setReviews] = useState([
        { title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
    ]);
    
    

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
            {/* <Button
                title="Go to Reviews Page"
                onPress={pressHandler}
            /> */}

            <FlatList
                data={reviews}
                renderItem={({item}) => (
                    <View>
                        <TouchableOpacity onPress={ () => navigation.navigate('ReviewDetails', item)}>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    )
}



export default Home;