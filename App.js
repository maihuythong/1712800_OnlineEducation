import React, { useState } from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootAppNavigation from './src/navigation';
import SpashScreen from './src/views/SplashScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  let count = 0;
  if (loading) {
    const interval = setInterval(() => {
      count += 10;
    }, 100);
  }
  return (
    // <SpashScreen />
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
