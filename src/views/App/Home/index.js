import React, { useContext, useEffect } from "react";
import { FlatList, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard";
import PathCard from "../../../components/PathCard";
import Section from "../../../components/Section";
import * as ScreenName from "../../../global/constants/screenName";
import { OfflineDataContext } from "../../../provider/offlinedata-provider";
import { getLoggedAccount } from "../../../services/app/getHelper";
import AsyncStorage from "../../../utils/storage/asyncStorage";
import styles from "./styles";

const Home = (props) => {
  const { navigation } = props;

  const context = useContext(OfflineDataContext);
  const currentUser = useSelector(getLoggedAccount);
  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getAccessToken();
    };
    getToken();
  });

  return (
    <ScrollView style={styles.scrollViewContainer}>
      <Section
        title="Software Development"
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
              voteCount={item.voteCount}
              navigation={navigation}
            />
          )}
        />
      </Section>
      <Section
        title="IT Operations"
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
                voteCount={item.voteCount}
                navigation={navigation}
              />
            );
          }}
        />
      </Section>
      <Section
        title="Data Professtional"
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
              voteCount={item.voteCount}
              navigation={navigation}
            />
          )}
        />
      </Section>
      <Section
        title="Security Professtional"
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
              voteCount={item.voteCount}
              navigation={navigation}
            />
          )}
        />
      </Section>
      <Section
        title="Software Development"
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
              voteCount={item.voteCount}
              navigation={navigation}
            />
          )}
        />
      </Section>
      <Section
        title="My Paths"
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
