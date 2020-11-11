import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from './styles';

const BigBadge = ({ image, content }) => {
  return (
    <View style={styles.bigBadgeContainer}>
      {image ? <Avatar size={30} rounded source={{ uri: image }} /> : null}
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

export default BigBadge;
