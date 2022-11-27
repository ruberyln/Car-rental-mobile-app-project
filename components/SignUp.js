import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import client from '../api/client';
import axios from "axios";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  return (
    <View
      style={styles.container}>
      <Formik initialValues={userData} validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({ values, errors, handleBlur, touched, handleChange, handleSubmit }) => {
          // console.log(values);
          

          const { firstName, lastName, email, password } = values;
          return <>
            <View style={styles.first}>
              <Text style={styles.welcome}>Let's Get You Started ! </Text>
              {error ? (<Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>)
                : null
              }
            </View>

            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                value={firstName}
                placeholder='Firstname'

                autoCapitalize="none"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('firstName')}
              /></View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                value={lastName}
                placeholder='Last Name'
                autoCapitalize="none"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('lastName')}
              /></View><View style={styles.inputView}>
              <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur('email')}
                autoCapitalize="none"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('email')}
              /></View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(password) => setPassword(password)}
        /></View>
      
 
  <TouchableOpacity style={styles.signUpBtn}>
          <Text style={styles.signUpTxt}>Create Account</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    // width: 350,
    // height: 55,
    // backgroundColor: '#42A5F5',
    // margin: 10,
    // padding: 8,
    // color: 'white',
    // borderRadius: 14,
    // fontSize: 18,
    // fontWeight: '500',
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  signUpBtn: {
    width: "80%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#617EE4",
  },
  signUpTxt: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: "bold"
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  first: {
    paddingBottom: 100,
  },
  welcome: {

    fontSize: 32,
    fontWeight: 'bold',


  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SignUp