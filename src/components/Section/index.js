import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Section = (props) => {
  const { title, children, hideSeeall, navigation, nav } = props;

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {hideSeeall === true ? null : (
          <TouchableOpacity onPress={() => navigation.navigate(nav, { title })}>
            <Text style={styles.seeAll}>See all ></Text>
          </TouchableOpacity>
        )}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Section;
