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
import UserRepo from "../../../services/user/repo";
import AsyncStorage from "../../../utils/storage/asyncStorage";
import styles from "./styles";

const Tab = createMaterialTopTabNavigator();

const CourseDetail = (props) => {
  const loggedAccount = useSelector(getLoggedAccount);
  const { navigation } = props;
  const id = props.route.params.course.id;
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [courseReview, setCourseReview] = useState([]);
  const [section, setSection] = useState([]);
  const [playingVideo, setPlayingVideo] = useState("");
  const [currentTime, setCurrentTime] = useState();
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const [listVideo, setListVideo] = useState([]);
  const { t } = useTranslation("course");
  const [canDownload, setCanDownload] = useState(false);
  const [playingLesson, setPlayingLesson] = useState();
  const [isOwner, setIsOwner] = useState(false);

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

  onStopVideo = async (time) => {
    if (playingLesson?.id) {
      await CourseRepo.updateProcessTime({ lessonId: playingLesson.id, currentTime: time });
    }
  };

  const onVideoEnded = async () => {
    try {
      if (playingLesson?.id && !playingLesson.isFinish) {
        await CourseRepo.lessonFinish(playingLesson.id);
      }
    } catch (e) {}
    if (playingLesson?.nextLessonId) {
      await onSelectSection(id , playingLesson?.nextLessonId);
    }
  };

  const handleSubmit = (comment) => {};

  const onSelectSection = async (courseId, lessonId) => {
    console.log("select " + courseId + lessonId);
    console.log('====================================');
    console.log(courseId);
    console.log(lessonId);
    const lesson = await CourseRepo.getLessonInfo(courseId, lessonId);
    if (lesson) {
      console.log("--------lesson");
      console.log(lesson);
      setPlayingLesson(lesson);
      setPlayingVideo(lesson.videoUrl);
      setCurrentTime(lesson.currentTime);

      if (lesson.videoUrl.includes("youtu")) setIsYoutubeVideo(true);
    }
  };

  const checkOwner = async () => {
    const isOwner = await UserRepo.checkOwnerCourse(id);
    console.log(isOwner);
    if (isOwner) {
      setIsOwner(true);
    }
  };

  useEffect(() => {
    loadCourseDetail();
    checkOwner();
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

  useEffect(() => {
    const getLastWatched = async () => {
      console.log('get last watched');
      const doc = await CourseRepo.getLastWatched(id);
      if(doc) {
        onSelectSection(id, doc.lessonId);
      }
    }

     getLastWatched();
  }, [])

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

        // FileSystem.downloadAsync(
        //   'http://techslides.com/demos/sample-videos/small.mp4',
        //   FileSystem.documentDirectory + 'small.mp4'
        // )
        //   .then(({ uri }) => {
        //     console.log('Finished downloading to ', uri);
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      }

      //  await CourseRepo.getLessonInfo(courseId, lessonId);
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
              currentTime={currentTime}
            />
          </View>
          <View style={styles.other}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Header
                data={course}
                similarCourseData={course.coursesLikeCategory}
                navigation={navigation}
                navigationScreen={CourseIntroScreen}
                canDownload={canDownload}
                handleDownload={handleDownload}
                isOwner={isOwner}
              />
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

export default CourseDetail;
