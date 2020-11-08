import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import styles from './styles';
import cousrsejson from '../../../json/home.json';
import mypathjson from '../../../json/mypaths.json';
import CourseCard from '../../../components/CourseCard';
import Section from '../../../components/Section';
import PathCard from '../../../components/PathCard';

const Home = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Section title='Software Development'>
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
            />
          )}
        />
      </Section>
      <Section title='IT Operations'>
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
            />
          )}
        />
      </Section>
      <Section title='Data Professtional'>
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
            />
          )}
        />
      </Section>
      <Section title='Security Professtional'>
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
            />
          )}
        />
      </Section>
      <Section title='Software Development'>
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
            />
          )}
        />
      </Section>
      <Section title='My Paths'>
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
            />
          )}
        />
      </Section>

      <Section title='Bookmarks'>
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
            />
          )}
        />
      </Section>
    </ScrollView>
  );
};

export default Home;
