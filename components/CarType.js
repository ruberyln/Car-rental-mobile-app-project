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
} from "react-native";

const CarType = () => {
    return (
        <View style={styles.container}>

            <View style={styles.card1} >
                
                <TouchableOpacity style={styles.family} >
                    <Text >Family Brands</Text>
                </TouchableOpacity></View>

            <View style={styles.card2} >
                <TouchableOpacity style={styles.luxury}>
                    <Text style={styles.loginText}>Luxury Brands</Text>
                </TouchableOpacity></View>

            <View style={styles.card3} >
                <TouchableOpacity style={styles.popular}>
                    <Text style={styles.loginText}>Popular Brands</Text>
                </TouchableOpacity></View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#ffff",
        alignItems: "flex-start",
        justifyContent: "flex-start",


    },
    card1:{
        width: "30%",
    borderRadius: 5,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#8EDCB7",
    marginLeft: 5,
    marginRight: 5,
    flex: 1,

    },
    card2:{
        width: "30%",
        borderRadius: 5,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#617EE4",
        marginLeft: 5,
        marginRight: 5,
        flex: 1, 
    },
    card3:{
        width: "30%",
        borderRadius: 5,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#F6F5CD",
        marginLeft: 5,
        marginRight: 5,
        flex: 1,

    },
family:{
    
    backgroundColor: "#8EDCB7",
},
    card: {
        width: "30%",
        borderRadius: 5,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#617EE4",
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
    },




    // loginBtn: {
    //   width: "30%",
    //   borderRadius: 5,
    //   height: 30,
    //   alignItems: "center",
    //   justifyContent: "center",
    //   marginTop: 40,
    //   backgroundColor: "#617EE4",


    // },
});

export default CarType