import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/views/App/Home';
import CourseDetail from './src/views/App/CourseDetail';
import Browse from './src/views/App/Browse';
import Profile from './src/views/App/Profile';
import Setting from './src/views/App/Setting';
import CourseOfSection from './src/views/App/CourseOfSection';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style='auto' />
    // </View>
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {/* <Home /> */}
        {/* <CourseDetail /> */}
        {/* <Browse /> */}
        {/* <Profile /> */}
        {/* <Setting /> */}
        <CourseOfSection />
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f1014',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
