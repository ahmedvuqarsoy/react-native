import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'shaun', id: '1'},
    { name: 'yoshi', id: '2'},
    { name: 'mario', id: '3'},
    { name: 'luigi', id: '4'},
    { name: 'peach', id: '5'},
    { name: 'turod', id: '6'},
    { name: 'bowse', id: '7'}
  ])
  
  return (

    <View style={styles.container}>
      <FlatList
      // If your keyname is key
      // You don't need keyExtractor function
        keyExtractor={(item) => {
          item.id
        }}
        numColumns={3}
        data={people}
        renderItem={({item}) => (
          <Text style={styles.item}>My name is {item.name}</Text>
        )}
      />
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
