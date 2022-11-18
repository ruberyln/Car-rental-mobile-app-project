import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert, TouchableOpacity, onPress, TouchableOpacityComponent } from 'react-native';


const Product2 = () => {
    return (
        <View style={styles.container}>
              <Image style={styles.icon}
                    source={require('./src/left.png')} />
            <View style={styles.text1}>
                <Text style={styles.productext}> Ferarri </Text>
            </View>
            <View >

                <Image style={styles.images}
                    source={require('./src/ferrari2.png')} />
                {/* <Image style = {styles.dot}
                 source= {require('./dots.png')}/> */}

                <Text style={styles.text2}> Specs</Text>
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
                            source={require('./src/fuel.png')} />

                        <Text style={styles.text3}> Economical</Text>
                    </View>


                    <View style={styles.box}>

                        <Image style={styles.icons}
                            source={require('./src/speed.png')} />

                        <Text style={styles.text3}> 320km/h</Text>
                    </View>


                    <View style={styles.box}>

                        <Image style={styles.icons}
                            source={require('./src/2.png')} />

                        <Text style={styles.text3}> Two Seater</Text>
                    </View>
                </ScrollView>
                <View style={styles.design}>
                    <Text style={styles.text2}> Contact </Text>

                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.normaltext}> Ellen </Text>

                        <Image style={styles.icons}
                            source={require('./src/message.png')} />
                        <Image style={styles.icons}
                            source={require('./src/call.png')} />
                    </View>

                    <View style={{ flexDirection: "column", paddingTop:10,}}>

                        <Text style={styles.normaltext}> Location </Text>
                    </View>

                    <View style={{ flexDirection: "row", paddingTop:10, }} >
                        <Image style={styles.icons}
                            source={require('./src/location.png')} />
                            <TouchableOpacity>
                        <Text style={styles.normaltext}> 2409 Dewdney Avenue Regina,SK. </Text>
                        </TouchableOpacity>
                    </View>

                    <View style= {styles.container2}>

                        <Text style={styles.text2}> $180/day </Text>
                  

                     <View style = {styles.button}>
                       
                      <TouchableOpacity style ={ styles.box2}>

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
            flex: 1,
            flexDirection: "column",
            alignItems: "flex-start",
        },
        container2:{
            
            paddingTop: 70,
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
            fontFamily :"serif",
            fontSize :20,
        
        },
            

    
        text2: {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'serif',
        },
        text3: {
            color: "#FFFFFF",
            textAlign: "center",
            padding: 8,
            fontFamily: "serif",
            fontSize: 12,
        },
        normaltext: {
            fontSize: 18,
            fontFamily: 'serif',
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
            fontFamily:"serif",
            fontSize:20,
            fontWeight:"bold",
              },
        text1:
        {
            paddingTop: 100,
            paddingRight: 250,
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'serif',
        },
        scrollview:
        {
            //width:"100%",
            //height:"80%",
            //alignItems:'center',
            // marginTop : 15,
            // marginRight:20,
            //marginLeft :15,

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
            width: 378,
            height: 213,
        },
        productext:
        {
            fontWeight: 'bold',
            fontSize: 20,
            fontFamily: 'serif',

        }
    })

export default Product2;