import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SmallImageButton = ({ image, text }) => {
  const img = { uri: image };

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SmallImageButton;
