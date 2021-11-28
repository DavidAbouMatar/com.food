import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button,FlatList,Picker } from 'react-native';
import moment from 'moment';
import Header from "./src/Header";


//create an array of days
const returnDates = () => {
  const weekArray = [0,1,2,3,4,5,6]
  const today = new Date()
  return weekArray.map(week => moment(today).add(week, 'days').calendar().split(' at')[0] )
}
const dates = returnDates()
console.log('ddd',dates)
const time = [
  { time: "Within an hour"
  },
  {
    time: "11:00 AM - 12:00 PM"
  },
  {
    time: "12:00 PM - 1:00 PM"
  },
  {
    time: "1:00 AM - 2:00 PM"
  },
  {
    time: "2:00 AM - 3:00 PM"
  },
  {
    time: "3:00 PM - 4:00 PM"
  },
  {
    time: "4:00 AM - 5:00 PM"
  },
  {
    time: "5:00 AM - 6:00 PM"
  },
  {
    time: "6:00 AM - 7:00 PM"
  },
  {
    time: "7:00 PM - 8:00 PM"
  },
  {
    time: "8:00 AM - 9:00 PM"
  },
  {
    time: "9:00 AM - 10:00 PM"
  }

];

console.log('gggg',time)
export default function App() {
  return (

        <View style={styles.Container}>
          {/* <Tab/> */}
          <View style={styles.Header}>
            <Text style={styles.HeaderText}>
              Set the time that you would like us to arrive at your pickup location
            </Text>
          </View>
          <View style={styles.Body}>
         
            <Header
            days={dates}
            time={time}/>
          </View>
          <View style={styles.Footer}>
            <Button style={styles.Button}>Next</Button>
          </View>
        </View>
   
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#39437C',
  },
  Header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Footer: {},
  Body: {
    height: 248,
    width:'100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderText: {
  
    color: '#fff',
    textAlign: 'center',
    maxWidth: 320,
  },
  ButtonRoot: {
    backgroundColor: '#FFF488',
  },
  ButtonInner: {
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonLabel: {
  
    color: '#39437C',
    fontSize: 18,
  },
});
