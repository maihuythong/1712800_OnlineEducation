import React from "react";
import { View, Image, Text } from "react-native";
import Moment from "moment";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ScreenName from "../../global/constants/screenName";
import CustomRatingBar from "../../components/shared/CustomRatingBar";

const LargeCardCourse = (props) => {
  const { id, data, authorName, navigation } = props;

  const course = { id: id };

  return (
    <View>
      {data ? (
        <TouchableOpacity
          style={styles.container}
          onPress={() =>
            navigation.navigate(ScreenName.CourseDetailScreen, { course })
          }
        >
          <Image
            style={[styles.image, styles.left]}
            source={{ uri: data.imageUrl }}
          />
          <View style={styles.right}>
            <Text style={styles.title}>{data.title}</Text>
            {/* Handle if multiple author (api only 1 author)
        <View>
          {author.map( e => <Text>{e.name}</Text>)}
        </View> */}
            <Text style={styles.text}>{authorName}</Text>
            <Text style={styles.text}>
              {Moment(data.createdAt).format("DD/MM/yyy")} -{" "}
              {data.totalHours.toFixed(3)} hours
            </Text>
            <View style={styles.voteContainer}>
              <CustomRatingBar
                star={
                  (data.contentPoint +
                    data.formalityPoint +
                    data.presentationPoint) /
                  3
                }
              />
              <Text style={styles.text}>({data.ratedNumber})</Text>
            </View>
            {/* <Text style={styles.text}>
          {vote} ({voteCount})
        </Text> */}
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default LargeCardCourse;
