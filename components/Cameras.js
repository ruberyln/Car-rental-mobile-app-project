import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image,TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';


const Cameras = () => {
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    return (
      <SafeAreaView style={styles.container}>

       
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style = {styles.views}>
        <TouchableOpacity onPress={sharePic} style = {styles.tabs}> 
        <Image source={require("./src/share.png")} style={styles.icon}/>
        <Text style = {{ fontWeight:'bold'}}>Share</Text>

        </TouchableOpacity>
      

        {/* <Button title="Share" /> */}
        {hasMediaLibraryPermission ? 

        <TouchableOpacity onPress={savePhoto} style = {styles.tabs}   >
            <Image source={require("./src/save.png")} style={styles.icon}/>
            <Text style = {{ fontWeight:'bold'}}> Save</Text>
        {/* <Button title="Save" />  */}
        </TouchableOpacity>
        : undefined}



        <TouchableOpacity onPress={() => setPhoto(undefined)} style = {styles.tabs}>
        <Image source={require("./src/delete.png")} style={styles.icon}/> 
        <Text style = {{ fontWeight:'bold'}}> Discard</Text>
        </TouchableOpacity>
        {/* <Button title="Discard"  /> */}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={takePic}>
        <Image source={require("./src/camera2.png")} style={styles.icons}/> 
        </TouchableOpacity>
        {/* <Button title="Take Pic"  /> */}
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },

views:{
flexDirection: "row",
marginLeft:10,
paddingRight:20,
padding:5,
alignItems:"center",
justifyContent:"center",



},
  buttonContainer: {
   // backgroundColor: '#fff',
    alignSelf: 'flex-end',
    // width:60,
    // height:60
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  },
  icon: {
     //padding: 10,
     width:25,
     height:25,
     //flex:1,
     //marginTop:,
 },
 tabs: {
  margin: 10,
  padding: 5,
  alignItems:'center',
  justifyContent:'center'
  
},
 icons: {
  //padding: 10,
  width:60,
  height:60,
  //flex:1,
  //marginTop:,
},
});

export default Cameras