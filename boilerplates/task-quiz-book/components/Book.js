import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Book = ({name, author, id, pressHandler}) => {

    return (
        <View style={styles.row}>
            <View style={styles.text}>
                <Text>{name}</Text>
                <Text>Written by {author}</Text>
            </View>
            <View style={styles.cancel}>
                <TouchableOpacity onPress={() => pressHandler(id)}>
                    <AntDesign name="closecircle" size={24} color="red"/>
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    row: {
        flexDirection: 'row',
        margin: 10,
        padding: 5,
        flex: 1,
        backgroundColor: '#ECEBE4'
    },
    text: {
        flex: 10,
        justifyContent: 'flex-start'
    },
    cancel: {
        flex: 1,
        justifyContent: 'flex-end',
        alignContent: 'center'
    }
});

export default Book;