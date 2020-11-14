import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LottieView from 'lottie-react-native';

const SpashScreen = () => {
  return (
    <View>
      <Image
        source={require('./loading.gif')}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
  gif: {
    flex: 1,
    width: 100,
    height: 100,
  },
});

export default SpashScreen;
