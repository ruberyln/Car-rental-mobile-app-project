import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native'
import React,{ useState } from 'react'


const Display = ({navigation}) => {

  const [carList, setcarList] = useState([
    {val: 'Lamborghini 2020', src: require("../assets/car.png"), rate: '$180/day', key: '1'},
    {val: 'Toyota Prado 2022', src: require("../assets/car.png"), rate: '$80/day', key: '2'},
    {val: 'Porsche', src: require("../assets/car.png"), rate: '$120/day', key: '3'},
    {val: 'Ferrari', src: require("../assets/car.png"), rate: '$300/day', key: '4'},
    {val: 'BMW', src: require("../assets/car.png"), rate: '$130/day', key: '5'},
    {val: 'Hyundai', src: require("../assets/car.png"), rate: '$40/day', key: '6'},
    {val: 'Mercedes', src: require("../assets/car.png"), rate: '$120/day', key: '7'},
    {val: 'Jeep', src: require("../assets/car.png"), rate: '$150/day', key: '8'},
  ]);

  const renderItem = ({ item, index, separators }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Product')}>
    <View style={styles.card}>

        <ImageBackground source={item.src} style={styles.carimg}>
        <Text style={styles.title}>{item.val}</Text>

        <TouchableOpacity style={styles.vbutton}
        onPress={() => navigation.navigate('Product')}>
          <Text style={styles.vbuttontxt}>View</Text>
        </TouchableOpacity>
        <Text style={styles.rate}>{item.rate}</Text>
        </ImageBackground>
    </View>
    </TouchableOpacity>
  )

  return (
   

    <View style={styles.container}>

      <View style={styles.header}>

      <TextInput style={styles.input} keyboardType='default' placeholder='Search' />
    
      <View style={styles.scroll}>

      <View style={styles.rect1}>
      <Text style={styles.txt}>Family brands</Text>
      </View>

      <View style={styles.rect2}>
      <Text style={styles.txt}>Luxury brands</Text>
      </View>

      <View style={styles.rect3}>
        <Text style={styles.txt}>Popular brands</Text>
      </View>

      </View>
      </View>

      <View style={styles.body}>
        
        {/* <View style={styles.card}> */}

        <FlatList
        numColumns={2}
        data={carList}
        renderItem={renderItem}
        />

        {/* </View> */}
        
      </View>

      <View style={styles.footer}>

      <View style={styles.scroll}>



</View>

      <TouchableOpacity style={styles.tabs}>
      <Image source={require("./src/browse.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Browse</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabs}>
      <Image source={require("./src/peoples.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Trips</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate('Cameras')} >
      <Image source={require("./src/camera2.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Camera</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tabs}>
      <Image source={require("../assets/profile.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Profile</Text>
      </TouchableOpacity>

      </View>

    </View>
  )
}

export default Display

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
      flex: 1,
      //flexDirection:row
    },

    input: {
      borderRadius: 6,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.4)",
      borderWidth: 1,
      padding: 5,
      margin: 8,
      left: 20,
      width: '85%',
      height: 40,
    },

    Img: {
      width: 30,
      margin: 5,
      height: 30
    },

    scroll: {
      flexDirection:'row',
      padding: 5,
      margin: 5,
      // backgroundColor: '#fff',
      justifyContent:'space-around'
    },

    rect1: {
      borderRadius: 5,
      backgroundColor: "#8edcb7",
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.4)",
      borderWidth: 1,
      margin: 5,
      width: 120,
      height: 30,
      alignItems:'center',
      justifyContent:'center'
    },

    rect2: {
      borderRadius: 5,
      margin: 5,
      backgroundColor: "#617ee4",
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.4)",
      borderWidth: 1,
      width: 120,
      height: 30,
      alignItems:'center',
      justifyContent:'center'
    },

    rect3: {
      borderRadius: 5,
      backgroundColor: "#f6f5cd",
      margin: 5,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.4)",
      borderWidth: 1,
      width: 120,
      height: 30,
      alignItems:'center',
      justifyContent:'center'
    },

    txt: {
      fontSize: 10,
      fontWeight: "300",
      color: "#000",
      textAlign: "center",

    },

    body: {
      flex: 5,
      alignItems:'center',
      justifyContent:'center',
      // borderWidth:
    },

    footer: {
      flex: 0,
      flexDirection:'row',
      margin: 5,
      alignItems:'center',
      justifyContent:'center',
      padding: 5
    },

    card: {
      borderRadius: 10,
      padding: 5,
      margin: 5,
      alignItems:'center',
      justifyContent:'center',
      // width: 195,
      // height: 185,
      // borderWidth: 1
    },

    title: {
      fontSize: 15,
    },

    carimg: {
      // width: 150,
      // height: 150,
      borderRadius: 10,
      padding: 5,
      margin: 5,
      width: 180,
      height: 180,
    },

    vbutton: {
      borderRadius: 7,
      backgroundColor: "#617ee4",
      width: 50,
      height: 20,
      opacity: 0.7,
      top: 120,
      left: 5
    },

    vbuttontxt: {
      textAlign:'center'
    },

    rate: {
      fontSize: 15,
      textAlign:'right',
      top: 100,
      right: 5
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
    }
})