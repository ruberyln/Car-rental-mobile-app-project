import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View,Text } from 'react-native';
import { Marker,Callout } from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';


// const origin = { latitude: 37.3318456, longitude: -122.0296002};
// const destination = {latitude: 50445210, longitude: -104.618896};


const Map = () => {
  return (
    <View style={styles.container}>
     
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 50.445210,
        longitude: -104.618896,
        latitudeDelta:0.0922,
        longitudeDelta: 0.0421
      }}> 
      {/* <MapViewDirections
      origin={origin}
      destination={destination}
     
    /> */}

         <Marker coordinate= {{latitude: 50.445210,
        longitude: -104.618896}}
        
        >
           <Callout>
						<Text>
             Turbo HQ
            </Text>
					</Callout>

        </Marker>
       
      </MapView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
export default Map