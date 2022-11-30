import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image
} from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import client from '../api/client';
import { isValidEmail, isValidObjField, updateError } from './methods'

const validationSchema = Yup.object({
  firstName: Yup.string().required('first name is required!'),
  lastName: Yup.string().required('last name is required!'),
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


  // const isValidForm = () => {
  //   // we will accept only if all of the fields have value
  //   if (!isValidObjField(userData))
  //     return updateError('Required all fields!', setError);
  //   // if valid name with 3 or more characters
  //   if (!firstName.trim() || firstName.length < 3)
  //     return updateError('Invalid name!', setError);
  //   // only valid email id is allowed
  //   if (!isValidEmail(email)) return updateError('Invalid email!', setError);
  //   // password must have 8 or more characters

  //   if (!password.trim() || password.length < 3)

  //   if (!password.trim() || password.length < 8)

  //     return updateError('Password is less then 8 characters!', setError);


  //   return true;
  // };


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
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
  >
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
            {errors.firstName ? (<Text style={{ color: 'red', fontSize: 16 }}>{errors.firstName}</Text>)
                : null
              }
            <View style={styles.inputView}>
            <Image source={require("./src/user.png")} style={styles.icon}></Image>
              <TextInput
                style={styles.input}
                value={firstName}
                placeholder=' First name'
                onBlur={handleBlur('firstName')}
                error={touched.firstName && errors.firstName}
                autoCapitalize="none"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('firstName')}
              /></View>
              {errors.lastName ? (<Text style={{ color: 'red', fontSize: 16 }}>{errors.lastName}</Text>)
                : null
              }
            <View style={styles.inputView}>
            <Image source={require("./src/user.png")} style={styles.icon}></Image>
              <TextInput
                style={styles.input}
                value={lastName}
                placeholder='Last Name'
                autoCapitalize="none"
                placeholderTextColor="#003f5c"
                onChangeText={handleChange('lastName')}
              /></View>
                  {errors.email? (<Text style={{ color: 'red', fontSize: 16 }}>{errors.email}</Text>)
                : null
              }
              <View style={styles.inputView}>
              <Image source={require("./src/email.png")} style={styles.icon}></Image>
            
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
    {errors.password? (<Text style={{ color: 'red', fontSize: 16 }}>{errors.password}</Text>)
                : null
              }
            <View style={styles.inputView}>
            <Image source={require("./src/password.png")} style={styles.icon}></Image>
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

   </KeyboardAvoidingView>
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
  icon: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
    
  },
  inputView: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1,
    width:"80%",
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#ffffff",
    // borderRadius: 10,
    // borderWidth: 1,
    // width: "80%",
    // height: 45,
    // marginBottom: 20,

    // // alignItems: "center",
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


  



  export default SignUp;