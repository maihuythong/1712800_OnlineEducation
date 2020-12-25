import React, { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import BigBadge from "../../BigBadge";
import LargeButton from "../../LargeButton";
import MediumButton from "../../MediumButton";
import CustomRatingBar from "../../shared/CustomRatingBar";
import { images } from "../../shared/image";
import styles from "./styles";
import moment from 'moment';
import AuthorRepo from "../../../services/author/repo";

const Header = (props) => {
  const { data } = props;
  const [instructor, setInstructor] = useState();

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
    console.log("add to bookmark " + data.id);
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
          {moment(data.createdAt).format("DD/MM/yyyy")} • {data.totalHours.toFixed(3)}
        </Text>
        <View style={styles.vote}>
          <CustomRatingBar star={data.formalityPoint} />
          <Text style={styles.textNormalColor}>({data.ratedNumber})</Text>
        </View>
      </View>
      <View style={styles.operation}>
        <MediumButton
          text={"Bookmark"}
          uri={images.bookmark.uri}
          action={addToBookmark}
        />
        <MediumButton text={"Add to Channel"} uri={images.addtochannel.uri} />
        <MediumButton text={"Download"} uri={images.download.uri} />
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
        <LargeButton
          uri={images.takealearn.uri}
          text={"Take a learning check"}
        />
        <LargeButton
          uri={images.viewmore.uri}
          text={"View related paths & courses"}
        />
      </View>
    </View>
  );
};

export default Header;
