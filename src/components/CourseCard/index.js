import moment from "moment";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import CustomRatingBar from "../../components/shared/CustomRatingBar";
import styles from "./styles";

const CourseCard = (props) => {
  const { data, navigation, navigationScreen } = props;
  const course = {
    id: data.id,
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation?.navigate(navigationScreen, { course: course })}
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
        <Text style={styles.defaultText}>{data?.instructor?.name}</Text>
        <Text style={styles.defaultText}>
          {moment(data.createdAt).format("DD/MM/yyyy")} -{" "}
          {data?.totalHours?.toFixed(3) ?? null} hours
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
