import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ImageBackground, ScrollView, FlatList } from 'react-native'
import React, { useState } from 'react'
import SearchBar from 'react-native-search-bar';



const Display = ({ navigation }) => {

  // const [search, setSeacrh] = useState('');

  const [carList, setcarList] = useState(
    [
      {
        key: "1",
        brand: "Honda",
        name: "CRV",
        model: "2021",
        rate: "80",
        type: "suv",
        maxspeed: "260 km/h",
        seats: "4",
        transmission: "Auto",
        address: {
          suite: "3666",
          street: "Albert Park",
          city: "Regina",
          zipcode: "S4J 1S4"
        },
        src: require('../assets/Carimgs/crvs.png')
      },
      {
        key: "2",
        brand: "Ferrari",
        name: "F3",
        model: "2020",
        rate: "340",
        type: "sedan",
        maxspeed: "350 km/h",
        seats: "2",
        transmission: "Auto",
        address: {
          suite: "1999",
          street: "Winipeg St.",
          city: "Regina",
          zipcode: "S1H 7W3"
        },
        src: require('../assets/Carimgs/ferrari.jpeg')
      },{
          key: "2",
          brand: "Ferrari",
          name: "F3",
          model: "2020",
          rate: "340",
          type: "sedan",
          maxspeed: "350 km/h",
          seats: "2",
          transmission: "Auto",
          address: {
              suite: "1999",
              street: "Winipeg St.",
              city: "Regina",
              zipcode: "S1H 7W3"
          },
          src: require('./src/Ferraricar.png')
      },
      {
          key: "3",
          brand: "Honda",
          name: "Civic",
          model: "2017",
          rate: "70",
          type: "sedan",
          maxspeed: "240 km/h",
          seats: "4",
          transmission: "Auto",
          address: {
              suite: "3478",
              street: "Broad St.",
              city: "Regina",
              zipcode: "S7S 7S3"
          },
          src: require('./src/hondacivic.png')
      },
      {
        key: "4",
        brand: "Toyota",
        name: "Yaris",
        model: "2017",
        rate: "40",
        type: "sedan",
        maxspeed: "220 km/h",
        seats: "4",
        transmission: "Auto",
        address: {
          suite: "1273",
          street: "Winipeg St.",
          city: "Regina",
          zipcode: "S8J 7H3"
        },
        src: require('../assets/Carimgs/Vitz.png')
      },
      {
          key: "5",
          brand: "Mercedes",
          name: "Van",
          model: "2019",
          rate: "120",
          type: "van",
          maxspeed: "200 km/h",
          seats: "4",
          transmission: "Auto",
          address: {
              suite: "4271",
              street: "Albert St.",
              city: "Regina",
              zipcode: "S8R 7P3"
          },
          src: require('./src/Van.png')
      },
      {
        key: "6",
        brand: "Honda",
        name: "Accord",
        model: "2016",
        rate: "50",
        type: "sedan",
        maxspeed: "200 km/h",
        seats: "4",
        transmission: "Auto",
        address: {
          suite: "8123",
          street: "Winipeg St.",
          city: "Regina",
          zipcode: "S8S 7P2"
        },
        src: require('../assets/Carimgs/white.jpeg')
      },
      {
          key: "7",
          brand: "Porsche",
          name: "Cayman",
          model: "GT4",
          rate: "140",
          type: "suv",
          maxspeed: "270 km/h",
          seats: "4",
          transmission: "Auto",
          address: {
              suite: "8212",
              street: "Rae St.",
              city: "Regina",
              zipcode: "S8J 7H3"
          },
          src: require('./src/porsche.png')
          
      },
      {
        key: "8",
        brand: "Toyota",
        name: "Prado",
        model: "2022",
        rate: "130",
        type: "suv",
        maxspeed: "230 km/h",
        seats: "7",
        transmission: "Auto",
        address: {
          suite: "8123",
          street: "Winipeg St.",
          city: "Regina",
          zipcode: "S8J 7H3"
        },
        src: require('../assets/Carimgs/black.png')
      },
      {
        key: "9",
        brand: "Toyota",
        name: "Corolla",
        model: "2020",
        rate: "60",
        type: "sedan",
        maxspeed: "220 km/h",
        seats: "4",
        transmission: "Auto",
        address: {
          suite: "1273",
          street: "Winipeg",
          city: "Regina",
          zipcode: "S8J 7H3"
        },
        src: require('../assets/Carimgs/toyotaw.png')
      },
      {
          key: "10",
          brand: "Hyundai",
          name: "Santafe",
          model: "2017",
          rate: "40",
          type: "sedan",
          maxspeed: "220 km/h",
          seats: "4",
          transmission: "Auto",
          address: {
              suite: "8213",
              street: "Broad St.",
              city: "Regina",
              zipcode: "S1H 7W3"
          },
          src: require('./src/hyundai.png')
      },
      {
          key: "11",
          brand: "Maggiore",
          name: "M1",
          model: "2015",
          rate: "180",
          type: "sedan",
          maxspeed: "250 km/h",
          seats: "4",
          transmission: "manual",
          address: {
              suite: "1831",
              street: "ALbert St.",
              city: "Regina",
              zipcode: "S8H 7Q3"
          },
          src: require('./src/Opel.png')
      },
      {
          key: "12",
          brand: "Ford",
          name: "SUV",
          model: "2019",
          rate: "160",
          type: "suv",
          maxspeed: "280 km/h",
          seats: "7",
          transmission: "Auto",
          address: {
              suite: "8281",
              street: "Broad St.",
              city: "Regina",
              zipcode: "S1H 7W3"
          },
          src: require('./src/fordsuv.png')
      },
      {
        key: "13",
        brand: "BMW",
        name: "",
        model: "2022",
        rate: "240",
        type: "sedan",
        maxspeed: "290 km/h",
        seats: "2",
        transmission: "Auto",
        address: {
          suite: "2721",
          street: "Dewdney Ave",
          city: "Regina",
          zipcode: "S1Q 5W3"
        },
        src: require('./src/bmw.png')
      },
      {
        key: "14",
        brand: "Lambhorghini",
        name: "Huracan",
        model: "2020",
        rate: "340",
        type: "sedan",
        maxspeed: "320 km/h",
        seats: "2",
        transmission: "Auto",
        address: {
          suite: "1923",
          street: "Gordon Rd.",
          city: "Regina",
          zipcode: "S6W 5L3"
        },
        src: require('./src/lamborghini.png')
      },
      {
        key: "15",
        brand: "Toyota",
        name: "Aqua",
        model: "2019",
        rate: "60",
        type: "sedan",
        maxspeed: "240 km/h",
        seats: "4",
        transmission: "Auto",
        address: {
          suite: "2376",
          street: "Dewdney Ave",
          city: "Regina",
          zipcode: "S7H 4K2"
        },
        src: require('./src/aqua.png')
      },
      {
        key: "16",
        brand: "Nissan",
        name: "gt",
        model: "2020",
        rate: "30",
        type: "sedan",
        maxspeed: "200 km/h",
        seats: "4",
        transmission: "Auto",
        address: {
          suite: "8199",
          street: "Dewdney Ave",
          city: "Regina",
          zipcode: "S7H 4K2"
        },
        src: require('./src/nissan.png')
      }
    ]
  );

  // const searchFilter = (text) => {

  //   if (text) {
  //     const newData = masterData.filter((item) => {
  //       const itemData = item.brand
  //         ? item.brand.toUpperCase()
  //         : ''.toUpperCase();
  //       const textData = text.toUpperCase();
  //       return itemData.indexOf(textData) > -1;

  //     });
  //     setFilterdData(newData);
  //     setSeacrh(text);
  //   }
  //   else{
  //     setFilterdData(masterData);
  //     setSeacrh(text);
  //   }

  // }

  const renderItem = ({ item, index, separators }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Product',{item})}>
    <View style={styles.card}>

        <Text style={styles.title}>{item.brand} {item.name}</Text>
        <Image source={item.src} style={styles.carimg} />
        <TouchableOpacity style={styles.vbutton}
        onPress={() => navigation.navigate('Product', {item})}>
          <Text style={styles.vbuttontxt}>View</Text>
        </TouchableOpacity>
        <Text style={styles.rate}>${item.rate}/day</Text>

      </View>
    </TouchableOpacity>
  )

  return (


    <View style={styles.container}>

      <View style={styles.header}>

        <TextInput
          style={styles.input}
          keyboardType='default'
          placeholder='Search'
          // value={search}
          // onChangeText={(text) => searchFilter(text)} 
          />

        {/* <View style={styles.scroll}>

      <View style={styles.rect1}>
      <Text style={styles.txt}>Family brands</Text>
      </View>

      <View style={styles.rect2}>
      <Text style={styles.txt}>Luxury brands</Text>
      </View>

      <View style={styles.rect3}>
        <Text style={styles.txt}>Popular brands</Text>
      </View>

      </View> */}
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

        <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate('Display')}>
          <Image source={require("./src/browse.png")} style={styles.icon}></Image>
          <Text style={styles.ttitle}>Browse</Text>
        </TouchableOpacity>
        {/* 
      <TouchableOpacity style={styles.tabs}>
      <Image source={require("./src/peoples.png")} style={styles.icon}></Image>
      <Text style={styles.ttitle}>Trips</Text>
      </TouchableOpacity> */}

        <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate('Cameras')} >
          <Image source={require("./src/camera2.png")} style={styles.icon}></Image>
          <Text style={styles.ttitle}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabs} onPress={() => navigation.navigate('Account')}>
          <Image source={require("../assets/profile.png")} style={styles.icon}></Image>
          <Text style={styles.ttitle}>Account</Text>
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
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    // backgroundColor: '#fff',
    justifyContent: 'space-around'
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
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'center',
    justifyContent: 'center'
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
    alignItems: 'center',
    justifyContent: 'center'
  },

  txt: {
    fontSize: 10,
    fontWeight: "300",
    color: "#000",
    textAlign: "center",

  },

  body: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
    // borderWidth:
  },

  footer: {
    flex: 0,
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },

  card: {
    borderRadius: 6,
    padding: 3,
    margin: 5,
    // borderWidth: 0.2,
    // alignItems:'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 15,
    padding: 2,
    margin: 2
  },

    carimg: {
      borderRadius: 10,
      padding: 2,
      margin: 2,
      width: 200,
      height: 110,
    },

  vbutton: {
    borderRadius: 6,
    backgroundColor: "#617ee4",
    width: 50,
    height: 20,
    opacity: 0.7,
    top: 10,
    left: 10
  },

  vbuttontxt: {
    textAlign: 'center'
  },

  rate: {
    fontSize: 15,
    textAlign: 'right',
    bottom: 10,
    right: 10
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
    alignItems: 'center',
    justifyContent: 'center'
  },

  ttitle: {
    fontSize: 15
  }
})