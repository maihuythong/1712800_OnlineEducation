import React from "react";
import { SectionList, Text, View } from "react-native";
import HeaderSection from "../HeaderSection";
import RowDetail from "../RowDetail";
import styles from "./styles";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Content = (props) => {
  const { DATA } = props;
  return (
    <View style={styles.container}>
      {DATA ? (
        <SectionList
          sections={DATA}
          keyExtractor={(item) => item.id}
          // renderItem={({ item }) => <Item title={item.title} />}
          renderSectionHeader={({ section: { title, index, sumHours } }) => (
            // <Text style={styles.header}>{title}</Text>
            <HeaderSection id={index} title={title} totalDuration={sumHours} />
          )}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <RowDetail
                key={item.id}
                id={item.id}
                title={item.name}
                completed={true}
                duration={item.hours}
              />
            );
          }}
        />
      ) : null}
    </View>
  );
};

export default Content;
