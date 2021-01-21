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
import {CourseListScreen, CourseIntroScreen} from '../../../global/constants/screenName'
import { useTranslation } from "react-i18next";
import * as Linking from 'expo-linking';
import { BASE_URL } from '../../../constants';

const Tab = createMaterialTopTabNavigator();

const CourseIntro = (props) => {
  const loggedAccount = useSelector(getLoggedAccount);
  const {navigation} = props;
  const id = props.route.params.course.id;
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [courseDetail, setCourseDetail] = useState({});
  const [introIsVideo, setIntroIsVideo] = useState(false);
  const [isYoutubeVideo, setIsYoutubeVideo] = useState(false);
  const dispatch = useDispatch();
  const [isOwner, setIsOwner] = useState(false);
  const { t } = useTranslation('notification');

  const loadCourseDetail = async () => {
    try {
      setLoading(true);
      const courseData = await CourseRepo.getCourseIntro(id);
      const courseDetail = await CourseRepo.getCourseDetailAccount(
        id,
        loggedAccount?.id ?? null
      );
      if (courseData && courseDetail) {
        setCourse(courseData);
        setCourseDetail(courseDetail);
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
      if(course.price === 0){
        const res = await CourseRepo.getFreeCourse(id);
        if (res) {
          console.log(res);
        }
      }else{
        console.log('fee');
        Linking.openURL(`${BASE_URL}/payment/${course.id}`);
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
            description: t('success_enroll'),
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
  
  const checkOwner = async () => {
    const isOwner = await UserRepo.checkOwnerCourse(id);
    if(isOwner) {
      setIsOwner(true);
    }
  }

  useEffect(() => {
    loadCourseDetail();
    checkOwner();
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
                favoriteCourse={favoriteCourse}
                enrollCourse={enrollCourse}
                data={courseDetail}
                similarCourseData={courseDetail.coursesLikeCategory}
                navigation = {navigation}
                navigationScreen = {CourseIntroScreen}
                isOwner = {isOwner}
              />
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default CourseIntro;
