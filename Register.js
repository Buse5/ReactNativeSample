import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button, Avatar, HelperText } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import PhoneInput from 'react-native-phone-number-input';

export default function Register({ navigation }) {
  const [userName, setuserName] = useState('');
  const [userSurname, setuserSurname] = useState('');
  const [userPhone, setuserPhone] = useState('');
  const [userMail, setuserMail] = useState('');
  const [userPass, setuserPass] = useState('');

  const onChangeText = (text) => setuserMail(text);

  const hasErrors = () => {
    return !userMail.includes('@gmail.com');
  };

  //create function
  const fncRegister = () => {
    if (userName === '') {
      Alert.alert('Name can not empty!');
    } else if (userSurname === '') {
      Alert.alert('Surname can not empty!');
    } else if (userPhone === '') {
      Alert.alert('Phone can not empty!');
    } else if (userMail === '') {
      Alert.alert('Mail can not empty!');
    } else if (userPass === '') {
      Alert.alert('Password can not empty!');
    } else {
      console.log('fncLogin call', userName, userSurname);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignSelf: 'center', marginTop: 10 }}>
          <Avatar.Image
            style={{ backgroundColor: 'transparent' }}
            size={150}
            source={require('./assets/hero1.png')}
          />
        </View>
        <Text style={styles.txtTitle}>Register</Text>
        <TextInput
          label="Name"
          value={userName}
          onChangeText={(text) => setuserName(text)}
          mode="outlined"
          keyboardType="email-address"
          style={styles.txtField}
        />
        <TextInput
          label="Surname"
          value={userSurname}
          onChangeText={(text) => setuserSurname(text)}
          mode="outlined"
          keyboardType="email-address"
          style={styles.txtField}
        />
        <View>
          <TextInput
            label="Email"
            value={userMail}
            onChangeText={(text) => setuserMail(text)}
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
          value={userPass}
          onChangeText={(text) => setuserPass(text)}
          mode="outlined"
          secureTextEntry={true}
          style={styles.txtField}
        />
        <TextInput
          label="Phone"
          value={userPhone}
          onChangeText={(text) => setuserPhone(text)}
          mode="outlined"
          keyboardType="phone-pad"
          style={styles.txtField}
        />
        <View style={styles.phone}>
          <PhoneInput
            label="phone"
            value={userPhone}
            onChangeText={(text) => setuserPhone(text)}
          />
        </View>
        <View style={styles.cardView}>
          <Button
            style={styles.btnStyle}
            mode="contained"
            icon="account-arrow-right"
            onPress={() => fncRegister()}>
            Register
          </Button>
          <Button
            style={styles.btnStyle}
            mode="contained"
            icon="login"
            onPress={() => navigation.navigate('login')}>
            Login
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
  phone: {
    width: 250,
    marginTop: 10,
    marginLeft: 20,
  },
});
