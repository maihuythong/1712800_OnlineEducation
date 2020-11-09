import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/views/App/Home';
import CourseDetail from './src/views/App/CourseDetail';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style='auto' />
    // </View>
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Text>Hello</Text>
        {/* <Home /> */}
        <CourseDetail />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
