import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

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
  } = props;
  console.log(id);

  return (
    <View>
      <Image style={styles.image} source={{ uri: image }} />
      <View>
        <Text>{coursename}</Text>
        {/* Handle if multiple author (api only 1 author)
        <View>
          {author.map( e => <Text>{e.name}</Text>)}
        </View> */}
        <Text>{author}</Text>
        <Text>
          {level} {publishDate} {duration}
        </Text>
        <Text>
          {vote} ({voteCount})
        </Text>
      </View>
    </View>
  );
};

export default LargeCardCourse;
