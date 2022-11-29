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
import { isValidEmail, isValidObjField, updateError } from './methods'

const validationSchema = Yup.object({
  firstName: Yup.string().required('first is required!'),
  lastName: Yup.string().required('last is required!'),
  email: Yup.string().required('Email is required!'),
  password: Yup.string().required('password is required!'),
});


const SignUp = ({ navigation }) => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');


  const isValidForm = () => {
    // we will accept only if all of the fields have value
    if (!isValidObjField(userData))
      return updateError('Required all fields!', setError);
    // if valid name with 3 or more characters
    if (!firstName.trim() || firstName.length < 3)
      return updateError('Invalid name!', setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError('Invalid email!', setError);
    // password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError('Password is less then 8 characters!', setError);


    return true;
  };


  const { firstName, lastName, email, password } = userData;

  const handleOnChangeText = (value, fieldName) => {
    setUserData({ ...userData, [fieldName]: value });
  };

  const signUp = async (values, formikActions) => {

    const res = await client.post('/signup', {
      ...values
    });
    navigation.navigate("Welcome");
    // console.log(values);
  };





  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstname] = useState("");
  // const [lastName, setLastName] = useState("");
  return (
    <View
      style={styles.container}>
      <Formik initialValues={userData} validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({ values, errors, handleBlur, touched, handleChange, handleSubmit }) => {
          // console.log(values);


          const { firstName, lastName, email, password } = values;
          return(
           <>
            <View style={styles.first}>
              <Text style={styles.welcome}>Let's Get You Started ! </Text>
          
            </View>
            {error ? (<Text style={{ color: 'red', fontSize: 16 }}>{error}</Text>)
                : null
              }
            <View style={styles.inputView}>
              <TextInput
                style={styles.input}
                value={firstName}
                placeholder='Firstname'
                onBlur={handleBlur('firstName')}
                error={touched.firstName && errors.firstName}
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
                value={password}
                error={touched.password && errors.password}

                onBlur={handleBlur('password')}
                secureTextEntry={true}
                autoCapitalize="none"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('password')}
              /></View>


            <TouchableOpacity style={styles.signUpBtn} onPress={handleSubmit}>

              <Text style={styles.signUpTxt}>Create Account</Text>
            </TouchableOpacity>
          </>)
        }}

      </Formik>

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