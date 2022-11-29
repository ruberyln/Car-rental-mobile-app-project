import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState , useEffect} from "react";
import client from '../api/client';


const UserInfo = ({navigation}) =>{

  const [profile, setProfile] = useState("");
  const {firstName ,email} = profile;

  useEffect(()=>{
    fetch('/api/userPRofile')
    .then(res =>{
        return res.json()
    })
    .then(result =>{
        //console.log(result)
        setProfile(result.user)
    })
    .catch(error => {
        console.log(error);
    })
}, []);

  return (
  
    <View style={styles.container}>
  <View>
    <Text>User Name:{firstName}</Text>
  </View>
  <View>
    <Text>User Email:{email}</Text>
  </View>
 
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});

export default UserInfo;