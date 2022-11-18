import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';


const Summary = () => {
    return (
        <View style= {styles.container}>
            <Text style = {styles.text}> Order Summary</Text>
        <View style={styles.box}>
            <View style = {{flexDirection:"row",paddingTop:15,}}>
            <Image style= {{flexDirection:"row",paddingTop:15,  width:20, height:20,}}
                            source={require('./src/car.png')} />
                     <Text style = {{fontSize:16, fontFamily:"serif",}}>
                     Car:
                </Text>
            </View>

            <View style = {{flexDirection:"row",paddingTop:30,}}>
            <Image style= {{flexDirection:"row",paddingTop:15, width:20, height:20,}}
                            source={require('./src/calendar.png')} />
                     <Text style = {{fontSize:16, fontFamily:"serif",}}>
                     Pick-Up Date:
                </Text>
            </View>

            <View style = {{flexDirection:"row",paddingTop:30,}}>
            <Image style= {{flexDirection:"row",paddingTop:15, width:20,height:20,}}
                            source={require('./src/calendar.png')} />
                     <Text style = {{fontSize:16, fontFamily:"serif",}}>
                     Return Date:
                </Text>
            </View>
            
            <View style = {{flexDirection:"row",paddingTop:30,}}>
            <Image style= {{flexDirection:"row",paddingTop:15, width:20, height:20,}}
                            source={require('./src/map.png')} />
                     <Text style = {{fontSize:16, fontFamily:"serif",}}>
                     PickUp location:
                </Text>
            </View>

            <View style = {{flexDirection:"row",paddingTop:80,}}>
           
                     <Text style = {{fontSize:30, fontFamily:"serif",fontWeight:"bold"}}>
                    Total:
                </Text>
            </View>
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

        text: {

           // paddingTop: 10,
            fontWeight: 'bold',
            fontSize: 32,
            fontFamily: 'serif',
            alignItems:"center",
            justifyContent:"center",
           
        },

        box: {
            backgroundColor: "#F5F1F1",
            padding: 20,
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




    })
export default Summary;