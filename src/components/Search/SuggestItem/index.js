import SvgUri from "expo-svg-uri";
import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

const SuggestItem = ({ isRecent, text }) => {
  let imgsrc;
  if (isRecent) {
    imgsrc = require("../../../../assets/recent.svg");
  } else {
    imgsrc = require("../../../../assets/search.svg");
  }
  return (
    <View style={styles.container}>
      <View>
        <SvgUri width="25" height="25" source={imgsrc} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SuggestItem;
