import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity} from 'react-native'
import React from 'react'

const TransactionProgress = ({navigation}) => {
  return (
    <View style={styles.container} >
      <ActivityIndicator
       size="large" 
       style={styles.bar}
       />
      <TouchableOpacity onPress={() => navigation.navigate('TranApproved')}>
      <Text style={styles.boldText}>Transaction in Progress</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TransactionProgress

const styles = StyleSheet.create({
    boldText: {
        color: 'dodgerblue',
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign:'center'
      },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
})