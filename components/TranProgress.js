import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,

} from "react-native";

const TranProgress = () => {
  return (
    <View style={styles.container}>
        <Image source={require('./buffering.png') }    style={styles.image}/>
      <View style={styles.first}>
      <Text style={styles.msg}>Transaction in </Text>
      <Text style={styles.msg}>progress</Text>
      </View>   
    </View>
  )
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
      height:110,
      width:110,
      
      
    },
    first:{
        alignItems: "center",
        justifyContent: "center",
      paddingBottom:100,
      paddingLeft:30,
      paddingRight:30,
    },
   msg:{
   
    fontSize:32,
    fontWeight:'bold',
    fontFamily:'serif',

    
   },

   


   

  });
export default TranProgress