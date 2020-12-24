import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import {
  FlatList, ScrollView, TouchableOpacity
} from "react-native-gesture-handler";
import LargeCardCourse from "../../../components/LargeCardCourse";
import AuthorRepo from "../../../services/author/repo";
import styles from "./styles";

const AuthorDetail = (props) => {
  const { id, navigation } = props.route.params;
  const [isFull, setIsFull] = useState(true);
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadAuthorDetail = async () => {
    try {
      setLoading(true);
      console.log(id);
      const authorData = await AuthorRepo.getAuthorDetail(id);
      if (authorData) {
        if (authorData.major) {
          if (authorData.intro != null) {
            authorData.intro +=
              authorData.intro + "\nMajor: " + authorData.major;
          } else {
            authorData.intro = "Major: " + authorData.major;
          }
        }
        setAuthor(authorData);
        console.log(authorData);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAuthorDetail();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.info}>
            <Avatar size={60} source={{ uri: author.avatar }} rounded />
            <Text style={styles.name}>{author.name}</Text>
          </View>
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.follow}>FOLLOW</Text>
          </TouchableOpacity>
          <View style={styles.descriptionContainer}>
            <View style={styles.textDescription}>
              {isFull && author.major ? (
                <Text numberOfLines={5} style={styles.description}>
                  {author.intro}
                </Text>
              ) : (
                <Text style={styles.description}>{author.intro}</Text>
              )}
            </View>
            <TouchableOpacity
              style={styles.toggleButton}
              onPress={() => setIsFull(!isFull)}
            >
              {isFull ? (
                author.intro ? (
                  <Text style={styles.toggleIcon}>&#8897;</Text>
                ) : null
              ) : author.intro ? (
                <Text style={styles.toggleIcon}>&#8896;</Text>
              ) : null}
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.course}>Courses</Text>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={author.courses}
              renderItem={({ item }) => (
                <LargeCardCourse
                  key={item.id}
                  id={item.id}
                  authorName={author.name}
                  data={item}
                  // image={item.image}
                  // coursename={item.title}
                  // author={item.author}
                  // level={item.level}
                  // publishDate={item.publishDate}
                  // duration={item.duration}
                  // vote={item.vote}
                  // voteCount={item.voteCount}
                  navigation={navigation}
                />
              )}
            />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default AuthorDetail;
