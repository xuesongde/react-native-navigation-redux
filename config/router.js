import React from 'react';
import AppPage from '../pages/App';
import Profile from '../pages/Profile';
import Animated from '../pages/Animated';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Animated" component={Animated} />
        <Stack.Screen
          name="Home"
          component={AppPage}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
