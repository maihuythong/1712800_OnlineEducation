import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import * as FileSystem from "expo-file-system";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../components/CourseDetail/Content";
import Header from "../../../components/CourseDetail/Header";
import Reviews from "../../../components/CourseDetail/Reviews";
import Transcript from "../../../components/CourseDetail/Transcript";
import VideoPlayer from "../../../components/VideoPlayer";
import { CourseIntroScreen } from "../../../global/constants/screenName";
import { getLoggedAccount } from "../../../services/app/getHelper";
import CourseRepo from "../../../services/course/repo";
import AsyncStorage from '../../../utils/storage/asyncStorage';
import styles from "./styles";

const Tab = createMaterialTopTabNavigator();

const CourseDownload = (props) => {
  const loggedAccount = useSelector(getLoggedAccount);
  const { navigation } = props;
  const id = props.route.params.course.id;
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [courseReview, setCourseReview] = useState([]);
  const [section, setSection] = useState([]);
  const [playingVideo, setPlayingVideo] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const [listVideo, setListVideo] = useState([]);
  const { t } = useTranslation("course");
  const [canDownload, setCanDownload] = useState(false);

  const loadCourseDetail = async () => {
    try {
      setLoading(true);
      const courseData = await CourseRepo.getCourseDetailAccount(
        id,
        loggedAccount?.id
      );
      if (courseData) {
        setCourse(courseData);
        setCourseReview(courseData.ratings.ratingList);
        let arr = [];
        let lessonVideoArr = [];
        courseData.section.map((item, index) => {
          arr.push({
            index,
            id: item.id,
            title: item.name,
            courseId: item.courseId,
            sumHours: item.sumHours,
            sumLessonFinish: item.sumLessonFinish,
            data: item.lesson,
          });
          lessonVideoArr.push({
            lesson: item.lesson,
            id: item.id,
          });
        });
        setListVideo(lessonVideoArr);
        setSection(arr);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onStopVideo = () => {};

  const onVideoEnded = () => {};

  // different
  const onSelectSection = async (courseId, lessonId) => {
    console.log("select " + courseId + lessonId);
    const video = FileSystem.documentDirectory + "/" + lessonId+".mp4";
    console.log(video);
    if (video) {
      setPlayingVideo(video);
      setCurrentTime(0);
    }
  };

  useEffect(() => {
    loadCourseDetail();
  }, []);

  const checkCanBeDownloaded = () => {
    let flag = false;
    listVideo.map((el) => {
      el.lesson.map((lesson) => {
        const ext =
          lesson?.videoName?.substring(
            lesson.videoName.length - 4,
            lesson.videoName.length
          ) ?? null;
        if (ext === ".mov" || ext === ".mp4") {
          flag = true;
        } else {
          flag = false;
        }
      });
    });

    setCanDownload(flag);
  };

  const handleDownload = async () => {
    if (canDownload) {
      let listLink = [];

      listVideo.map((el) => {
        el.lesson.map((lesson) => {
          listLink.push(lesson);
        });
      });

      const res = await Promise.all(
        (listLink || []).map((lesson) => {
          console.log(lesson);
          return CourseRepo.getLessonInfo(id, lesson.id);
        })
      );
      console.log(res);
      if (res) {
        console.log("====================================");
        console.log("starting download");
        const downloadedResponse = await Promise.all(
          (res || []).map(async (lesson) => {
            try {
              const lessonDownloaded = await FileSystem.downloadAsync(
                lesson.videoUrl,
                FileSystem.documentDirectory + lesson.id + ".mp4"
              );
              if (lessonDownloaded) {
                console.log(lessonDownloaded.uri);
                return lessonDownloaded.uri;
              }
              // .then(({ uri }) => {
              //   console.log('Finished downloading to ', uri);
              //   return uri;
              // })
            } catch (error) {
              console.error(error);
            }
          })
        );

        if (downloadedResponse) {
          AsyncStorage.addNewCourseDownloaded(id);
        }
      }
    }
  };

  useEffect(() => {
    if (listVideo) {
      checkCanBeDownloaded();
    }
  }, [listVideo]);

  return (
    <View style={{ flex: 1 }}>
      {loading && section.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.courseDetailContainer}>
          <View style={styles.video}>
            <VideoPlayer
              isYoutubeVideo={isYoutubeVideo}
              url={playingVideo}
              onStopVideo={onStopVideo}
              onVideoEnded={onVideoEnded}
            />
          </View>
          <View style={styles.other}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Tab.Navigator
                initialRouteName="CONTENTS"
                tabBarOptions={{
                  activeTintColor: "#236c8d",
                  inactiveTintColor: "#858a8f",
                  labelStyle: { fontSize: 12 },
                  style: {
                    // backgroundColor: '#1f242a'
                  },
                }}
              >
                <Tab.Screen
                  name={t("lesson_list")}
                  component={() => (
                    <Content
                      DATA={section}
                      onSelectSection={onSelectSection}
                      currentTime={currentTime}
                    />
                  )}
                  // options={{ DATA: content }}
                />
                <Tab.Screen
                  name={t("course_assignment")}
                  component={() => <Transcript />}
                  // options={{ tabBarLabel: 'Updates' }}
                />
                <Tab.Screen
                  name={t("rating_course")}
                  component={() => (
                    <Reviews
                      user={loggedAccount}
                      courseId={id}
                      courseReview={courseReview}
                      setCourseReview={setCourseReview}
                    />
                  )}
                  // options={{ tabBarLabel: 'Updates' }}
                />
              </Tab.Navigator>
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default CourseDownload;
