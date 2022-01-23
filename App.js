import * as React from 'react';
import { View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// import pages
import Login from './Login'
import Register from './Register'
function LoginStack () {
return (
<Stack.Navigator>
    <Stack.Screen name="login" options={{ title: 'User Login' }} component={Login} />
    <Stack.Screen name="register" options={{ title: 'User Register' }} component={Register} />
</Stack.Navigator>
)}

// product stack
import Product from './Product'
import Detail from "./Detail"
function ProductStack () {
  return (
<Stack.Navigator>
  <Stack.Screen name="loginStack" options={{ headerShown: false }} component={LoginStack} />
  <Stack.Screen name="product"  options={{ title: 'Product', }} component={Product} />
  <Stack.Screen name="detail"  options={{ title: 'Detail', }} component={Detail} />
</Stack.Navigator>
)}

const navigation =
<NavigationContainer>
  <ProductStack/>
</NavigationContainer>


export default function App() {
  return (
    navigation
  );
}

