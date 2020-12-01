import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ScreenName from '../../global/constants/screenName';

const LargeCardCourse = (props) => {
  const {
    id,
    image,
    coursename,
    author,
    level,
    publishDate,
    duration,
    vote,
    voteCount,
    navigation,
  } = props;

  const course = { id };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(ScreenName.CourseDetailScreen, { course: course })
      }
    >
      <Image style={[styles.image, styles.left]} source={{ uri: image }} />
      <View style={styles.right}>
        <Text style={styles.title}>{coursename}</Text>
        {/* Handle if multiple author (api only 1 author)
        <View>
          {author.map( e => <Text>{e.name}</Text>)}
        </View> */}
        <Text style={styles.text}>{author}</Text>
        <Text style={styles.text}>
          {level} {publishDate} {duration}
        </Text>
        <Text style={styles.text}>
          {vote} ({voteCount})
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LargeCardCourse;
