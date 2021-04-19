import React, {useState} from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

// Default Imports
import Todo from '../components/Todo';
import AddTask from '../components/AddTask';

const Home = () => {

    const pressHandler = (key) => {
        setTasks( (prevTasks) => {
            return prevTasks.filter( (item) => item.key != key)
        })
    };

    const addHandler = (task) => {
        setTasks( (prevTasks) => {
            return [...prevTasks, {date: '20/3/2021', task: task, key: Math.random().toString()}]
        })
        setTask('');
    }

    const taskTaker = (task) => {
        setTask(task);
    }

    const [task, setTask] = useState('');

    const [tasks, setTasks] = useState([
        {date: '18/3/2021', task: 'Having breakfast', key: '1'},
        {date: '18/3/2021', task: 'Doing exercise', key: '2'},
        {date: '18/3/2021', task: 'Walking and relaxing', key: '3'},
        {date: '18/3/2021', task: 'Coding Time', key: '4'},
        {date: '18/3/2021', task: 'Swimming Time', key: '5'},
    ])
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Task List</Text>
            <ScrollView>
                <FlatList
                    data={tasks}
                    renderItem={({item}) => (
                        <Todo date={item.date} task={item.task} id={item.key} pressHandler={pressHandler}/>
                    )}
                />
            </ScrollView>
            <AddTask addHandler={addHandler} taskTaker={taskTaker} task={task}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#468C98',
        alignItems: 'center',
    },
    header: {
        fontSize: 24,
        alignContent: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        margin: 24,
        color: 'white'
    }
});

export default Home;