import { View, StyleSheet, Text, Image } from 'react-native'
import React, {useEffect} from 'react';

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('TODO Application');
        },3500);
    })
    return (
        <View style={styles.container}>
            <Image style={{borderRadius: 40, width: 180, height: 170}} source={require('../assets/splash-logo.png')}/>
            <Text style={styles.head}> TODO APPLICATION</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4511e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    head: {
        color: 'white',
        marginTop: 20,
        fontSize:30,
        fontWeight: 'bold'
    }
})