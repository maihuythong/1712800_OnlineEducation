import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HeaderSection = (props) => {
  const { id, title, totalDuration } = props;

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.sectionId}>
          <Text style={styles.textId}>{id}</Text>
        </View>
        <View style={styles.sectionName}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textDuration}>{totalDuration}</Text>
        </View>
      </View>
      <View>
        <Text>Operation</Text>
      </View>
    </View>
  );
};

export default HeaderSection;
