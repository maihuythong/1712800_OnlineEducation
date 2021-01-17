import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View, Share } from "react-native";
import BigBadge from "../../BigBadge";
import LargeButton from "../../LargeButton";
import MediumButton from "../../MediumButton";
import CustomRatingBar from "../../shared/CustomRatingBar";
import { images } from "../../shared/image";
import styles from "./styles";
import moment from "moment";
import AuthorRepo from "../../../services/author/repo";
import { showFlashMessage } from "../../../services/app/actions";
import MessageType from "../../../services/app/MessageType";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../../constants";

const Header = (props) => {
  const {
    isOwner,
    data,
    favoriteCourse,
    enrollCourse,
    similarCourseData,
    navigation,
    navigationScreen,
  } = props;
  const [instructor, setInstructor] = useState();
  const dispatch = useDispatch();
  const { t } = useTranslation(["course", "notification"]);

  useEffect(() => {
    const getInstructor = async () => {
      try {
        const res = await AuthorRepo.getAuthorDetail(data.instructorId);
        if (res) {
          setInstructor(res);
        }
      } catch (e) {
        console.log(e);
      }
    };

    if (data?.instructor) {
      setInstructor(data.instructor);
    } else {
      getInstructor();
    }
  }, []);

  const addToBookmark = () => {
    enrollCourse();
  };

  const shareCourse = async () => {
    if (data) {
      try {
        const url = `${BASE_URL}/course-detail/${data.id}`;
        const res = await Share.share({
          title: t("course:share_title"),
          message: url,
        });

        if (res.action === Share.sharedAction) {
          // shared
          dispatch(
            showFlashMessage({
              type: MessageType.Type.SUCCESS,
              description: t("notification:share_course_success"),
            })
          );
        } else if (res.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (e) {
        dispatch(
          showFlashMessage({
            type: MessageType.Type.DANGER,
            description: t("notification:share_course_fail"),
          })
        );
      }
    }
  };

  const [isFull, setIsFull] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.title}</Text>
      {instructor ? (
        <View style={styles.author}>
          <FlatList
            horizontal
            data={[instructor]}
            renderItem={({ item }) => (
              <BigBadge image={item.avatar} content={item.name} />
            )}
          />
        </View>
      ) : null}
      <View style={styles.courseInfo}>
        <Text style={styles.textNormalColor}>
          {moment(data.createdAt).format("DD/MM/yyyy")} •{" "}
          {data.totalHours?.toFixed(3)}
        </Text>
        <View style={styles.vote}>
          <CustomRatingBar star={data.formalityPoint} />
          <Text style={styles.textNormalColor}>({data.ratedNumber})</Text>
        </View>
      </View>
      <View style={styles.operation}>
          {!isOwner ? 
        <MediumButton
          text={t("course:buy_course")}
          uri={images.bookmark.uri}
          action={addToBookmark}
        /> : null}
        <MediumButton
          text={t("course:like_course")}
          uri={images.love.uri}
          action={favoriteCourse}
        />
        <MediumButton
          text={t("course:download_course")}
          uri={images.download.uri}
        />
        <MediumButton
          text={t("course:share_course")}
          uri={images.download.uri}
          action={shareCourse}
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.textDescription}>
          {isFull ? (
            <Text numberOfLines={5} style={styles.description}>
              {data.description}
            </Text>
          ) : (
            <Text style={styles.description}>{data.description}</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => setIsFull(!isFull)}
        >
          {isFull ? (
            <Text style={styles.toggleIcon}>&#8897;</Text>
          ) : (
            <Text style={styles.toggleIcon}>&#8896;</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        {/* <LargeButton
          uri={images.takealearn.uri}
          text={"Take a learning check"}
        /> */}
        <LargeButton
          uri={images.viewmore.uri}
          text={t("course:course_similar")}
          data={similarCourseData}
          navigation={navigation}
          navigationScreen={navigationScreen}
          hideCover={true}
        />
      </View>
    </View>
  );
};

export default Header;
