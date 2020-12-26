import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  View
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../../components/CourseDetail/Header";
import VideoPlayer from "../../../components/VideoPlayer";
import { showFlashMessage } from "../../../services/app/actions";
import { getLoggedAccount } from "../../../services/app/getHelper";
import MessageType from "../../../services/app/MessageType";
import CourseRepo from "../../../services/course/repo";
import UserRepo from "../../../services/user/repo";
import styles from "./styles";

const Tab = createMaterialTopTabNavigator();

const CourseIntro = (props) => {
  const loggedAccount = useSelector(getLoggedAccount);
  const id = props.route.params.course.id;
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [introIsVideo, setIntroIsVideo] = useState(false);
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const dispatch = useDispatch();

  const loadCourseDetail = async () => {
    try {
      setLoading(true);
      const courseData = await CourseRepo.getCourseIntro(id);
      if (courseData) {
        setCourse(courseData);
        const url = courseData?.promoVidUrl ?? null;
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

  const enrollCourse = async () => {
    try {
      const res = await CourseRepo.getFreeCourse(id);
      if (res) {
        console.log(res);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const favoriteCourse = async () => {
    try {
      const res = await UserRepo.likeCourse(id);
      if (res) {
        dispatch(
          showFlashMessage({
            type: MessageType.Type.SUCCESS,
            description: "Khóa học đã được thêm vào mục yêu thích",
          })
        );
      }
    } catch (e) {
      dispatch(
        showFlashMessage({
          type: MessageType.Type.DANGER,
          description: e?.response?.data?.message,
        })
      );
    }
  };

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
            {!introIsVideo ? (
              <ImageBackground
                source={{ uri: course.imageUrl }}
                style={styles.image}
              />
            ) : (
              <VideoPlayer
                isYoutubeVideo={isYoutubeVideo}
                url={course.promoVidUrl}
                onStopVideo={onStopVideo}
                onVideoEnded={onVideoEnded}
              />
            )}
          </View>
          <View style={styles.other}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Header
                data={course}
                favoriteCourse={favoriteCourse}
                enrollCourse={enrollCourse}
              />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default CourseIntro;
