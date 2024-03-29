import React from "react";
import { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, onPress ,Linking} from 'react-native';
import call from 'react-native-phone-call'
import { Constants,SMS } from "expo";
import email from 'react-native-email'

import openMap from 'react-native-open-maps';
import { Link } from "@react-navigation/native";

const Product = ({navigation, route}) => {

    handleEmail = () => {
        const to = ['turbocompany@gmail.com.com', 'contactsupport@email.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['', ''], // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: 'Car Inquiry',
            body: '',
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }

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
        <View style={styles.container}>

            <View style={styles.text1}>
                <Text style={styles.productext}>{route.params.item.brand} {route.params.item.name}</Text>
            </View>
            <View >

                <Image style={styles.images}
                    source={route.params.item.src} />
                {/* <Image style = {styles.dot}
                 source= {require('./dots.png')}/> */}

                <Text style={styles.text2}>  Car Specifications </Text>
            </View >

            <View style={styles.scrollview}>
                <ScrollView
                    horizontal={true}>
                    <View style={styles.box}>

                        <Image style={styles.icons}
                            source={require('./src/convirtible.png')} />

                        <Text style={styles.text3}> convirtible</Text>



                    </View>
                  

                    <View style={styles.box}>

                        <Image style={styles.icons}
                            source={require('./src/speed.png')} />

                        <Text style={styles.text3}> {route.params.item.maxspeed}</Text>
                    </View>


                    <View style={styles.box}>

                        <Image style={styles.icons}
                            source={require('./src/2.png')} />

                        <Text style={styles.text3}>{route.params.item.seats} Seater</Text>
                    </View>

                    <View style={styles.box}>

<Image style={styles.icons}
    source={require('./src/fuel.png')} />

<Text style={styles.text3}> Economical</Text>
</View>

                </ScrollView>
                <View style={styles.design}>
                    <Text style={styles.text2}> Contact For Inquiries </Text>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.normaltext}> Ellen </Text>


                        <TouchableOpacity onPress={handleEmail}>
                        <Image style={styles.icons}
                            source={require('./src/mail.png')} />

</TouchableOpacity>
                            <TouchableOpacity onPress={triggerCall}>
                        <Image style={styles.icons}
                            source={require('./src/call.png')} />
                            </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: "column", paddingTop:10,}}>

                        <Text style={styles.normaltext}> Location </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop:10, }} >
                        <Image style={styles.icons}
                            source={require('./src/location.png')} />
                            <TouchableOpacity  onPress= {()=>{Linking.openURL("http://maps.apple.com/maps?daar=`37.484847,-122.148386`")}}>
                        <Text style={styles.normaltext}> 4749 Padwick Avenue Regina,SK. </Text>
                        </TouchableOpacity>
                    </View>

                    <View style= {styles.container2}>

                        <Text style={styles.text2}> ${route.params.item.rate}/day </Text>
                  

                     <View style = {styles.button}>
                       
                      <TouchableOpacity style ={ styles.box2}
                      onPress={() => navigation.navigate('Calendar' ) }>

                       <Text style = {styles.text}> Book Now</Text>
                       </TouchableOpacity>

                        </View>

                        </View>
                        
                </View>

            </View>




        </View>
    )



}

const styles =
    StyleSheet.create({
        container:
        {
            //flex: 1,
     
            flexDirection: "column",
            alignItems: "flex-start",
        },
        container2:{
            
            paddingTop: 50,
            flexDirection: "row",
        },
        button: {
           
            width :300,
            height:65,
            flexDirection:"row-reverse",
            alignItems: 'center',
            borderBottomEndRadius: 10,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 3,
            borderRadius: 20,
          
            fontSize :20,
        
        },
            

    
        text2: {
            fontWeight: 'bold',
            fontSize: 20,
         
        },
        text3: {
            color: "#FFFFFF",
            textAlign: "center",
            padding: 8,
          
            fontSize: 12,
        },
        normaltext: {
            fontSize: 18,
          
            paddingTop: 10,
        },

        design: {
            flex: 100,

        },
        box: {
            backgroundColor: "#161616",
            padding: 20,
            marginVertical: 8,
            marginHorizontal: 6,
            width: 128,
            height: 117,
            borderBottomEndRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            flexDirection: "column",
        },
        box2: {
            backgroundColor: "#617EE4",
            //padding: 1,
           // marginVertical: 20,
            marginHorizontal: -50,
            width: 248,
            height: 65,
            borderBottomEndRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            flexDirection: "row-reverse",
            alignItems:"center",
            justifyContent:"center",
        },
        text:{
            alignItems:"center",
            justifyContent:"center",
            color: "#ffffff",
          
            fontSize:20,
            fontWeight:"bold",
              },
        text1:
        {
            paddingTop: 100,
            paddingRight: 250,
            fontWeight: 'bold',
            fontSize: 20,
           
        },
       
        icons: {
            width: 25,
            height: 25,
            alignItems: 'center',
            marginTop: 8,
            //marginRight:25,
            marginLeft: 25,

        },
        icon: {
           // paddingTop: 10,
            width:25,
            height:25,
            //flex:1,
            //marginTop:,
        },
        images:
        {
            width: 450,
            height: 300,
            
          
        },
        productext:
        {
            fontWeight: 'bold',
            fontSize: 20,
            marginTop:-80
      

        }
    })

export default Product;