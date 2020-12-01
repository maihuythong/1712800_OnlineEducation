import React, { useContext } from 'react';
import { FlatList, ScrollView } from 'react-native';
import CourseCard from '../../../components/CourseCard';
import PathCard from '../../../components/PathCard';
import Section from '../../../components/Section';
import * as ScreenName from '../../../global/constants/screenName';
import { OfflineDataContext } from '../../../provider/offlinedata-provider';
import styles from './styles';

const Home = (props) => {
  const { navigation } = props;

  const context = useContext(OfflineDataContext);

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Section
        title='Software Development'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={context.course}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CourseCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              author={item.author}
              level={item.level}
              publishDate={item.publishDate}
              vote={item.vote}
              navigation={navigation}
            />
          )}
        />
      </Section>
      <Section
        title='IT Operations'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={context.course}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <CourseCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                author={item.author}
                level={item.level}
                publishDate={item.publishDate}
                vote={item.vote}
                navigation={navigation}
              />
            );
          }}
        />
      </Section>
      <Section
        title='Data Professtional'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={context.course}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CourseCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              author={item.author}
              level={item.level}
              publishDate={item.publishDate}
              vote={item.vote}
              navigation={navigation}
            />
          )}
        />
      </Section>
      <Section
        title='Security Professtional'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={context.course}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CourseCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              author={item.author}
              level={item.level}
              publishDate={item.publishDate}
              vote={item.vote}
              navigation={navigation}
            />
          )}
        />
      </Section>
      <Section
        title='Software Development'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={context.course}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CourseCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              author={item.author}
              level={item.level}
              publishDate={item.publishDate}
              vote={item.vote}
              navigation={navigation}
            />
          )}
        />
      </Section>
      <Section
        title='My Paths'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={context.path}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <PathCard
              key={item.id}
              id={item.id}
              image={item.image}
              pathName={item.pathName}
              courseCount={item.courseCount}
              navigation={navigation}
            />
          )}
        />
      </Section>

      {/* <Section
        title='Bookmarks'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={context.bookmark}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CourseCard
              key={item.id}
              id={item.id}
              image={item.image}
              title={item.title}
              author={item.author}
              level={item.level}
              publishDate={item.publishDate}
              vote={item.vote}
              navigation={navigation}
            />
          )}
        />
      </Section> */}
    </ScrollView>
  );
};

export default Home;
