// import React from 'react';
// import MapView from 'react-native-maps';
// import { StyleSheet, View,Text } from 'react-native';
// import { Marker,Callout } from "react-native-maps";
// import MapViewDirections from 'react-native-maps-directions';


// // const origin = { latitude: 37.3318456, longitude: -122.0296002};
// // const destination = {latitude: 50445210, longitude: -104.618896};


// const Map = () => {
//   return (
//     <View style={styles.container}>
     
//       <MapView style={styles.map} 
//       initialRegion={{
//         latitude: 50.445210,
//         longitude: -104.618896,
//         latitudeDelta:0.0922,
//         longitudeDelta: 0.0421
//       }}> 
//       {/* <MapViewDirections
//       origin={origin}
//       destination={destination}
     
//     /> */}

//          <Marker coordinate= {{latitude: 50.445210,
//         longitude: -104.618896}}
        
//         >
//            <Callout>
// 						<Text>
//              Turbo HQ
//             </Text>
// 					</Callout>

//         </Marker>
       
//       </MapView>

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });
// export default Map




import React, { Component } from 'react';
import { Button,View, AppRegistry} from 'react-native';
//import openMap from 'react-native-open-maps';
import { createOpenLink } from 'react-native-open-maps';
import { Marker } from 'react-native-maps';
export default class Map extends Component {
  render(){
    return (
      <View> 
        <Button 
        color = {'#bdc3x7'}
        onPress={createOpenLink({latitude:50.445210, longitude:-104.618896})}
        title = "Click To open Map"/>

 <Marker coordinate= {{latitude: 50.445210,
         longitude: -104.618896}}>

         </Marker>

      </View>
    )

  }
  
}

//   // _goToYosemite() {
//     openMap({ latitude: 37.865101, longitude: -119.538330 });
//   // }


//     return (
//       <Button
//         color={'#bdc3c7'}
//         onPress={this._goToYosemite}
//         title="Click To Open Maps 🗺" />
//     );

// }

// export default Map 