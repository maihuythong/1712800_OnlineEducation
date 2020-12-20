import React from 'react';
import { View } from 'react-native';
import SvgUri from 'expo-svg-uri';

const CustomIcon = ({ uri }) => {
  return (
    <View>
      <SvgUri width='20' height='20' source={uri} />
    </View>
  );
};

export default CustomIcon;
