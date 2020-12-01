import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RootAppNavigation from './src/navigation';

export default function App() {
  return (
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
