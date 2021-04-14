import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'shaun', key: '1'},
    { name: 'yoshi', key: '2'},
    { name: 'mario', key: '3'},
    { name: 'luigi', key: '4'},
    { name: 'peach', key: '5'},
    { name: 'turod', key: '6'},
    { name: 'bowse', key: '7'}
  ])
  
  return (
    // Old way of List creating
    <View style={styles.container}>
      { people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>My name is {item.name}.</Text>
          </View>
        )
      }) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
