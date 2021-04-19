import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Todo = ({date, task, id, pressHandler}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.task}>
                <Text style={styles.text}>{date}</Text>
                <Text style={styles.text}>{task}</Text>
            </View>
            <View style={styles.cancelButton}>
                <TouchableOpacity onPress={() => {pressHandler(id)}}>
                    <AntDesign name="close" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingHorizontal: 24,
        paddingVertical: 10,
        margin: 10,
        flexDirection: 'row',
    },
    task: {
        
    },
    cancelButton: {
        marginLeft: 150,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
});

export default Todo;