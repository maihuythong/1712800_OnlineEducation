import React from 'react';
import { View, Text } from 'react-native';
import { ImageBackground } from 'react-native';
import styles from './styles';

const Header = ({ img, title }) => {
  return (
    <View style={styles.container}>
      {img ? (
        <ImageBackground
          source={{
            uri: img,
          }}
          style={styles.image}
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </View>
  );
};

export default Header;
