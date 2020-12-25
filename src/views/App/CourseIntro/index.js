import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../components/CourseDetail/Content";
import Header from "../../../components/CourseDetail/Header";
import Transcript from "../../../components/CourseDetail/Transcript";
import VideoPlayer from "../../../components/VideoPlayer";
import { getLoggedAccount } from "../../../services/app/getHelper";
import CourseRepo from "../../../services/course/repo";
import styles from "./styles";

const Tab = createMaterialTopTabNavigator();

const CourseIntro = (props) => {
  const loggedAccount = useSelector(getLoggedAccount);
  const id = props.route.params.course.id;
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [introIsVideo, setIntroIsVideo] = useState(false);
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);

  const loadCourseDetail = async () => {
    try {
      setLoading(true);
      const courseData = await CourseRepo.getCourseIntro(id);
      if (courseData) {
        setCourse(courseData);
        const url = courseData?.promoVidUrl?? null;
        console.log(url);
        if (courseData.promoVidUrl) {
          let index = url.lastIndexOf(".");
          const extension = url.substring(index + 1, url.length).toLowerCase();
          const img = [
            "jpg",
            "png",
            "gif",
            "svg",
            "bmp",
            "jpeg",
            "raw",
            "heic",
            "webp",
            "psd",
          ];
          if (!img.includes(extension)) setIntroIsVideo(true);
        }
        if (introIsVideo) {
          if (url.includes("youtu")) setIsYoutubeVideo(true);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const onStopVideo = () => {};

  const onVideoEnded = () => {};

  useEffect(() => {
    loadCourseDetail();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.courseDetailContainer}>
          <View style={styles.video}>
            {introIsVideo ? (
              <ImageBackground
                source={course.promoVidUrl}
                style={styles.image}
              />
            ) : (
              <VideoPlayer
                isYoutubeVideo={isYoutubeVideo}
                courseData={course}
                url={course.promoVidUrl}
                onStopVideo={onStopVideo}
                onVideoEnded={onVideoEnded}
              />
            )}
          </View>
          <View style={styles.other}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Header data={course} />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default CourseIntro;
