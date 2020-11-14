import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import VideoPlayer from '../../../components/VideoPlayer';
import courseDetailJson from '../../../json/courseDetail.json';
import Header from '../../../components/CourseDetail/Header';
import Content from '../../../components/CourseDetail/Content';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Transcipt from '../../../components/CourseDetail/Transcript';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

const CourseDetail = (props) => {
  const {
    courseName,
    author,
    level,
    publishDate,
    duration,
    vote,
    voteCount,
    description,
    content,
    transcript,
  } = courseDetailJson;

  return (
    <View style={styles.courseDetailContainer}>
      <View style={styles.video}>
        <Text>This is video</Text>
        <VideoPlayer />
      </View>
      <View style={styles.other}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header
            title={courseName}
            author={author}
            level={level}
            publishDate={publishDate}
            duration={duration}
            vote={vote}
            voteCount={voteCount}
            description={description}
          />
          <Tab.Navigator
            initialRouteName='CONTENTS'
            tabBarOptions={{
              activeTintColor: '#236c8d',
              inactiveTintColor: '#858a8f',
              labelStyle: { fontSize: 12 },
              style: {
                // backgroundColor: '#1f242a'
              },
            }}
          >
            <Tab.Screen
              name='CONTENTS'
              component={() => <Content DATA={content} />}
              // options={{ DATA: content }}
            />
            <Tab.Screen
              name='TRANSCRIPT'
              component={() => <Transcipt transcript={transcript} />}
              // options={{ tabBarLabel: 'Updates' }}
            />
          </Tab.Navigator>
        </ScrollView>
      </View>
    </View>
  );
};

export default CourseDetail;
