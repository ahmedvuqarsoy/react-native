import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Keyboard, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';


import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Sandbox from './components/Sandbox';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy a hot coffee', key: '1'},
    { text: 'go to the doctor', key: '2'},
    { text: 'do final project', key: '3'}
  ])

  const pressHandler = (key) => {
    setTodos( (prevTodos) => {
      return prevTodos.filter( (todo) => todo.key != key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setTodos( (prevTodos) => {
        return ([...prevTodos, {text: text, key: Math.random().toString()}])
      });
    } else {
      Alert.alert('ERROR', 'It must be over three characters.', [
        {text: 'OK', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={ () => {
      Keyboard.dismiss()
      console.log('console dismissed')
    }}>
      <View style={styles.container}>
        {/* Header */}
        <Header/>
        <View style={styles.content}>
          {/* Form */}
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                // <Text>{item.text}</Text>
                <TodoItem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});