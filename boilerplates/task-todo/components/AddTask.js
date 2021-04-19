import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddTask = ({addHandler, taskTaker, task}) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputField}
                placeholder="Some Task"
                value={task}
                onChangeText={(value) => {taskTaker(value)}}
            />
            <TouchableOpacity style={styles.button} onPress={() => {addHandler(task)}}>
                <Text style={styles.textField}>Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10,
        width: 200
    },
    container: {
        margin: 24,
        flex: 1
    },
    button: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'tomato',
        width: 200
    },
    textField: {
        fontSize: 20,
        fontWeight: 'bold',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    }
});

export default AddTask;