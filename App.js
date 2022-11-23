import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Product from './components/Product';
import Product2 from './components/Product2';
import Summary from './components/Summary';
import Calendar from './components/Calendar';
import SignIn from './components/SignIn';
import Welcome from './components/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
export default function App() {
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
