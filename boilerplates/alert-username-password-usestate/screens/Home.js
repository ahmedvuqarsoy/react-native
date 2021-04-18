import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text, Button, Alert } from 'react-native';

const Home = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const buttonClickListener = () => {
        if(username.length <= 3 || password.length <= 8) {
            Alert.alert(
                "Title - Error!",
                "Message - Form is not valid.",
                [
                    {
                        text: "Button - OK",
                        onPress: () => {console.log("Alert Error Button is clicked.")}
                    }
                ]
            )
        } else {
            Alert.alert(
                "Title - Success!",
                "Message - Form is valid.",
                [
                    {
                        text: "Button - OK",
                        onPress: () => {console.log("Alert Success Button is clicked.")}
                    }
                ]
            )
        }
    }

    const usernameHandler = (value) => {
        if(value.length === 0) {
            setMessage(null);
        } else if (value.length <= 3) {
            setMessage('* Username should be at least 3 or more character');
        } else {
            setMessage(null);
        }
        setUsername(value);
    }

    const passwordHandler = (value) => {
        setPassword(value);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputBox}
                placeholder="Username"
                onChangeText={ (value) => {usernameHandler(value)}}
            />
            <Text style={{color: 'gray'}}>{message}</Text>
            <TextInput
                style={styles.inputBox}
                placeholder="Password"
                onChangeText={ (value) => {passwordHandler(value)}}
            />
            <Button
                title="Submit"
                color="#C83E4D"
                onPress={buttonClickListener}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    inputBox: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 1,
        padding: 10,
        margin: 20
    }
});

export default Home;