import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Avatar } from "react-native-elements";
import styles from "./styles";

const LargeCardDefault = (props) => {
  const {
    id,
    image,
    title,
    count,
    progress,
    type,
    navigation,
    navigationScreen,
  } = props;

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
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(navigationScreen, { id, navigation })}
    >
      <View style={styles.left}>{img}</View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        {count ? <Text style={styles.text}>{count} courses</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

export default LargeCardDefault;
