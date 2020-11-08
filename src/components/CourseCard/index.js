import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';
const CourseCard = (props) => {
  const {
    id,
    image,
    title,
    author,
    level,
    vote,
    voteCount,
    publishDate,
  } = props;

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.defaultText}>{author}</Text>
        <Text style={styles.defaultText}>
          {level} - {publishDate}
        </Text>
        {/* <Text>{publishDate}</Text> */}
        <View style={styles.rating}>
          <Text>{vote}</Text>
          <Text>{voteCount}123</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
