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
} from "react-native";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    return (
      <View style={styles.container}>
        <View style={styles.first}>
        <Text style={styles.welcome}>Welcome Back</Text>
        </View>
        <StatusBar style="auto" />
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
   
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
   
        <TouchableOpacity onPress={() => Linking.openURL('http://google.com')}>
         
          <Text style={styles.forgot_button}>"Don't have an account? Sign Up"</Text>
        </TouchableOpacity>
   
        <TouchableOpacity style={styles.loginBtn}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
      height:60,
      width:60,
    },
    first:{
      paddingBottom:100,
    },
   welcome:{
   
    fontSize:32,
    fontWeight:'bold',

    
   },
    inputView: {
      backgroundColor: "#ffffff",
      borderRadius: 10,
      borderWidth: 1,
      width:100,
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#617EE4",
    },
  });

export default SignIn;