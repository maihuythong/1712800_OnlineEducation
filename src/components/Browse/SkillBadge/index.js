import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import SvgUri from 'expo-svg-uri';
import { images } from '../../../shared/image';

const SkillBadge = ({ image, content }) => {
  return (
    <TouchableOpacity style={styles.skillContainer}>
      {image ? (
        <View>
          <SvgUri width='18' height='18' source={images.checked.uri} />
        </View>
      ) : null}
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
};

export default SkillBadge;
