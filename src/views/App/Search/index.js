import React from 'react';
import { View } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import SuggestItem from '../../../components/Search/SuggestItem';
import suggestionjson from '../../../json/searchsuggestion.json';
import styles from './styles';
import EmptySearch from '../../../components/Search/EmptyResult';
import Recent from '../../../components/Search/Recent';

const Search = () => {
  return (
    <View style={styles.container}>
      {/* <TextInput /> */}
      <Recent />
      {/* <FlatList
        data={suggestionjson}
        renderItem={({ item }) => (
          <SuggestItem key={id} id={id} text={item.text} />
        )}
      /> */}
      {/* <EmptySearch text={'jh'} /> */}
    </View>
  );
};

export default Search;
