import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const SecurePay = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
      
      <Text style={styles.txt}>Secure Payment</Text>
      <Image source={require("../assets/secure.jpg")} style={styles.Img}></Image>
      </View>

      <View style={styles.body}>
        <View style={styles.card}>
            <Text style={styles.ctxt}>Card Number</Text>
            <TextInput style={styles.input}  placeholder='1234 5678 4321 0000' />
            
            <View style={styles.parent}>
            <Text style={styles.datetxt}>Expiry Date</Text>
            <Text style={styles.cvtxt}>CVV</Text>
            </View>

            <View style={styles.parent}>
            <TextInput style={styles.input2} keyboardType='numeric' placeholder='MM/YY' />
            <TextInput style={styles.input2} keyboardType='numeric' placeholder='000' />
            <TextInput style={styles.input2}  placeholder='MM/YY' />
            <TextInput style={styles.input2} placeholder='000' />
            </View>

        </View>

      </View>

      <View style={styles.footer}>

      <TouchableOpacity style={styles.button} 
      onPress={() => navigation.navigate('TranApproved')}>
          <Text style={styles.buttontxt}>Pay Now</Text>
      </TouchableOpacity>

      </View>

    </View>
  )
}

export default SecurePay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    head: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        padding: 5
    },

    txt: {
        textAlign:'center',
        padding: 10,
        top: 10,
        fontSize: 30
    },

    body: {
        flex: 2,
        backgroundColor: "#fff",
        alignItems:'center',
        justifyContent:'center',


    },

    card: {
        borderRadius: 15,
        padding: 15,
        margin: 10,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
       
        // width: 400,
        // height: 300
    },

    footer: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems:'center',
        justifyContent:'center'
    },

    ctxt: {
      fontSize: 15,
    },

    cvtxt: {
      fontSize: 15,
      marginRight: 85
    },

    datetxt: {
      fontSize: 15
    },

    parent: {
      flexDirection: 'row',
      justifyContent:'space-between',
      margin: 10,
      top: 5
    },

    input: {
      borderRadius: 7,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.3)",
      borderWidth: 1,
      width: 350,
      height: 60,
      padding: 10,
      margin: 5,
      top: 5
    },

    input2: {
      borderRadius: 7,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.3)",
      borderWidth: 1,
      width: 130,
      height: 50
    },

    button: {
      borderRadius: 25,
      backgroundColor: "#647ee4",
      width: 300,
      alignItems:'center',
      justifyContent:'center',
      height: 60
    },
  
    buttontxt: {
      fontSize: 20,
      textAlign:'center',
      color: '#fff',
      fontWeight:"bold"
    },

    Img: {
      height: '35%',
      width: '35%'
    },

    back: {
      width: 30,
      height: 30,
      right: 175
    },
})