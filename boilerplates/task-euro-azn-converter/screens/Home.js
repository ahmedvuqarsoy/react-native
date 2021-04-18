import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Home = () => {

    const [manat, setManat] = useState(0);
    const [euro, setEuro] = useState(0);
    const [icon, setIcon] = useState('chevron-down');

    // Change values of currencies
    const euroHandler = (value) => {
        setEuro(value);
        console.log(manat, euro);
    };

    const manatHandler = (value) => {
        setManat(value);
        console.log(manat, euro);
    };

    const buttonHandler = (icon) => {
        console.log(icon)
        if(icon === 'chevron-down') {
            setManat(euro*2);
        } else {
            setEuro(manat/2);
        }
    };

    // Chevron Type Changer
    const iconHandler = (val) => {
        if(val === 'euro') {
            setIcon('chevron-down');
        } else {
            setIcon('chevron-up');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Euro & Azn Converter</Text>
            <View>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                onChangeText={(value) => {euroHandler(value)}}
                placeholder={euro}
                onFocus={ () => {iconHandler('euro')}}
                value={euro}
            />
            {/* <Text style={styles.label}>EUR</Text> */}
            </View>

            <TouchableOpacity onPress={() => {buttonHandler(icon)}}>
                <Entypo name={icon} size={32} color="white" />
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                keyboardType='number-pad'
                onChangeText={(value) => {manatHandler(value)}}
                placeholder={manat}
                onFocus={ () => {iconHandler('manat')}}
                value={manat}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4F97A3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 22,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center'
    },
    input: {
        height: 50,
        width: 300,
        paddingLeft: 20,
        paddingRight: 10,
        margin: 30,
        borderRadius: 0,
        backgroundColor: 'white',
        textAlign: 'left',
        fontSize: 16,
        fontWeight: 'bold',
        position: 'relative'
    },
    label: {
        position: 'absolute',
        right: 20,
        top: 13,
        fontSize: 16
    }
});

export default Home;