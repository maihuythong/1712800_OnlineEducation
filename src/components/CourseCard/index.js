import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';
import * as ScrennName from '../../global/constants/screenName';
import CustomRatingBar from '../../shared/CustomRatingBar';

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
    navigation,
  } = props;

  const course = {
    id,
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate(ScrennName.CourseDetailScreen, { course: course })
      }
    >
      <View style={styles.cardImage}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <View style={styles.cardContent}>
        <Text numberOfLines={1} style={styles.title}>
          {title.length < 30 ? `${title}` : `${title.substring(0, 30)}...`}
        </Text>
        <Text style={styles.defaultText}>{author}</Text>
        <Text style={styles.defaultText}>
          {level} - {publishDate}
        </Text>
        <View style={styles.rating}>
          <CustomRatingBar star={vote} />
          <Text style={styles.voteCount}>({voteCount})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
