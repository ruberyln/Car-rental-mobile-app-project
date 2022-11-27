import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
//const image = { uri: "https://reactjs.org/logo-og.png" };

const GetStarted = ({navigation}) => {


  return (
    <View style={styles.container}>
        <ImageBackground
        source={require('./logo.jpg')}
        resizeMode="stretch"
        style={styles.img}>
      <View style={styles.first}>
        <Text style={styles.welcome}>TURBO</Text>
        <Text style={styles.ride}>A ride of a lifetime</Text>
      </View>
      <StatusBar style="auto" />

      <View style={styles.left}>

        <TouchableOpacity style={styles.getStaretdBtn} onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.txt}>GET STARTED</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>

          <Text style={styles.forgot_button}>"I already have an account"</Text>
        </TouchableOpacity>
      </View>

      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  ride:{
    fontSize: 15,
    fontWeight: 'bold',
    color:'white',
  },


  
  first: {
    paddingBottom: 100,
    flex:8,
    alignItems: "flex-start",
    justifyContent: "center", 
 
  },
  welcome: {
    // fontfamily: "Cormorant Garamond",
    fontSize: 42,
    fontWeight: 'bold',
    color:'white',
    fontFamily:'serif',
    letterSpacing:4,


  },

left:{
  flex :2,
  alignItems: "center",
    justifyContent: "center",
},

  forgot_button: {
    height: 30,
    
    color:'white',
    marginTop:15,
    borderBottomWidth:1,
borderBottomColor:'white',

  },
img:{
  width:'100%',
  height:'100%',
},
  getStaretdBtn: {
    width: "60%",
    borderRadius: 15,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#617EE4",
  },
});

export default GetStarted