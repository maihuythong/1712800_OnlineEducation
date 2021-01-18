import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Author from "../../../components/Browse/Author";
import LargeImageButton from "../../../components/Browse/LargeImageButton";
import SkillBadge from "../../../components/Browse/SkillBadge";
import CourseCard from "../../../components/CourseCard";
import Section from "../../../components/Section";
import { images } from "../../../components/shared/image";
import * as ScreenName from "../../../global/constants/screenName";
import * as SeeAllScreenName from "../../../global/constants/seeAllScreenName";
import { getCategories } from "../../../services/app/getHelper";
import AuthorRepo from "../../../services/author/repo";
import CourseRepo from "../../../services/course/repo";
import styles from "./styles";
import { useTranslation } from 'react-i18next';

const Browse = (props) => {
  const { navigation } = props;
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [topSells, setTopSells] = useState([]);
  const [topNews, setTopNews] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const categories = useSelector(getCategories);
  const { t } = useTranslation('browse');

  const loadData = async () => {
    try {
      setLoading(true);
      const [
        listAuthor,
        recommendedCourses,
        topSellCourses,
        topNewsCourses,
      ] = await Promise.all([
        AuthorRepo.getAllAuthor(),
        CourseRepo.getRecommendedCourses(),
        CourseRepo.getTopSell(),
        CourseRepo.getTopNewCourses(),
      ]);
      setAuthors(listAuthor);
      setRecommended(recommendedCourses);
      setTopSells(topSellCourses);
      setTopNews(topNewsCourses);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <LargeImageButton
            text={t('new_release')}
            image={images.newrelease.uri}
            navigation={navigation}
            data={topNews}
            navigationScreen={ScreenName.CourseIntroScreen}
          />
          <LargeImageButton
            text={t('top_sell')}
            image={images.recommended.uri}
            navigation={navigation}
            data={topSells}
            navigationScreen={ScreenName.CourseIntroScreen}
          />
          {/* <ScrollView
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
                  navigation={navigation}
                />
              )}
            />
          </ScrollView> */}

          <Section title={t('popular_skill')} hideSeeall={true}>
            <FlatList
              horizontal
              data={categories}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <SkillBadge
                  key={item.id}
                  id={item.id}
                  image={images.checked.uri}
                  content={item.name}
                  navigation={navigation}
                />
              )}
            />
          </Section>

          <Section
            title={t('recommended')}
            navigation={navigation}
            nav={ScreenName.CourseListScreen}
            navChildren={ScreenName.CourseIntroScreen}
            seeAllScreenName={SeeAllScreenName.RECOMMENDED}
          >
            <FlatList
              horizontal
              data={recommended}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <CourseCard
                  key={item.id}
                  data={item}
                  navigation={navigation}
                  navigationScreen={ScreenName.CourseIntroScreen}
                />
              )}
            />
          </Section>

          {/* 
          <Section
            title="Paths"
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
          </Section> */}

          <Section
            title={t('top_author')}
            navigation={navigation}
            nav={ScreenName.CourseListScreen}
            navChildren={ScreenName.AuthorDetailScreen}
            seeAllScreenName={SeeAllScreenName.AUTHOR}
          >
            <FlatList
              horizontal
              data={authors}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <Author data={item} navigation={navigation} />
              )}
            />
          </Section>
        </ScrollView>
      )}
    </View>
  );
};

export default Browse;
