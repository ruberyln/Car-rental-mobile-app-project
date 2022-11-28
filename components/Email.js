import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import email from 'react-native-email'

const Email = () => {
   
        return (
            <View style={styles.container}>
                <Button title="Send Mail" onPress={handleEmail} />
            </View>
        )
    }

    handleEmail = () => {
        const to = ['turbocompany@gmail.com.com', 'contactsupport@email.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            cc: ['', ''], // string or array of email addresses
            bcc: '', // string or array of email addresses
            subject: 'Car Inquiry',
            body: '',
            checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
        }).catch(console.error)
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Email;