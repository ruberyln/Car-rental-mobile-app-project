import React, {useState} from 'react';
 
// import all the components we are going to use
import {SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
 
//import CalendarPicker from the package we installed
import CalendarPicker from 'react-native-calendar-picker';
 
const Calendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
 
  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
       CALENDAR BOOKING
        </Text>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={new Date(2018, 1, 1)}
          maxDate={new Date(2050, 6, 3)}
          weekdays={
            [
              'Mon', 
              'Tue', 
              'Wed', 
              'Thur', 
              'Fri', 
              'Sat', 
              'Sun'
            ]}
            months={[
                'January',
                'Febraury',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
              ]}
              previousTitle="Previous"
              nextTitle="Next"
              todayBackgroundColor="#617EE4"
              selectedDayColor="#617EE4"
              selectedDayTextColor="#000000"
              scaleFactor={375}
              textStyle={{
                fontFamily: 'serif',
                color: '#000000',
              }}
              onDateChange={onDateChange}
            />
            <View style={styles.textStyle}>
          <Text style={styles.textStyle}>
            Selected Start Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style={styles.textStyle}>
            Selected End Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedEndDate ? selectedEndDate.toString() : ''}
          </Text>
        </View>
      </View>

      <TouchableOpacity style = {styles.box} >
       <Text style = {styles.text}> Continue </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      backgroundColor: '#ffffff',
      padding: 16,
    },
    textStyle: {
      marginTop: 20,
      fontFamily:"serif",
      fontSize:15,
      fontWeight:"bold",
      flexDirection:"column"
    },
    titleStyle: {
      textAlign: 'center',
      fontSize: 20,
      margin: 20,
      fontFamily:"serif",
      fontWeight:'bold',
    },
    box: {
      backgroundColor: "#617EE4",
      padding: 20,
      marginVertical: 18,
      marginHorizontal: 50,
      width: 311,
      height: 58,
      borderBottomEndRadius: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      flexDirection: "column",
      alignItems:"center",
      justifyContent:"center",
  },
  text:{
alignItems:"center",
justifyContent:"center",
color: "#ffffff",
fontFamily:"serif",
fontSize:15,
fontWeight:"bold",
  },
  });

export default Calendar;