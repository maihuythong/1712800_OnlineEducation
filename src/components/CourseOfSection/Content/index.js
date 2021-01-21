import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import LargeCardCourse from "../../LargeCardCourse";
import LargeCardDefault from "../../LargeCardDefault";

const Content = ({ data, navigation, navigationScreen, isAuthor = false }) => {
  const card = (item) => {
    if (isAuthor)
    return (
      <LargeCardDefault
          key={item.id}
          id={item.id}
          image={item["user.avatar"]}
          title={item["user.name"]}
          count={item.numcourses}
          type={2}
          navigation={navigation}
          navigationScreen={navigationScreen}
        />
      );
      else{
        return (
          <LargeCardCourse
            key={item.id}
            id={item.id}
            data={item}
            authorName={item["instructor.user.name"]}
            navigation={navigation}
            navigationScreen={navigationScreen}
          />
        );
      }
  };
  return (
    <View>
      <FlatList data={data} renderItem={({ item }) => card(item)} />
    </View>
  );
};

export default Content;
