import React from 'react';
import styles from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import CustomIcon from '../../components/shared/CustomIcon';

const MediumButton = ({ uri, text, action }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => action()}>
      <View style={styles.icon}>
        <CustomIcon uri={uri} />
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MediumButton;
