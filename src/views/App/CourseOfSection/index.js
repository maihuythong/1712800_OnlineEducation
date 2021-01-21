import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Content from "../../../components/CourseOfSection/Content";
import Header from "../../../components/CourseOfSection/Header";
import * as SeeAllScreenName from "../../../global/constants/seeAllScreenName";
import AuthorRepo from "../../../services/author/repo";
import CourseRepo from "../../../services/course/repo";
import styles from "./styles";

const CourseOfSection = (props) => {
  const {
    title,
    data,
    navigation,
    seeAllScreenName,
    navChildren,
    hideCover
  } = props.route.params;
  const [loading, setLoading] = useState(seeAllScreenName ? false : true);
  const [newData, setNewData] = useState([]);
  
  const loadSeeAllData = async () => {
    if (seeAllScreenName) {
      try {
        switch (seeAllScreenName) {
          case SeeAllScreenName.RECOMMENDED:
            CourseRepo.getRecommendedCourses()
              .then((data) => {
                setNewData(data);
              })
              .catch((e) => console.log(e));
            break;
          case SeeAllScreenName.PROCESSING:
            CourseRepo.getProcessingCourses()
              .then((data) => {
                setNewData(data);
              })
              .catch((e) => console.log(e));
            break;
          case SeeAllScreenName.FAVORITE:
            CourseRepo.getFavoriteCourses()
              .then((data) => {
                setNewData(data);
              })
              .catch((e) => console.log(e));
            break;
          case SeeAllScreenName.AUTHOR:
            AuthorRepo.getAllAuthor().then((data) => {
              setNewData(data);
            });
          default:
            break;
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadSeeAllData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.container}>
        {!hideCover ? (
          <View style={styles.head}>
            <Header
              title={title}
              img={
                "https://vnn-imgs-a1.vgcloud.vn/img2.infonet.vn/w660/Uploaded/2020/bnx_mjxuh/2019_07_18/san_ho_la_thuc_vat_hay_dong_vat.jpg"
              }
            />
          </View>): null }
          <ScrollView style={styles.content}>
            <Content
              isAuthor={
                seeAllScreenName === SeeAllScreenName.AUTHOR ? true : false
              }
              data={seeAllScreenName ? newData : data}
              navigation={navigation}
              navigationScreen={navChildren}
            />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CourseOfSection;
