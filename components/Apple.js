import React, { Fragment } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Alert} from 'react-native';
import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

const PaymentRequest = require('react-native-payments').PaymentRequest;

const METHOD_DATA = [{
  supportedMethods: ['apple-pay'],
  data: {
    merchantIdentifier: 'merchant.apple.test',
    supportedNetworks: ['visa', 'mastercard', 'amex'],
    countryCode: 'US',
    currencyCode: 'USD'
  }
}];

const DETAILS = {
  id: 'basic-example',
  displayItems: [
    {
      label: 'Movie Ticket',
      amount: { currency: 'USD', value: '180.00' }
    },
   
  ],
 
  total: {
    label: 'Enappd Store',
    amount: { currency: 'USD', value: '540.00' }
  }
};
const OPTIONS = {
  requestPayerName: true,
  requestPayerPhone: true,
  requestPayerEmail: true,
  requestShipping: true
};
const paymentRequest = new PaymentRequest(METHOD_DATA, DETAILS, OPTIONS);

paymentRequest.addEventListener('shippingaddresschange', e => {
  const updatedDetails = getUpdatedDetailsForShippingAddress(paymentRequest.shippingAddress);

  e.updateWith(updatedDetails);
});

paymentRequest.addEventListener('shippingoptionchange', e => {
  const updatedDetails = getUpdatedDetailsForShippingOption(paymentRequest.shippingOption);

  e.updateWith(updatedDetails);
});

check = () => {
  paymentRequest.canMakePayments().then((canMakePayment) => {
    if (canMakePayment) {
      Alert.alert(
        'Apple Pay',
        'Apple Pay is available in this device'
      );
    }
  })
}

 pay = () => {
    paymentRequest.canMakePayments().then((canMakePayment) => {
    if (canMakePayment) {
      console.log('Can Make Payment')
      paymentRequest.show()
        .then(paymentResponse => {
          // Your payment processing code goes here

          paymentResponse.complete('success');
        });
    }
    else {
      console.log('Cant Make Payment')
    }
  })
}

const Apple = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              
              <Button
                onPress={() => this.check()}
                title="Check Apple Pay" />
            </View>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <View>
                <Text style={styles.sectionTitle}>Payment Summary</Text>
               
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.itemDetail}>
                <Text style={styles.itemTitle}>Ferarri</Text>
                <Text style={styles.itemDescription}>
                  renting for 3 days
              </Text>
              </View>
              <View style={styles.itemPrice}>
                <Text>$180.00</Text>
              </View>
            </View>
            <View style={styles.itemContainer}>
              <View style={styles.itemDetail}>
                <Text style={styles.itemTitle}>Days</Text>
                <Text style={styles.itemDescription}>
                 3
              </Text>
              </View>
             
            </View>
            <View style={styles.totalContainer}>
              <View style={styles.itemDetail}>
                <Text style={styles.itemTitle}>Total</Text>
              </View>
              <View style={styles.itemPrice}>
                <Text>$540.00</Text>
              </View>
            </View>
            <Button style={styles.payButton}
              title="Pay with Apple Pay"
              onPress={() => this.pay()} />
            {/* <ApplePayButton /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: { backgroundColor: Colors.lighter},
  engine: { position: 'absolute', right: 0},
  body: {backgroundColor: Colors.white, borderBottomColor: "#cccccc", borderBottomWidth: 1, paddingBottom: 10},  
  sectionContainer: { marginTop: 32, paddingHorizontal: 24 },  
  itemContainer: {marginTop: 12,paddingHorizontal: 24,display: "flex",flexDirection: 'row'},
  totalContainer: {marginTop: 12,paddingHorizontal: 24,display: "flex",flexDirection: 'row',borderTopColor: "#cccccc",borderTopWidth: 1,paddingTop: 10,marginBottom: 20},
  itemDetail: {flex: 2},
  itemTitle: {fontWeight: '500',fontSize: 18},
  itemDescription: {fontSize: 12},
  itemPrice: {flex: 1},
  sectionTitle: {fontSize: 24,fontWeight: '600',color: Colors.black,},
  sectionDescription: {marginTop: 8,fontSize: 12,fontWeight: '400',color: Colors.dark,},
  highlight: {fontWeight: '700',},
  footer: {color: Colors.dark,fontSize: 12,fontWeight: '600',padding: 4,paddingRight: 12,textAlign: 'right',},
});

export default Apple;
