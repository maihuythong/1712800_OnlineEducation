import React from "react";
import { ScrollView, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import SuggestItem from "../SuggestItem";
import styles from "./styles";

const Recent = (props) => {
  const { data, onHistoryClick, clearAll } = props;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Recent searches</Text>
        <TouchableOpacity onPress={() => clearAll()}>
          <Text style={styles.clear}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onHistoryClick(item.content)}>
              <SuggestItem id={item.id} text={item.content} isRecent={true} />
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Recent;
