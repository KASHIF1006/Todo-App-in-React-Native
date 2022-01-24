import React, { useState } from 'react';
import {StyleSheet,View, Text} from 'react-native';
import { Checkbox } from 'react-native-paper';

function CompleteTask({ route, navigation }) {
    const { title, desc} = route.params;
    const [checked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.itemTitle}>{title}</Text>
            <Text style={styles.itemDesc}>{desc}</Text>
            <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => {
                    setChecked(!checked);
                }}
            />
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        padding: 20,
    },
    itemTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-medium',
    },
    itemDesc: {
        fontSize: 17,
        fontWeight: '600',
        fontFamily: 'sans-serif-light',
        marginTop: 10,
        marginLeft: 10
    }
});

export default CompleteTask;