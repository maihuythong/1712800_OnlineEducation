import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Content from "../../../components/CourseDetail/Content";
import Header from "../../../components/CourseDetail/Header";
import Transcript from "../../../components/CourseDetail/Transcript";
import VideoPlayer from "../../../components/VideoPlayer";
import { getLoggedAccount } from "../../../services/app/getHelper";
import CourseRepo from "../../../services/course/repo";
import styles from "./styles";

const Tab = createMaterialTopTabNavigator();

const CourseDetail = (props) => {
  const loggedAccount = useSelector(getLoggedAccount);
  const id = props.route.params.course.id;
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState({});
  const [section, setSection] = useState([]);

  const loadCourseDetail = async () => {
    try {
      setLoading(true);
      const courseData = await CourseRepo.getCourseDetailAccount(
        id,
        loggedAccount.id
      );
      if (courseData) {
        setCourse(courseData);
        let arr = [];
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
        });
        setSection(arr);
        console.log(
          "================================================================abcsection"
        );
        console.log(section);
        // console.log('==================================== course');
        // console.log(course);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCourseDetail();
  }, []);

  // const context = useContext(OfflineDataContext);
  // console.log(props.route.params.course.id);
  // const course = context.courseDetailList.find(
  //   (el) => el.id === props.route.params.course.id
  // );
  // const {
  //   id,
  //   courseName,
  //   author,
  //   level,
  //   publishDate,
  //   duration,
  //   vote,
  //   voteCount,
  //   description,
  //   content,
  //   transcript,
  // } = course;

  // const courseCard = context.course.find((el) => el.id === id);

  // const addToBookmark = () => {
  //   if (!context.bookmark.find((el) => el.id === id))
  //     context.setBookmark([...context.bookmark, courseCard]);
  // };

  console.log("1aaa");
  if (!loading && section.length > 0) {
    console.log("sectionxxxx");
    console.log(section);
  }

  return (
    <View style={{ flex: 1 }}>
      {loading && section.length === 0 ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.courseDetailContainer}>
          <View style={styles.video}>
            <Text>This is video</Text>
            <VideoPlayer />
          </View>
          <View style={styles.other}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Header data={course} />
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
                  name="CONTENTS"
                  component={() => <Content DATA={section} />}
                  // options={{ DATA: content }}
                />
                <Tab.Screen
                  name="TRANSCRIPT"
                  component={() => <Transcript />}
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
