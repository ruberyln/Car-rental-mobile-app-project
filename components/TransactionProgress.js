import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'

const TransactionProgress = () => {
  return (
    <View style={styles.container} >
      <ActivityIndicator
       size="large" 
       style={styles.bar}
       />
       Touch
      <Text style={styles.boldText}>Transaction in Progress</Text>
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