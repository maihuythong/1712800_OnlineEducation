import React from 'react';
import { View, ImageBackground, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as ScreenName from '../../../global/constants/screenName';

const LargeImageButton = ({ image, text, navigation }) => {
  const img = { uri: image };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(ScreenName.CourseListScreen, { title: text })
      }
    >
      <ImageBackground source={img} style={styles.image}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default LargeImageButton;
