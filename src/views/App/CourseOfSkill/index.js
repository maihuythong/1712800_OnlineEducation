import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Content from '../../../components/CourseOfSection/Content';
import styles from './styles';

const CourseOfSkill = (props) => {
  const { id, title } = props.route.params;
  

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Content />
      </ScrollView>
    </View>
  );
};

export default CourseOfSkill;
