import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import styles from './styles';
import cousrsejson from '../../../json/home.json';
import mypathjson from '../../../json/mypaths.json';
import CourseCard from '../../../components/CourseCard';
import Section from '../../../components/Section';
import PathCard from '../../../components/PathCard';
import * as ScreenName from '../../../global/constants/screenName';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Section
        title='Software Development'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={cousrsejson}
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
          data={cousrsejson}
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
          data={cousrsejson}
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
          data={cousrsejson}
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
          data={cousrsejson}
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
          data={mypathjson}
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

      <Section
        title='Bookmarks'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={cousrsejson}
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
    </ScrollView>
  );
};

export default Home;
