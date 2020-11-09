import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Transcipt = (props) => {
  const { transcript } = props;
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <TextInput style={styles.input} placeholder='Search Transcript' />
        <Text style={styles.text}>{transcript}</Text>
      </View>
    </View>
  );
};

export default Transcipt;
