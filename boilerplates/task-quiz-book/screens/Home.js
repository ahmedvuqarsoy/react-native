import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Book from '../components/Book';

const Home = () => {

    const pressHandler = (key) => {
        setBooks( (prevBooks) => {
          return prevBooks.filter( (book) => book.key != key)
        })
    }

    const [books, setBooks] = useState([
        {name: 'React Fundamentals', author: 'Emiliano', key: '1'},
        {name: 'Express JS with Node!', author: 'Maurisio', key: '2'},
        {name: 'Full-Stack React Native', author: 'Amir', key: '3'},
        {name: 'The Roadmap of Developers 2021', author: 'Attila', key: '4'},
        {name: '100 Recepies in React Native', author: 'Jasmin', key: '5'}
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>List of Books</Text>

            <View style={{ flex: 1 }}>
                <FlatList 
                    data={books}
                    renderItem={({item}) => (
                        <Book name={item.name} author={item.author} id={item.key} pressHandler={pressHandler}/>
                    )}
                />
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
      margin: 24,
      padding: 20,
      fontWeight: 'bold'
  }
});

export default Home;