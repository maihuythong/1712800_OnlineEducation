import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const LargeImageButton = ({ image, text }) => {
  const img = { uri: image };

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default LargeImageButton;
