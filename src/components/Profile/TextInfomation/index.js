import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const TextInformation = ({ title, content, note }) => {
  return (
    <View style={styles.container}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <View style={styles.contentContainer}>
        {content ? <Text style={styles.content}>{content}</Text> : null}
        {note ? <Text style={styles.note}>{note}</Text> : null}
      </View>
    </View>
  );
};

export default TextInformation;
