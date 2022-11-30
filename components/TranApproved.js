import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const TranApproved = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={require('./approved.png') }    style={styles.image}/>
          <View style={styles.first}>
          <Text style={styles.msg}>Transaction  </Text>
          <Text style={styles.msg}>Approved</Text>
          </View> 

          <View  style= {styles.txt}>
          <Text style = {{fontSize:20, paddingTop:10}}> Please Check your Email to view order summary and our return policy </Text>
          <Text style =  {{fontSize:20, fontWeight:"bold"}}>Thank you for using Turbo</Text>
          </View>

          <TouchableOpacity style={styles.returnbtn}
          onPress={() => navigation.navigate('Display')}>
          <Text style={styles.buttontxt}>RETURN TO HOME</Text>
        </TouchableOpacity>  
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
      height:100,
      width:100,
      
      
    },
    first:{
        alignItems: "center",
        justifyContent: "center",
      paddingBottom:100,
      paddingLeft:30,
      paddingRight:30,
    },
    returnbtn: {
        width: "80%",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#617EE4",
      },
   msg:{
   
    fontSize:32,
    fontWeight:'bold',
  
txt:{
 alignItems:"center",
 justifyContent:"center",
 fontSize:20,
 fontWeight:"bold"

},

txt1:{

  fontSize:40,
  fontWeight:"bold"
 
 },

    
   },   
   buttontxt: {
    fontSize: 20,
    textAlign:'center',
    color: '#fff',
    fontWeight:"bold"
  },

  });

export default TranApproved