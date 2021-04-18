import React, {useState} from 'react';
import { Text, View } from 'react-native';

const TextChanger = () => {

    const [text, setText] = useState('If you click this text it will change.')

    const pressHandler = () => {
        setText('Text has changed.')
    }


    return (
        <View> 
            <Text onPress={pressHandler}>{text}</Text>
        </View>
    )
}

export default TextChanger;