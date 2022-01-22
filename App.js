import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import pages
import Login from './Login';
import Register from './Register';

const Stack = createNativeStackNavigator();
const navigation = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="login" options={{title:"User Login"}} component={Login} />
      <Stack.Screen name="register" options={{title:"User Register"}} component={Register} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default function App() {
  return navigation;
}
