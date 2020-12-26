import React from "react";
import { ImageBackground, Text, TouchableOpacity } from "react-native";
import * as ScreenName from "../../../global/constants/screenName";
import styles from "./styles";

const LargeImageButton = ({
  image,
  text,
  navigation,
  data,
  navigationScreen,
}) => {
  const img = { uri: image };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(ScreenName.CourseListScreen, {
          title: text.replace("\n", ""),
          data,
          navigation,
          navigationScreen,
        })
      }
    >
      <ImageBackground source={img} style={styles.image}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default LargeImageButton;
