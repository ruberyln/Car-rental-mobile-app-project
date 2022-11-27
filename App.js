import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Product from './components/Product';
import Product2 from './components/Product2';
import Summary from './components/Summary';
import Calendar from './components/Calendar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Display from './components/Display'
import SecurePay from './components/SecurePay';
import PaymentOptions from './components/PaymentOptions';
import TranApproved from './components/TranApproved';
import axios from 'axios';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();
export default function App() {

//   const fetchApi = async()=>{
//     try{
//       const res = await axios.get('http://192.168.0.203:3000/')
//       console.log(res.data);
//     }
//     catch(error){
// console.log(error.message)
//     }
  
//   }

// useEffect(()=>{
// fetchApi()

// },[])

  return (
  
    <View style={styles.container}>
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Home screen' }}
        />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="SecurePay" component={SecurePay} />
        <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="TranApproved" component={TranApproved} />
      </Stack.Navigator>
    </NavigationContainer>
      {/* <Product2/> */}
      {/* <Product/> */}
    
     {/* <Summary/> */}
     {/* <Calendar/>
       */}
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
