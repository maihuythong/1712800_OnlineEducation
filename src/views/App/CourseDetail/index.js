import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Content from '../../../components/CourseDetail/Content';
import Header from '../../../components/CourseDetail/Header';
import Transcipt from '../../../components/CourseDetail/Transcript';
import VideoPlayer from '../../../components/VideoPlayer';
import { OfflineDataContext } from '../../../provider/offlinedata-provider';
import styles from './styles';

const Tab = createMaterialTopTabNavigator();

const CourseDetail = (props) => {
  const context = useContext(OfflineDataContext);
  const course = context.courseDetailList.find(
    (el) => el.id === props.route.params.course.id
  );
  const {
    id,
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
  } = course;

  const courseCard = context.course.find((el) => el.id === id);

  const addToBookmark = () => {
    if (!context.bookmark.find((el) => el.id === id))
      context.setBookmark([...context.bookmark, courseCard]);
  };

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
            addToBookmark={addToBookmark}
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
