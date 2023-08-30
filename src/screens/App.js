/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import TaskItem from './TaskItem';

import AddForm from './AddForm'

const App = (props) => {
  const isDarkMode = useColorScheme() === 'dark';
  const todoTasks = props.todos.filter((item) => item.state === "todo");
  const doneTasks = props.todos.filter((item) => item.state === "done");
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.pageTitle}>Inbox</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>To Do</Text>
        {todoTasks.length !== 0 ? (
          <FlatList
            data={todoTasks}
            renderItem={(item ) => <TaskItem {...item}/>}
            keyExtractor={(item) => item.id}
          />
        ) :
        (
          <Text style={styles.emptyListText}>No to do tasks</Text>
        )}
        </View>
        <View style={styles.separator} />
        <View style={styles.listView}>
          <Text style={styles.listTitle}>Completed</Text>
          {doneTasks.length !== 0 ? (
            <FlatList
              data={doneTasks}
              renderItem={(item ) => <TaskItem {...item}/>}
              keyExtractor={(item) => item.id}
            />           
          ) : (
            <Text style={styles.emptyListText}>No completed tasks</Text>
          )}
        </View>
        <AddForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#f7f8fa',
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: '600',
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: '500',
  },
  listView: {
    flex: 1,
  },
  emptyListText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: '#737373',
  },
});

function mapStateToProps(state) {
  return {
    todos: state.app.todos,
  };
}

export default connect(mapStateToProps, null)(App)
