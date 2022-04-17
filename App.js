import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from './components/todo';
import TitleDescription from './components/title';
import SplashScreen from './components/SplashScreen';

const Stack = createNativeStackNavigator();

function App() {  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash Screen'>
        <Stack.Screen 
          options={{headerShown: false}}
          name="Splash Screen"
          component={SplashScreen}     
        />
        <Stack.Screen 
          name="TODO Application"
          component={Todo} 
          options={{
          title: 'TODO Application',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerLeft: (props) => null,
          headerTintColor: '#fff',
          headerBackTitle: "Back",
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
        />
        <Stack.Screen 
        name="Add Title and Description"
        component={TitleDescription} 
        options={{
          title: 'Add Title and Description',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;