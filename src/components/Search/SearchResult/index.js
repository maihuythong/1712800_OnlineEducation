import React from 'react';
import { View } from 'react-native';
import Section from '../../Section';
import LargeCardCourse from '../../LargeCardCourse';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import homejson from '../../../json/home.json';
import mypathsjson from '../../../json/mypaths.json';
import authors from '../../../json/authors.json';
import styles from './styles';
import LargeCardDefault from '../../LargeCardDefault';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as ScreenName from '../../../global/constants/screenName';

const Tab = createMaterialTopTabNavigator();

const SearchResult = (props) => {
  const { navigation, data } = props;
  const ALL = () => (
    <ScrollView style={styles.container}>
      {COURSE()}
      {/* {PATH()} */}
      {AUTHOR()}
    </ScrollView>
  );

  const COURSE = () => (
    <View style={styles.container}>
    {data ? (
      <Section title='Courses' hideSeeall={true}>
        <FlatList
          data={data.courses ? data.courses?.data ?? [] : []}
          renderItem={({ item }) => (
            <LargeCardCourse
              key={item.id}
              id={item.id}
              authorName = {item.name}
              data = {item}
              navigation={navigation}
              navigationScreen = {ScreenName.CourseIntroScreen}
            />
          )}
        />
      </Section>
    ): null }
    </View>
  );

  // const PATH = () => (
  //   <View style={styles.container}>
  //     <Section title='Paths'>
  //       <FlatList
  //         data={mypathsjson}
  //         renderItem={({ item }) => (
  //           <LargeCardDefault
  //             key={item.id}
  //             id={item.id}
  //             image={item.image}
  //             title={item.pathName}
  //             count={item.courseCount}
  //             type={1}
  //           />
  //         )}
  //       />
  //     </Section>
  //   </View>
  // );

  const AUTHOR = () => (
    <View style={styles.container}>
    {data ? (
      <Section title='Authors' hideSeeall={true}>
        <FlatList
          maxToRenderPerBatch={3}
          data={data.instructors ? data.instructors?.data ?? [] : []}
          renderItem={({ item }) => (
            <LargeCardDefault
              key={item.id}
              id={item.id}
              image={item.avatar}
              title={item.name}
              count={item.numcourses}
              type={2}
              navigation = {navigation}
              navigationScreen = {ScreenName.AuthorDetailScreen}
            />
          )}
        />
      </Section>
    ): null}
    </View>
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName='Feed'
        tabBarOptions={{
          activeTintColor: '#236c8d',
          inactiveTintColor: '#858a8f',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: '#1f242a' },
        }}
      >
        <Tab.Screen
          name='ALL'
          component={ALL}
          // options={{ DATA: content }}
        />
        <Tab.Screen
          name='COURSES'
          component={COURSE}
          // options={{ tabBarLabel: 'Updates' }}
        />
        {/* <Tab.Screen
          name='PATHS'
          component={PATH}
          // options={{ tabBarLabel: 'Updates' }}
        /> */}
        <Tab.Screen
          name='AUTHORS'
          component={AUTHOR}
          // options={{ tabBarLabel: 'Updates' }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default SearchResult;
