import React, { useState, useEffect, useContext } from "react";
import { View, ActivityIndicator } from "react-native";
// import course from '../../../json/home.json';
import { FlatList } from "react-native-gesture-handler";
import LargeCardCourse from "../../../components/LargeCardCourse";
import { OfflineDataContext } from "../../../provider/offlinedata-provider";
import AsyncStorage from "../../../utils/storage/asyncStorage";
import { useSelector } from "react-redux";
import { getLoggedAccount } from "../../../services/app/getHelper";
import CourseRepo from "../../../services/course/repo";
import AuthorRepo from "../../../services/author/repo";
import {CourseDownloadScreen} from '../../../global/constants/screenName';

const Category = (props) => {
  const { navigation } = props;
  const loggedAccount = useSelector(getLoggedAccount);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [listDownloaded, setListDownloaded] = useState([]);

  const retrieveData = async () => {
    try {
      setLoading(true);
      let data = await AsyncStorage.getCourseDownloaded();
      if (data) {
        data = JSON.parse(data);
        setListDownloaded(data);
      }
    } finally {
      setLoading(false);
    }
  };

  const getCourseData = async () => {
    try {
      setLoading(true);
      console.log("====================================list");
      console.log(listDownloaded);
      console.log("====================================");
      if (listDownloaded.length > 0) {
        const docs = await Promise.all(
          (listDownloaded || []).map(async (id) => {
            try {
              const doc = await CourseRepo.getCourseDetailAccount(
                id,
                loggedAccount.id
              );
              const author = await AuthorRepo.getAuthorDetail(
                doc.instructorId
              );
              if (doc && author) {
                doc.instructor = author;
                console.log(doc);
                return doc;
              }
            } catch (e) {
              console.log("Error when retrieve data!");
            }
          })
        );

        setData(docs);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourseData();
  }, [listDownloaded]);

  useEffect(() => {
    retrieveData();
    const unsubscribe = navigation.addListener('focus', () => {
      retrieveData();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <LargeCardCourse
              key={item.id}
              id={item.id}
              data={item}
              authorName={item.instructor.name}
              navigation={navigation}
              navigationScreen={CourseDownloadScreen}
            />
          )}
        />
      )}
    </View>
  );
};

export default Category;
