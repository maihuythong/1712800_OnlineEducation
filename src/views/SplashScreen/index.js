import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import * as ScreenName from '../../global/constants/screenName';

const SpashScreen = ({ navigation }) => {
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count === 1) {
        navigation.replace(ScreenName.SignInScreen);
      } else {
        count++;
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
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
