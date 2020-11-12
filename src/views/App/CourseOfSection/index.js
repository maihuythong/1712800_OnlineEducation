import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/CourseOfSection/Header';
import Content from '../../../components/CourseOfSection/Content';

const CourseOfSection = () => {
  return (
    <ScrollView>
      <Header title={'Software development'} />
      <Content />
    </ScrollView>
  );
};

export default CourseOfSection;
