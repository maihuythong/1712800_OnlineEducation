import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import recentjson from '../../../json/recent.json';
import SuggestItem from '../SuggestItem';
import styles from './styles';

const Recent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Recent searches</Text>
        <TouchableOpacity>
          <Text style={styles.clear}>CLEAR ALL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.list}>
        <FlatList
          data={recentjson}
          renderItem={({ item }) => (
            <SuggestItem text={item.text} isRecent={true} />
          )}
        />
      </View>
    </View>
  );
};

export default Recent;
