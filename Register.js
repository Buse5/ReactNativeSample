import React, { useState } from 'react';
import validator from 'validator';
import { Text, View, StyleSheet, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { TextInput, Button, Avatar } from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Axios from 'axios';

export default function Register({ navigation }) {
  // useState Using
  const [userName, setuserName] = useState('');
  const [userSurname, setuserSurname] = useState('');
  const [userPhone, setuserPhone] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const [passStatus, setPassStatue] = useState(true);

  // create Function
  const fncRegister = () => {
    //setPassStatue(false)
    if (userName == '') {
      Alert.alert('userName Empty!');
    } else if (userSurname == '') {
      Alert.alert('userSurname Empty!');
    } else if (userPhone == '') {
      Alert.alert('userPhone Empty!');
    } else if (password == '') {
      Alert.alert('Password Empty!');
    } else if (validator.isEmail(email) == false) {
      Alert.alert('email not correct!');
    } else {
      // &userName=demo&userSurname=demo&userPhone=05333333333&userMail=a@a.com&userPass=123456
      /*
      console.log(
        'fncRegister Call',
        userName,
        userSurname,
        userPhone,
        password,
        email
      );
      */

      const url = 'https://www.jsonbulut.com/json/userRegister.php';
      const params = {
        ref: 'c7c2de28d81d3da4a386fc8444d574f2',
        userName: userName,
        userSurname: userSurname,
        userPhone: userPhone,
        userMail: email,
        userPass: password,
      };
      Axios.get(url, { params: params }).then((res) => {
        const u = res.data.user[0];
        const durum = u.durum;
        const message = u.mesaj;
        console.log(durum, '', message);
        if (durum == true) {
          Alert.alert(message+"Kayıt başarılı, giriş yapınız :)")
          navigation.navigate("login")
        } else {
          Alert.alert(message);
        }
      });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ alignSelf: 'center', marginTop: 10 }}>
          <Avatar.Image
            style={{ backgroundColor: 'transparent' }}
            size={50}
            source={require('./assets/hero1.png')}
          />
        </View>

        <Text style={styles.txtTitle}>User Register</Text>

        <TextInput
          label="userName"
          value={userName}
          onChangeText={(text) => setuserName(text)}
          mode="outlined"
          keyboardType="email-address"
          style={styles.txtFiled}
          autoCapitalize="none"
        />

        <TextInput
          label="userSurname"
          value={userSurname}
          onChangeText={(text) => setuserSurname(text)}
          mode="outlined"
          keyboardType="email-address"
          style={styles.txtFiled}
          autoCapitalize="none"
        />

        <TextInput
          label="userPhone"
          value={userPhone}
          onChangeText={(text) => setuserPhone(text)}
          mode="outlined"
          keyboardType="phone-pad"
          style={styles.txtFiled}
          autoCapitalize="none"
        />

        <TextInput
          label="E-Mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          keyboardType="email-address"
          style={styles.txtFiled}
          autoCapitalize="none"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          mode="outlined"
          secureTextEntry={passStatus}
          style={styles.txtFiled}
        />

        <Button
          style={styles.btnStyle}
          onPress={() => fncRegister()}
          icon="login"
          mode="contained">
          Register
        </Button>
      </ScrollView>

      <View style={styles.footerCard}>
        <AwesomeIcon
          name="google"
          size={30}
          color="#bababa"
          style={{ textAlign: 'center' }}
        />
        <Text style={styles.footerCartText}>
          {' '}
          Neque porro quisquam est qui dolorem{' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  },
  txtTitle: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,
    color: '#598ee3',
    marginBottom: 0,
  },
  btnStyle: {
    marginTop: 20,
    padding: 10,
  },
  txtFiled: {
    marginTop: 10,
  },
  footerCard: {
    margin: 10,
  },
  footerCartText: {
    textAlign: 'center',
  },
});
