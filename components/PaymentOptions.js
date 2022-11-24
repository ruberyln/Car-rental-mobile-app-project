import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import SecurePay from './SecurePay'
const PaymentOptions = ({navigation}) => {
  return (
    <View style={styles.container}>
        
        <View style={styles.header}>
        
      
        <Text style={styles.txt}>Payment Options</Text>
        <Text style={styles.txt2}>Choose most suitable payment option</Text>

        </View>

        <View style={styles.body}>
            <View style={styles.card}>

            <TouchableOpacity style={styles.options}>
                <Image source={require("../assets/mcard.png")} style={styles.logo}></Image>
                <Text style={styles.otxt}>Master Card</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Image source={require("../assets/visa.png")} style={styles.logo}></Image>
                <Text style={styles.otxt}>Visa Credit Card</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Image source={require("../assets/apay.png")} style={styles.logo}></Image>
                <Text style={styles.otxt}>Apple Pay</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.options}>
                <Image source={require("../assets/gpay.jpg")} style={styles.logo}></Image>
                <Text style={styles.otxt}>Google Pay</Text>
            </TouchableOpacity>
            </View>
        </View>
      
        <View style={styles.footer}>
        <TouchableOpacity style={styles.button}
         onPress={() => navigation.navigate('SecurePay')}>
          <Text style={styles.buttontxt}>Proceed To Payment</Text>
        </TouchableOpacity>    
        </View>
    </View>
  )
}

export default PaymentOptions

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },

    txt: {
        textAlign:'center',
        padding: 5,
        top: 5,
        fontSize: 25,
        fontWeight:"bold"
    },

    txt2: {
        textAlign:'center',
        padding: 5,
        top: 5,
        fontSize: 18
    },

    Img: {
        width: 25,
        margin: 5,
        height: 25,
        right: 175
      },
    
    body: {
        flex: 2,
        margin: 5,
        padding: 5,
        justifyContent:'center',
    },

      card: {
        borderRadius: 15,
        padding: 5,
        margin: 5,
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1
    },

    footer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },

    button: {
        borderRadius: 15,
        backgroundColor: "#617ee4",
        width: 310,
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

    otxt: {
        left: 20,
        fontSize: 15,
        textAlign: "center",

    },

    options: {
        flexDirection:'row',
        borderRadius: 15,
        padding: 12,
        margin: 12,
        borderStyle:'solid',
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,

    },

    logo: {
        width: 32,
        height: 25
    }
  
})