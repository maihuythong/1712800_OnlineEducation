import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from "./styles";
import * as ScreenName from "../../global/constants/screenName";
import CustomRatingBar from "../../components/shared/CustomRatingBar";
import moment from "moment";

const CourseCard = (props) => {
  const { data, navigation, navigationScreen } = props;
  const course = {
    id: data.id,
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        navigation.navigate(navigationScreen, { course: course })
      }
    >
      <View style={styles.cardImage}>
        <Image
          style={styles.image}
          source={{ uri: data.imageUrl }}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.cardContent}>
        <Text numberOfLines={1} style={styles.title}>
          {data.title.length < 30
            ? `${data.title}`
            : `${data.title.substring(0, 30)}...`}
        </Text>
        <Text style={styles.defaultText}>{data["instructor.user.name"]}</Text>
        <Text style={styles.defaultText}>
          {moment(data.createdAt).format("DD/MM/yyyy")} - {data.totalHours.toFixed(3)}{" "}
          hours
        </Text>
        <View style={styles.rating}>
          <CustomRatingBar
            star={
              (data.presentationPoint +
                data.formalityPoint +
                data.contentPoint) /
                3 ?? 1
            }
          />
          <Text style={styles.voteCount}>({data.ratedNumber})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
