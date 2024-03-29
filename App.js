import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Product from './components/Product';
import Product2 from './components/Product2';
import Summary from './components/Summary';
import Calendar from './components/Calendar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Welcome from './components/Welcome';
import Family from './components/Family';
import Luxury from './components/Luxury';
import Popular from './components/Popular';

import { NavigationContainer } from '@react-navigation/native';
import Map from './components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Display from './components/Display'
import SecurePay from './components/SecurePay';
import PaymentOptions from './components/PaymentOptions';
import TranApproved from './components/TranApproved';



import GetStarted from './components/GetStarted';
//import Camera from './components/Cameras';
import Cameras from './components/Cameras';

import Account from './components/Account';
import Email from './components/Email';
import UserInfo from './components/UserInfo';
import TransactionProgress from './components/TransactionProgress';
// import Apple from './components/Apple';
const Stack = createNativeStackNavigator();
export default function App() {




  return (
  
    <View style={styles.container}>
       <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Lets Get You Started"
          component={GetStarted}
          options={{}}
        />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          {/* <Stack.Screen name="Google" component={Google} /> */}
          <Stack.Screen name="Cameras" component={Cameras} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Display" component={Display} />
        <Stack.Screen name="SecurePay" component={SecurePay} />
        <Stack.Screen name="PaymentOptions" component={PaymentOptions} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="TransactionProgress" component={TransactionProgress} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Account" component={Account} />
        {/* <Stack.Screen name="Apple" component={Apple} /> */}
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="Summary" component={Summary} />
        <Stack.Screen name="TranApproved" component={TranApproved} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Family" component={Family} />
        <Stack.Screen name="Luxury" component={Luxury} />
        <Stack.Screen name="Popular" component={Popular} />
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
