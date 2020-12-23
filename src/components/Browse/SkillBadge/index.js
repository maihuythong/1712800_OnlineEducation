import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import SvgUri from "expo-svg-uri";
import { images } from "../../shared/image";
import { CourseOfSkillScreen } from "../../../global/constants/screenName";

const SkillBadge = ({ id, image, content, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.skillContainer}
      onPress={() => navigation.navigate(CourseOfSkillScreen, { id, title: content})}
    >
      {image ? (
        <View>
          <SvgUri width="18" height="18" source={images.checked.uri} />
        </View>
      ) : null}
      <Text style={styles.content}>{content}</Text>
    </TouchableOpacity>
  );
};

export default SkillBadge;
