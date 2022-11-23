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
    ScrollView,
} from "react-native";
import CarType from "./CarType";
import Adjust from "./Adjust";

const LuxuryCar = () => {
  return (
<Adjust/>
    
    // <View  style={styles.container}>
    //   <View  style={styles.cartype}><CarType/></View>
    //   <View style={styles.displaycar}> <Adjust/></View>
    // </View>
  )
}
const styles = StyleSheet.create({
container:{
  display:"flex",
  flexDirection:"column",
  flex:1,
},
cartype:{
  flex:2,
},
displaycar:{
  flex:8,
},

})

export default LuxuryCar