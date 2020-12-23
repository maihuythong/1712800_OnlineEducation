import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import CourseCard from "../../../components/CourseCard";
import Section from "../../../components/Section";
import * as ScreenName from "../../../global/constants/screenName";
import { OfflineDataContext } from "../../../provider/offlinedata-provider";
import { getLoggedAccount } from "../../../services/app/getHelper";
import CourseRepo from "../../../services/course/repo";
import styles from "./styles";

const Home = (props) => {
  const { navigation } = props;
  const [topSells, setTopSells] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const context = useContext(OfflineDataContext);
  const currentUser = useSelector(getLoggedAccount);

  const loadHomeData = async () => {
    try {
      setLoading(true);
      const [topSellCourses, topNewsCourses] = await Promise.all([
        CourseRepo.getTopSell(),
        CourseRepo.getTopNewCourses(),
      ]);
      // const topSellCourses = await CourseRepo.getTopSell();
      setTopSells(topSellCourses);
      setTopNews(topNewsCourses);
      console.log(topNewsCourses);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadHomeData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView style={styles.scrollViewContainer}>
          <Section
            title="Top Selling"
            navigation={navigation}
            nav={ScreenName.CourseListScreen}
          >
            <FlatList
              horizontal
              data={topSells}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <CourseCard
                  key={item.id}
                  data={item}
                  navigation={navigation}
                />
              )}
            />
          </Section>

          <Section
            title="Top News"
            navigation={navigation}
            nav={ScreenName.CourseListScreen}
          >
            <FlatList
              horizontal
              data={topNews}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <CourseCard
                  key={item.id}
                  data={item}
                  navigation={navigation}
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
