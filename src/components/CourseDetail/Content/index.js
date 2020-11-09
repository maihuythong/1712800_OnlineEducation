import React from 'react';
import { View, Text, ScrollView, SectionList } from 'react-native';
import styles from './styles';
import RowDetail from '../RowDetail';
import HeaderSection from '../HeaderSection';

const Content = (props) => {
  const { DATA } = props;
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        // key={item.id}
        // renderItem={({ item }) => <Item title={item.title} />}
        renderSectionHeader={({ section: { title, id, totalDuration } }) => (
          // <Text style={styles.header}>{title}</Text>
          <HeaderSection id={id} title={title} totalDuration={totalDuration} />
        )}
        renderItem={({ item }) => {
          return (
            <RowDetail
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.complete}
              duration={item.duration}
            />
          );
        }}
      />
    </View>
  );
};

export default Content;
