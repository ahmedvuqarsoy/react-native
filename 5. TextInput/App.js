import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  
  const [name, setName] = useState('shaun');
  const [age, setAge] = useState(30);

  const inputHandler = (value) => {
    setName(value)
  }

  const ageHandler = (value) => {
    setAge(value)
  }

  return (
    <View style={styles.container}>
      <Text>Enter name: </Text>
      <TextInput
        style={styles.input}
        placeholder='John'
        onChangeText={inputHandler}
      />

      <Text>Enter age: </Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='20'
        onChangeText={ageHandler}
      />

      <Text>name: {name}, age: {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  },
  body: {
    padding: 20,
    backgroundColor: 'yellow'
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200
  }
});
