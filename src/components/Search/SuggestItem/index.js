import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import SvgUri from 'expo-svg-uri';
import styles from './styles';
import * as ScreenName from '../../../global/constants/screenName';

const SuggestItem = ({ isRecent, text, navigation }) => {
  let imgsrc;
  if (isRecent) {
    imgsrc = require('../../../../assets/recent.svg');
  } else {
    imgsrc = require('../../../../assets/search.svg');
  }
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ScreenName.SearchResultScreen)}
    >
      <View style={styles.container}>
        <View>
          <SvgUri width='25' height='25' source={imgsrc} />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SuggestItem;
