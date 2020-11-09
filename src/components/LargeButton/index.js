import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomIcon from '../../shared/CustomIcon';

const LargeButton = ({ uri, text }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <CustomIcon uri={uri} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LargeButton;
