import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/views/App/Home';
import CourseDetail from './src/views/App/CourseDetail';
import Browse from './src/views/App/Browse';
import Profile from './src/views/App/Profile';
import Setting from './src/views/Setting';
import CourseOfSection from './src/views/App/CourseOfSection';
import Search from './src/views/App/Search';
import SignIn from './src/views/Authentication/RecoveryPassword';
import SignUp from './src/views/Authentication/SignUp';
import ForgotPassword from './src/views/Authentication/ForgotPassword';
import RecoveryPassword from './src/views/Authentication/RecoveryPassword';
import RootAppNavigation from './src/navigation';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style='auto' />
    // </View>
    // <NavigationContainer>
    //   <SafeAreaView style={styles.container}>
    //     {/* <Home /> */}
    //     {/* <CourseDetail /> */}
    //     {/* <Browse /> */}
    //     {/* <Profile /> */}
    //     {/* <Setting /> */}
    //     {/* <CourseOfSection /> */}
    //     {/* <Search /> */}
    //     {/* <SignIn /> */}
    //     {/* <SignUp /> */}
    //     {/* <ForgotPassword /> */}
    //     <RecoveryPassword />
    //   </SafeAreaView>
    // </NavigationContainer>
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={false} />
      <RootAppNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0f1014',
    // marginTop: 15,
  },
});
