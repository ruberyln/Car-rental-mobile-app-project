import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Welcome = ({navigation}) => {
  return (

    <View style={styles.container}>

      <Text style={styles.boldText}>Welcome Taylor,</Text>

      <View style={styles.body}>

        <Text style={styles.Text1}>Where to begin</Text>
        
        <View style={styles.rectangleView}>
        <Image source={require("../assets/pageview.png")} style={styles.Img}></Image>
        <Text style={styles.Text}>Browse</Text>
        </View>

        <View style={styles.rectangleView2}>
        <Image source={require("../assets/car_rent.png")} style={styles.Img}></Image>
        <Text style={styles.Text}>Select</Text>
        </View>

        <View style={styles.rectangleView3}>
        <Image source={require("../assets/calendar_month.png")}style={styles.Img}></Image>
        <Text style={styles.Text}>Book Dates</Text>
        </View>

        <View style={styles.rectangleView4}>
        <Image source={require("../assets/credit_card.png")} style={styles.Img}></Image>
        <Text style={styles.Text}>Pay</Text>
        </View>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate('Display')} >
          <Text style={styles.buttontxt}>Let's Go</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  body: {
    flex: 7,
    backgroundColor: '#fff',
  },

  boldText: {
    flex: 1,
    top: 50,
    fontSize: 35,
    left: 10,
    padding: 5
  },

  Text1: {
    fontSize: 25,
    left: 10,
    top: 50
  },

  Text: {
    textAlign: 'center',
    fontSize: 18
  },

  rectangleView: {
    position: "absolute",
    justifyContent:'center',
    alignItems:'center',
    top: 150,
    left: 50,
    borderRadius: 10,
    backgroundColor: "#617ee4",
    width: 130,
    height: 120,
  },

  rectangleView2: {
    position: "absolute",
    justifyContent:'center',
    alignItems:'center',
    top: 150,
    right: 50,
    borderRadius: 10,
    backgroundColor: "#8edcb7",
    width: 130,
    height: 120,
  },

  rectangleView3: {
    position: "absolute",
    justifyContent:'center',
    alignItems:'center',
    top: 320,
    left: 50,
    borderRadius: 10,
    backgroundColor: "#f6f5cd",
    width: 130,
    height: 120,
  },

  rectangleView4: {
    position: "absolute",
    justifyContent:'center',
    alignItems:'center',
    top: 320,
    right: 50,
    borderRadius: 10,
    backgroundColor: "#e4a861",
    width: 130,
    height: 120,
  },

  button: {
    top: 500,
    left: 50,
    borderRadius: 25,
    backgroundColor: "#647ee4",
    width: 300,
    alignItems:'center',
    justifyContent:'center',
    height: 60
  },

  buttontxt: {
    fontSize: 30,
    textAlign:'center',
    justifyContent:'center',
    color: '#fff'
  },

  Img: {
    height: 25,
    width: 25
  }

})
