import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';
import * as ScreenName from '../../../global/constants/screenName';

const Author = (props) => {
  const { image, name, description, navigation } = props;

  return (
    <TouchableOpacity
      style={styles.avatarContainer}
      onPress={() =>
        navigation.navigate(ScreenName.AuthorDetailScreen, {
          image: image,
          name: name,
          description,
          navigation,
        })
      }
    >
      <Avatar
        style={styles.avatar}
        rounded
        size={100}
        source={{ uri: image }}
      />
      <View style={styles.authorName}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Author;
