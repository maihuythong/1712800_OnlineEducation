import React from 'react';
import { ScrollView, Text, FlatList } from 'react-native';
import styles from './styles';
import homejson from '../../../json/home.json';
import Card from '../../../components/Card';
import Section from '../../../components/Section';

const Home = () => {
  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Section title='Software Development'>
        <FlatList
          horizontal
          data={homejson}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
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
          data={homejson}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
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
          data={homejson}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
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
          data={homejson}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
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
          data={homejson}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
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
