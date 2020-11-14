import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import styles from './styles';
import { Avatar } from 'react-native-elements';

const LargeCardDefault = (props) => {
  const { id, image, title, count, progress, type } = props;

  const getImage = (type, path) => {
    switch (type) {
      case 1:
        return <Image style={styles.image} source={{ uri: path }} />;
      case 2:
        return (
          <View style={styles.avatar}>
            <Avatar size={60} rounded source={{ uri: image }} />
          </View>
        );
      default:
        break;
    }
  };

  let img = getImage(type, image);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>{img}</View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{count} courses</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LargeCardDefault;
