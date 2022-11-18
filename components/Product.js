import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';


const Product = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text1}>
                <Text style={styles.productext}> Ferarri </Text>
            </View>
            <View >

                <Image style={styles.images}
                    source={require('./src/Ferraricar.png')} />
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
                        <Text style={styles.normaltext}> 2409 Dewdney Avenue Regina,SK. </Text>
                    </View>

                    <View style= {styles.container2}>

                        <Text style={styles.text2}> $180/day </Text>
                  

                     <View style ={styles.button}>
                        <Button 
                        title = "BOOK NOW"
                        color= "#617EE4"
                        />
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
           
            width :248,
            height:65,
            flexDirection:"row-reverse",
            borderBottomEndRadius: 10,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,

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

export default Product;