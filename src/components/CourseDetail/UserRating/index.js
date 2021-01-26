import React from "react";
import { View, Text, TextInput } from "react-native";
import { Avatar } from "react-native-elements";
import CustomRatingBar from "../../shared/CustomRatingBar";
import moment from "moment";
import styles from "./styles";

const UserRating = (props) => {
  const { reviewData } = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Avatar
          style={styles.avatar}
          rounded
          size={200}
          source={{ uri: reviewData?.user?.avatar }}
        />
        <Text style={styles.authorName}>{reviewData.user.name}</Text>
      </View>
      <View style={styles.userReviews}>
        <CustomRatingBar
          star={
            (reviewData.contentPoint +
              reviewData.formalityPoint +
              reviewData.presentationPoint) /
            3
          }
        />
        <Text style={styles.reviewText}>{reviewData.content}</Text>
        <Text style={styles.reviewText}>{moment(reviewData.createdAt).format("DD/MM/yyyy hh:mm:ss")}</Text>
      </View>
    </View>
  );
};

export default UserRating;
