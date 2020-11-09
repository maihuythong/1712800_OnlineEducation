import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
import SvgUri from 'expo-svg-uri';

const HeadMark = ({ completed }) => {
  const uri = completed
    ? '../../../../assets/icons8-ok.svg'
    : '../../../../assets/icons8-not-ok.svg';

  return (
    <SvgUri
      width='10'
      height='10'
      source={require('../../../../assets/icons8-ok.svg')}
    />
  );
};

const RowDetail = ({ completed, title, duration }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <HeadMark completed={completed} />
        <Text style={styles.name}>{title}</Text>
      </View>
      <Text style={styles.textDuration}>{duration}</Text>
    </View>
  );
};

export default RowDetail;
