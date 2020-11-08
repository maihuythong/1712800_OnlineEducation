import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';

const PathCard = (props) => {
  const { id, image, pathName, courseCount, progress } = props;

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{pathName}</Text>
        <Text style={styles.defaultText}>{courseCount} courses</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PathCard;
