import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';
import * as ScreenName from '../../../global/constants/screenName';

const Author = (props) => {
  const { data, navigation } = props;

  // console.log(data.id);
  return (
    <TouchableOpacity
      style={styles.avatarContainer}
      onPress={() =>
        navigation.navigate(ScreenName.AuthorDetailScreen, {
          id: data.id,
          navigation,
        })
      }
    >
      <Avatar
        style={styles.avatar}
        rounded
        size={100}
        source={{ uri: data['user.avatar'] }}
      />
      <View style={styles.authorName}>
        <Text style={styles.name}>{data['user.name']}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Author;
