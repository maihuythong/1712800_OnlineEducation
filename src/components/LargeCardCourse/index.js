import Moment from "moment";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomRatingBar from "../../components/shared/CustomRatingBar";
import styles from "./styles";

const LargeCardCourse = (props) => {
  const { id, data, authorName, navigation, navigationScreen } = props;
  const course = { id: id };

  return (
    <View>
      {data ? (
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.push(navigationScreen, { course })}
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
