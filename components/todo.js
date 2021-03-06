import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity , Text, View, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { IconButton, TextInput } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Todo({ navigation }) {
  const isFocused = useIsFocused();
  const [taskItems, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isFocused)
      updateTasks();
  }, [isFocused]);

  const updateTasks = async () => {
    const keys = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiGet(keys).then((data) => {
      setTasks(data);
    }).catch((error) => {
      console.log(error);
    });
  }


  const Task = (props) => {
    const deleteTask = async (title) => {
      try {
        await AsyncStorage.removeItem(title);
        updateTasks();
      }
      catch (exception) {
        console.error(exception)
      }
    }

    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <View style={styles.centerView}>
            <Text style={styles.itemTitle}>{props.title}</Text>
            <View><Text style={styles.itemDesc}>{props.desc}</Text></View>
          </View>
        </View>
        <></>
        <IconButton
          icon="delete-forever"
          size={25}
          color='blue'
          onPress={() => { deleteTask(props.title) }}
        />
      </View>
    );
  }

  const searchResults = (searchQuery) => {
    let searchList = []
    taskItems.map((item, index) => {
      if(item[0].includes(searchQuery)) {
        searchList.push(
          <TouchableOpacity key={index}>
            <Task title={item[0]} desc={item[1]} />
          </TouchableOpacity>
        )
      }
    })
    return searchList;
  } 
    return (
      <View style={styles.body}>
        <View style={styles.taskContent}>
        <TextInput
          mode='outlined'
          placeholder='Search any TODO Task'
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />  
        </View>
        <View style={styles.taskContent}>
          <ScrollView>
          {
            searchQuery.length < 1 ?
              taskItems.map((item, index) => {
                return <TouchableOpacity key={index}>
                  <Task key={index} title={item[0]} desc={item[1]} />
                </TouchableOpacity>
            })
            : searchResults(searchQuery)
          }
        </ScrollView> 
        
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Add Title and Description');
          }}
            >
              <FontAwesome5 
                name={'plus'}
                size={20}
                color={'#fff'}
              />
          </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#E8EAED',
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#f4511e',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        right:20,
        elevation: 5
    },
    item: {
      marginTop: 15,
      backgroundColor: '#FFF',
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
  
    itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
  
    square: {
      width: 24,
      height: 24,
      backgroundColor: '#f4511e',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 15,
    },
    centerView: {
      width: '70%'
    },
    itemDesc: {
      fontSize: 12,
    },
    itemTitle: {
      fontWeight: 'bold',
      fontSize: 17,
    },
    scrollViewStyle: {
      justifyContent: 'center'
    },
    taskContent: {
      paddingTop: 10,
      paddingLeft: 20,
      paddingRight: 20,
    }
})

export default Todo;