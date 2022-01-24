import React, { useState } from 'react';
import {StyleSheet, TextInput, Button , View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function TitleDescription({ navigation }) {

    const [title, setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const readDataHandler = async () => {
        try {
            console.log(title,desc)
            await AsyncStorage.setItem(title.toString(), desc.toString())
            navigation.goBack();
        } catch (err) {
            console.log(err);
        }

        setTitle(null);
        setDesc(null);
    }

    return (
      <View style={styles.body}>
        <TextInput value={title} style={styles.input} placeholder="Enter Title Here" onChangeText={(value) => setTitle(value)}/>
        <TextInput value={desc} style={styles.desInput} placeholder="Enter Description Here" onChangeText={(value) => setDesc(value)} />
        <View style={styles.buttonStyle}>
            <Button title="Save Task" color='#f4511e' onPress={readDataHandler}/>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    input: {
        width: '90%',
        padding: 10,
        borderWidth: 1,
        backgroundColor:'#fff',
        borderColor: '#555555',
        borderRadius: 10,
        textAlign: 'left',
        fontSize: 20,
        margin: 10,
        paddingHorizontal: 10
    },
    desInput: {
        width: '90%',
        height: '20%',
        padding: 10,
        borderWidth: 1,
        backgroundColor:'#fff',
        borderColor: '#555555',
        borderRadius: 10,
        textAlign: 'left',
        fontSize: 20,
        margin: 10,
    },
    buttonStyle:{
        width: '90%',
        padding: 10
    }
});


export default TitleDescription;