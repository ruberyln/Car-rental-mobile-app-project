
import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';


const Summary = ({navigation,route}) => {
    return (
        <View style= {styles.container}>
            <Text style = {styles.text}> Order Summary</Text>
        <View style={styles.box}>
            <View style = {{flexDirection:"row",paddingTop:15,}}>
            <Image style= {{flexDirection:"row",paddingTop:15,  width:20, height:20,}}
                            source={require('./src/car.png')} />
                     <Text style = {{fontSize:16,}}>
                     Car: Honda Accord
                </Text>
            </View>

            <View style = {{flexDirection:"row",paddingTop:30,}}>
            <Image style= {{flexDirection:"row",paddingTop:15, width:20, height:20,}}
                            source={require('./src/calendar.png')} />
                     <Text style = {{fontSize:16,}}>
                     Pick-Up Date:{route.params.startDate}
                </Text>
            </View>

            <View style = {{flexDirection:"row",paddingTop:30,}}>
            <Image style= {{flexDirection:"row",paddingTop:15, width:20,height:20,}}
                            source={require('./src/calendar.png')} />
                     <Text style = {{fontSize:16, }}>
                     Return Date: {route.params.EndDate}
                </Text>
            </View>
            
            <View style = {{flexDirection:"row",paddingTop:30,}}>
            <Image style= {{flexDirection:"row",paddingTop:15, width:20, height:20,}}
                            source={require('./src/map.png')} />
                     <Text style = {{fontSize:16, }}>
                     PickUp location: 2409 Dewdney Avenue, Regina, SK
                </Text>
            </View>

            <View style = {{flexDirection:"row",paddingTop:80,}}>
           
                     <Text style = {{fontSize:30, fontWeight:"bold"}}>
                    Total: $150
                </Text>
            </View>
            <TouchableOpacity style={styles.box2}
            onPress={() => navigation.navigate('PaymentOptions')} >
          <Text style={styles.buttontxt}>Pay Now</Text>
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


    })
export default Summary;