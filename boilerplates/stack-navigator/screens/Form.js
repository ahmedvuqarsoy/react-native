import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

// Custom Imports
import {globalStyles} from '../styles/GlobalStyle';

const Form = () => {

    const [word, setWord] = useState('');
    const [count, setCount] = useState('');

    const changeHandler = (value) => {
        setWord(value);
        const len = value.length;
        if(len === 0) {
            setCount('')
        } else {
            setCount(len);
        }
    }

    return (
        <View>
            <Text>Type any text in below input:</Text>
            <TextInput style={globalStyles.inputField} onChangeText={ (value) => {changeHandler(value)}}/>
            <Text>{word}</Text>
            <Text>{count}</Text>
        </View>
    )
}

export default Form;