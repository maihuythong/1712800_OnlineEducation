import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { log } from "react-native-reanimated";
import Content from "../../../components/CourseOfSection/Content";
import SearchRepo from "../../../services/search/repo";
import {CourseIntroScreen} from '../../../global/constants/screenName';
import styles from "./styles";

const CourseOfSkill = (props) => {
  const { id, title, navigation } = props.route.params;
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState([]);

  const loadCourseOfSkill = async () => {
    setLoading(true);

      const opt = {category: [id]};
      SearchRepo.searchCourse({opt})
      .then(data => {
        setCourse(data.courses.data);
      } )
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    loadCourseOfSkill();
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View style={styles.container}>
          <ScrollView style={styles.content}>
            <Content
                data={course}
                navigation={navigation}
                navigationScreen={CourseIntroScreen}
              />
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default CourseOfSkill;
