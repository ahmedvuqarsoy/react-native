import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const Home = () => {

    const [count, setCount] = useState(0);

    const plusHandler = () => {
        console.log(count);
        setCount(count+1);
    };

    const minusHandler = () => {
        if((count - 1) <= 0 ) {
            setCount(0);
        } else {
            setCount(count-1);
        }
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.counter}>{count}</Text>

            <TouchableOpacity style={styles.buttonPlus} onPress={plusHandler}>
                <Text style={styles.text}>+PLUS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonMinus} onPress={minusHandler}>
                <Text style={styles.text}>-MINUS</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPlus: {
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 100,
        paddingVertical: 20
    },
    buttonMinus: {
        backgroundColor: 'tomato',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 100,
        paddingVertical: 20
    },
    text: {
        color: 'white',
        fontSize: 18
    },
    counter: {
        fontSize: 24
    }
});

export default Home;