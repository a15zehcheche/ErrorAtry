import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home'
import Header from './components/header'
import NavigationBar from './components/navigationBar'
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
      <NavigationBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
