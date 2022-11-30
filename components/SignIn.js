import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView 
} from "react-native";
import client from '../api/client';

const SignIn = ({ navigation }) => {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [userInfo, setUserInfo] = useState({
      email: '',
      password: '',
    });
    const [error, setError] = useState('');

    const { email, password } = userInfo;
  
    const handleOnChangeText = (value, fieldName) => {
      setUserInfo({ ...userInfo, [fieldName]: value });
    };
   
    const handleSubmit =async ()=>{
      try {
        const res = await client.post('/signin', { ...userInfo });

       
          navigation.navigate("Display");
          console.log(res.data)
   
     

        
      } catch (error) {
        console.log(error);
      }

      
    };


    return (
      // <View style={styles.container}>
            <KeyboardAvoidingView    style={styles.container}
            behavior="padding">
    
    
        <View style={styles.first}>
        <Text style={styles.welcome}>Welcome Back </Text>
      
       
        </View>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
        <Image source={require("./src/email.png")} style={styles.icon}></Image>
          <TextInput
            style={styles.TextInput}
            value={email}
            placeholder='example@email.com'
            placeholderTextColor="#003f5c"
            onChangeText={value => handleOnChangeText(value, 'email')}
          />
        </View>
  
        <View style={styles.inputView}>
        <Image source={require("./src/password.png")} style={styles.icon}></Image>
          <TextInput
            style={styles.TextInput}
            value={password}            
            placeholder='********'
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={value => handleOnChangeText(value, 'password')}
          />
        </View>
   
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
         
          <Text style={styles.forgot_button}>"Don't have an account? Sign Up"</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
          <Text style = {styles.buttontxt}>Login</Text>
        </TouchableOpacity>
        </KeyboardAvoidingView>
      // </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    buttontxt: {
      fontSize: 20,
      textAlign:'center',
      color: '#fff',
      fontWeight:"bold"

    },
    icon: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode: 'stretch',
      alignItems: 'center',
      
    },
    image: {
      marginBottom: 40,
      height:60,
      width:60,
    },
    first:{
      paddingBottom:80,
    },
   welcome:{
   
    fontSize:32,
    fontWeight:'bold',

    
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
   
    
     
   
   
   
      //alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 10,
      width:'80%',
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "60%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#617EE4",
    },
  });

export default SignIn;