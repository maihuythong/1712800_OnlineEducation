import React from 'react';
import { View, StyleSheet } from 'react-native';
// import styles from './styles';
import { Video } from 'expo-av';

const VideoPlayer = () => {
  const url = 'https://www.youtube.com/watch?v=bt1F7AxSyTw';
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: url }}
        shouldPlay
        useNativeControls
        style={{ width: '100%', height: '50%', backgroundColor: 'white' }}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
