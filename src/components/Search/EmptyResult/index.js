import React from 'react';
import { View, Text } from 'react-native';
import SvgUri from 'expo-svg-uri';
import styles from './styles';

const EmptySearch = ({ text }) => {
  return (
    <View style={styles.container}>
      <View>
        <SvgUri
          width='100'
          height='100'
          source={require('../../../../assets/search.svg')}
        />
      </View>
      <View>
        <Text style={styles.text}>
          Sorry, we couldn't find any matches for "{text}"
        </Text>
      </View>
    </View>
  );
};

export default EmptySearch;
