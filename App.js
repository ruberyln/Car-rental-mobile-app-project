import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Product from './components/Product';
import Product2 from './components/Product2';
import Summary from './components/Summary';
import Calendar from './components/Calendar';
export default function App() {
  return (
  
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Product2/> */}
      <Product/>
     {/* <Summary/> */}
     {/* <Calendar/>
       */}
      
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
