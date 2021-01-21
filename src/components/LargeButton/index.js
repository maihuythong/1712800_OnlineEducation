import React from "react";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
import CustomIcon from "../../components/shared/CustomIcon";
import {CourseListScreen} from '../../global/constants/screenName'

const LargeButton = ({ uri, text, data, navigation, navigationScreen,hideCover }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(CourseListScreen, {
          title: '',
          data,
          navigation,
          navChildren: navigationScreen,
          hideCover: hideCover
        })
      }
    >
      <CustomIcon uri={uri} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;
