import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/header'
import Calendar from '../components/calendar'
export default function App() {
  return (
    <View style={styles.container}>
      <Header name="Home" />
      <Calendar/>
      <View>
        <Text>home</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
  },
});