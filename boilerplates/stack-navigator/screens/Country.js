import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { globalStyles } from '../styles/GlobalStyle';

const Country = () => {

    const countries = [
        {
            country: "Afghanistan",
            year: 1970,
            key: '1',
        },
        {
            country: "Albania",
            year: 1985,
            key: '2',
        },
        {
            country: "Algeria",
            year: 1955,
            key: '3',
        },
        {
            country: "American Samoa",
            year: 2000,
            key: '4',
        },
        {
            country: "Andorra",
            year: 2010,
            key: '5',
        }
    ]

    return (
        <View>
            <FlatList
                data={countries}
                renderItem={({item}) => (
                    <Text style={globalStyles.countryText}>Country: {item.country} - Year: {item.year} - Country Key: {item.key}</Text>
                )}
            />
        </View>
    )
}

export default Country;