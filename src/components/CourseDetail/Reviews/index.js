import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from "./styles";
import { AirbnbRating, Rating } from "react-native-ratings";
import SvgUri from "expo-svg-uri";
import { images } from "../../shared/image";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import UserRating from "../UserRating";
import CourseRepo from "../../../services/course/repo";
import { showFlashMessage } from "../../../services/app/actions";
import MessageType from "../../../services/app/MessageType";

const Reviews = ({ user, courseReview, courseId, setCourseReview }) => {
  const [text, setText] = useState("");
  const [star1, setStar1] = useState(3);
  const [star2, setStar2] = useState(3);
  const [star3, setStar3] = useState(3);
  const { t } = useTranslation(["course", "notification"]);
  const dispatch = useDispatch();

  const onChangeText = (value) => {
    setText(value);
  };

  const onFinishRatingFormality = (star) => {
    setStar1(star);
  };
  const onFinishRatingContent = (star) => {
    setStar2(star);
  };
  const onFinishRatingPresentation = (star) => {
    setStar3(star);
  };

  const sendReviewCourse = () => {
    if (text.trim().length === 0) {
      return;
    }

    CourseRepo.rateCourse({
      courseId,
      star1,
      star2,
      star3,
      content: text,
    })
      .then((reviewedData) => {
        reviewedData.user = user;
        setText("");
        setCourseReview((prev) => {
          let temp = prev.filter((el) => el.userId !== user.id);
          // console.log(temp);
          const newList = [...temp, reviewedData];
          return newList;
        });
        dispatch(
          showFlashMessage({
            type: MessageType.Type.SUCCESS,
            description: t("notification:rate_course_success"),
          })
        );
      })
      .catch(() => {
        dispatch(
          showFlashMessage({
            description: t("notification:rate_course_fail"),
          })
        );
      })
      .finally(() => {});
  };

  return useMemo(() => {
    return (
      <ScrollView style={styles.container}>
        <KeyboardAwareScrollView>
          <View style={styles.containerStarRating}>
            <View style={styles.textRatingContainer}>
              <Text style={styles.textRating}>{t('course:formality_point')}:</Text>
            </View>
            <AirbnbRating
              starContainerStyle={styles.ratingBar}
              count={5}
              reviews={[]}
              defaultRating={star1}
              size={20}
              onFinishRating={onFinishRatingFormality}
            />
          </View>
          <View style={styles.containerStarRating}>
            <View style={styles.textRatingContainer}>
              <Text style={styles.textRating}>{t('course:content_point')}:</Text>
            </View>
            <AirbnbRating
              starContainerStyle={styles.ratingBar}
              count={5}
              reviews={[]}
              defaultRating={star2}
              size={20}
              onFinishRating={onFinishRatingContent}
            />
          </View>
          <View style={styles.containerStarRating}>
            <View style={styles.textRatingContainer}>
              <Text style={styles.textRating}>{t('course:presentation_point')}:</Text>
            </View>
            <AirbnbRating
              starContainerStyle={styles.ratingBar}
              count={5}
              reviews={[]}
              defaultRating={star3}
              size={20}
              onFinishRating={onFinishRatingPresentation}
            />
          </View>
          <View style={styles.sendReview}>
            <TextInput
              autoCapitalize={"none"}
              value={text}
              onChangeText={onChangeText}
              style={styles.text}
              placeholder={t('course:review_content')}
              placeholderTextColor="#A9A9A9"
            />
            <TouchableOpacity onPress={() => sendReviewCourse()}>
              <SvgUri width="32" height="32" source={images.send.uri} />
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        <View>
          {courseReview.map((e) => {
            return <UserRating reviewData={e} />;
          })}
        </View>
      </ScrollView>
    );
  }, [text]);
};

export default Reviews;
