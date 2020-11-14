import React from 'react';
import { View, FlatList } from 'react-native';
import LargeImageButton from '../../../components/Browse/LargeImageButton';
import { images } from '../../../shared/image';
import styles from './styles';
import SmallImageButton from '../../../components/Browse/SmallImageButton';
import browsejson from '../../../json/browse.json';
import popularskilljson from '../../../json/popularskill.json';
import authorsjson from '../../../json/authors.json';
import Section from '../../../components/Section';
import PathCard from '../../../components/PathCard';
import mypathjson from '../../../json/mypaths.json';
import { ScrollView } from 'react-native-gesture-handler';
import SkillBadge from '../../../components/Browse/SkillBadge';
import Author from '../../../components/Browse/Author';
import * as ScreenName from '../../../global/constants/screenName';

const Browse = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <LargeImageButton
        text={`NEW \n RELEASES`}
        image={images.newrelease.uri}
        navigation={navigation}
      />
      <LargeImageButton
        text={`RECOMENDED \n FOR YOU`}
        image={images.recommended.uri}
        navigation={navigation}
      />
      {/* <SmallImageButton text={`CONFERENCES`} image={images.conference.uri} /> */}
      <ScrollView
        horizontal
        show
        style={styles.smallImage}
        showsVerticalScrollIndicator={false}
      >
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={Math.ceil(browsejson.length / 2)}
          data={browsejson}
          renderItem={({ item }) => (
            <SmallImageButton
              key={item.id}
              id={item.id}
              text={item.text}
              image={images.conference.uri}
            />
          )}
        />
      </ScrollView>

      <Section title='Popular skills' hideSeeall={true}>
        <FlatList
          horizontal
          data={popularskilljson}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <SkillBadge
              key={item.id}
              id={item.id}
              image={item.image}
              content={item.title}
            />
          )}
        />
      </Section>

      <Section
        title='Paths'
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
            />
          )}
        />
      </Section>

      <Section
        title='Top authors'
        navigation={navigation}
        nav={ScreenName.CourseListScreen}
      >
        <FlatList
          horizontal
          data={authorsjson}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Author image={item.avatar} name={item.name} />
          )}
        />
      </Section>
    </ScrollView>
  );
};

export default Browse;
