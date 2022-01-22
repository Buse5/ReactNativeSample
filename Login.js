import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button, Avatar, HelperText } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

export default function Login({ navigation }) {
  //useState using
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //create function
  const fncLogin = () => {
    if (email == '') {
      Alert.alert('Email can not empty!');
    } else if (password == '') {
      Alert.alert('Password can not empty!');
    } else {
      console.log('fncLogin call', email, password);
    }
  };

  const onChangeText = (text) => setEmail(text);

  const hasErrors = () => {
    return !email.includes('@gmail.com');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignSelf: 'center', marginTop: 40 }}>
          <Avatar.Image
            style={{ backgroundColor: 'transparent' }}
            size={150}
            source={require('./assets/hero1.png')}
          />
        </View>
        <Text style={styles.txtTitle}>User Login</Text>
        <View>
          <TextInput
            label="E-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
            mode="outlined"
            keyboardType="email-address"
            style={styles.txtField}
            autoCapitalize="none" //küçük harf ile başlasması için
          />
          <HelperText type="error" visible={hasErrors()}>
            Email address is invalid!
          </HelperText>
        </View>
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry={true}
          style={styles.txtField}
        />
        <View style={styles.cardView}>
          <Button
            style={styles.btnStyle}
            mode="contained"
            icon="login"
            onPress={() => fncLogin()}>
            Login
          </Button>

          <Button
            style={styles.btnStyle}
            mode="contained"
            icon="account-arrow-right"
            onPress={() => navigation.navigate('register')}>
            Register
          </Button>
        </View>
      </ScrollView>
      <View style={styles.footerCart}>
        <AwesomeIcon
          name="google"
          size={30}
          style={{ textAlign: 'center' }}
          color="#bababa"
        />
        <Text style={styles.footerCartText}>My First ReactNative</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: 'white',
  },
  txtTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    color: '#598ee3',
  },
  btnStyle: {
    marginTop: 20,
    padding: 10,
  },
  txtField: {
    marginTop: 10,
  },
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerCart: {
    margin: 10,
  },
  footerCartText: {
    textAlign: 'center',
  },
});
