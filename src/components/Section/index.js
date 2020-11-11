import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Section = ({ title, children, hideSeeall }) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {hideSeeall === true ? null : (
          <Text style={styles.seeAll}>See all ></Text>
        )}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Section;
