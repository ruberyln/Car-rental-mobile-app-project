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

const Adjust = () => {
    return (
      
        <View  style={styles.container}>
     
     
       <ScrollView>
       <View  style={styles.row}>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
              {/* <Text style={styles.price} >$60/day</Text> */}
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        </View>
        <View  style={styles.row}>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
              {/* <Text style={styles.price} >$60/day</Text> */}
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        </View>
        <View  style={styles.row}>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
              {/* <Text style={styles.price} >$60/day</Text> */}
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        </View>
        <View  style={styles.row}>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
              {/* <Text style={styles.price} >$60/day</Text> */}
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        </View>
        <View  style={styles.row}>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
              {/* <Text style={styles.price} >$60/day</Text> */}
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        </View>
        <View  style={styles.row}>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        <View style={[styles.demo,styles.shadowProp]}>
        <Text>lemborghini 2020</Text>
        <Image source={require('./lamb.png') }    style={styles.image}/>
        
        <TouchableOpacity style={styles.returnbtn}>
              <Text style={styles.loginText}>VIEW</Text>
              {/* <Text style={styles.price} >$60/day</Text> */}
            </TouchableOpacity> 
        <Text >$60/day</Text>
        </View>
        </View>


   
 
       
       </ScrollView>
       
       
       
       </View>
      )
}
const styles = StyleSheet.create({
  
    container: {
        display:"flex",
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
    
        backgroundColor: "#ffff",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginTop:20, 

    },
    loginText:{
        fontFamily:'serif',
    paddingTop:3,
    paddingLeft:10,

    },
    // price:{
    //     marginLeft:2,
    // },
    row:{
        display:'flex',
        flexDirection:"row",
        flexWrap:"wrap",
    },
    returnbtn:{
        backgroundColor: "#8EDCB7",
        width:"40%",
        borderRadius: 5,
        height:25,flexDirection:"row",
        
    },
    shadowProp: {
        elevation: 20,
        shadowColor: 'black',
      },
  demo:{
    // display:"flex",
    // flexDirection:"column",
    flexBasis: '40%',
  width:250,
  height:170,
  backgroundColor:"white",
  marginTop:20,
  marginLeft:20,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  paddingLeft:20,

  },
  image:{
    width:"100%", height: "60%",
    marginLeft:1,
    marginRight:1,
    marginTop:2,
  },
  
  });
export default Adjust