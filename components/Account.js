
import React from "react";
import { useState } from "react";
import call from 'react-native-phone-call'
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';


const Account = ({navigation,route}) => {
    const Tap = async()=> {
        const status = await SMS.sendSMSAsync(
            '6395603455',
        );
    console.log(status);
    };
    
    const [inputValue, setInputValue] = useState('6395603455');
    
       const triggerCall =() => {
    
        const args = {
          number: inputValue,
          prompt: true,
         // skipCanOpen: true // Skip the canOpenURL check
        };
        //Make a call
        call(args).catch(console.error)
     };

     return (
        <View style= {styles.container}>
            <Text style = {styles.text}> Hello User</Text>
         <View style={styles.box}>
            <View style = {{flexDirection:"row",paddingTop:50,}}>
            <Image style= {{flexDirection:"row",paddingTop:15,  width:20, height:20,}}
                            source={require('./src/profile.png')} />
                            <TouchableOpacity>
                     <Text style = {{fontSize:16,}}>
                    Account details 
                </Text>
                </TouchableOpacity>
            </View>

            <View style = {{flexDirection:"row",paddingTop:50,}}>
            <Image style= {{flexDirection:"row",paddingTop:15, width:20, height:20,}}
                            source={require('./src/support.png')} />
                            <TouchableOpacity onPress ={triggerCall}>
                     <Text style = {{fontSize:16,}}>
                    Contact Support 
                </Text>
                </TouchableOpacity>
            </View>

            <View style = {{flexDirection:"row",paddingTop:50,}}>
            <Image style= {{flexDirection:"row",paddingTop:15, width:20,height:20,}}
                            source={require('./src/logout.png')} />
                            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                     <Text style = {{fontSize:16,}}>
                    Log Out
                </Text>
                </TouchableOpacity>
            </View>
            
         
    
        </View>
        <View style ={styles.footer}>
            <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate('Display')} >
      <Image source={require("./src/browse.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Browse</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.tabs}>
      <Image source={require("./src/peoples.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Trips</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate('Cameras')} >
      <Image source={require("./src/camera2.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate('Account')}>
      <Image source={require("../assets/profile.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Account</Text>
      </TouchableOpacity>
      </View>
        
</View>
    )


};

const styles =
    StyleSheet.create({

     container: {
alignItems:"center"

        },
        icons: {
            width: 20,
            height: 20,
            alignItems: 'center',
            marginTop: 8,
            //marginRight:25,
           // marginLeft: 25,
            
        },
        buttontxt:{
            buttontxt: {
                fontSize: 30,
                textAlign:'center',
                color: '#fff'
              },
        },

        text: {

           // paddingTop: 10,
            fontWeight: 'bold',
            fontSize: 32,
          
            alignItems:"center",
            justifyContent:"center",
           
        },

        box: {
            backgroundColor: "#F5F1F1",
            padding: 0,
            marginVertical: 8,
            marginHorizontal: 6,
            width: 380,
            height: 401,
            borderBottomEndRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,


        },
        box2: {
            borderRadius: 15,
            backgroundColor: "#617ee4",
            width: 310,
            alignItems:'center',
            justifyContent:'center',
            height: 60,
            marginVertical:200,
          },
    
          buttontxt: {
            fontSize: 20,
            textAlign:'center',
            color: '#fff',
            fontWeight:"bold",
          },

          icon: {
            width: 25,
            margin: 5,
            height: 25,
            padding: 5
          },
      
          tabs: {
            margin: 10,
            padding: 15,
            alignItems:'center',
            justifyContent:'center'
          },
      
          ttitle: {
            fontSize: 15
          }, 

          footer : {
            flexDirection:"row",
            alignItems:'center',
            justifyContent:'center',
            paddingLeft:12,
            paddingTop:220
          }

    })
export default Account;