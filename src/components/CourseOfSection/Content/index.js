import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import LargeCardCourse from "../../LargeCardCourse";

const Content = ({ data, navigation, navigationScreen }) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <LargeCardCourse
            key={item.id}
            id={item.id}
            data={item}
            authorName={data["instructor.user.name"]}
            navigation={navigation}
            navigationScreen={navigationScreen}
          />
        )}
      />
    </View>
  );
};

export default Content;
