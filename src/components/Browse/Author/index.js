import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

const Author = ({ image, name }) => {
  return (
    <TouchableOpacity style={styles.avatarContainer}>
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
