import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard";
import Section from "../../../components/Section";
import * as ScreenName from "../../../global/constants/screenName";
import { OfflineDataContext } from "../../../provider/offlinedata-provider";
import { getLoggedAccount } from "../../../services/app/getHelper";
import CourseRepo from "../../../services/course/repo";
import * as SeeAllScreenName from '../../../global/constants/seeAllScreenName';
import styles from "./styles";

const Home = (props) => {
  const { navigation } = props;
  const [processCourses, setProcessCourses] = useState([]);
  const [favoriteCourse, setFavoriteCourse] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadHomeData = async () => {
    try {
      setLoading(true);
      const [processingCourses, favoriteCourses] = await Promise.all([
        CourseRepo.getProcessingCourses(),
        CourseRepo.getFavoriteCourses(),
      ]);

      console.log('processing courses');
      console.log(processingCourses);
      setProcessCourses(processingCourses);
      setFavoriteCourse(favoriteCourses);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // const unsubscribe = navigation.addListener('focus', () => {
      loadHomeData();
      console.log('cc gi the');
      console.log(processCourses);
    // });

    // return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView style={styles.scrollViewContainer}>
          <Section
            title="Processing Courses"
            navigation={navigation}
            nav={ScreenName.CourseListScreen}
            navChildren={ScreenName.CourseDetailScreen}
            seeAllScreenName = {SeeAllScreenName.PROCESSING}
          >
            <FlatList
              horizontal
              data={processCourses}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <CourseCard
                  key={item.id}
                  data={item}
                  navigation={navigation}
                  navigationScreen = {ScreenName.CourseDetailScreen}
                />
              )}
            />
          </Section>

          <Section
            title="Favorite Courses"
            navigation={navigation}
            nav={ScreenName.CourseListScreen}
            navChildren={ScreenName.CourseDetailScreen}
            seeAllScreenName = {SeeAllScreenName.FAVORITE}
          >
            <FlatList
              horizontal
              data={favoriteCourse}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <CourseCard
                  key={item.id}
                  data={item}
                  navigation={navigation}
                  navigationScreen = {ScreenName.CourseDetailScreen}
                />
              )}
            />
          </Section>

          {/* <Section
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
          </Section> */}
        </ScrollView>
      )}
    </View>
  );
};

export default Home;
