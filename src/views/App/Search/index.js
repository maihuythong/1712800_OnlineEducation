import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import SuggestItem from '../../../components/Search/SuggestItem';
import suggestionjson from '../../../json/searchsuggestion.json';
import styles from './styles';
import EmptySearch from '../../../components/Search/EmptyResult';
import Recent from '../../../components/Search/Recent';
import SearchResult from '../../../components/Search/SearchResult';
import SearchHeader from '../../../components/SearchHeader';
const Search = (props) => {
  const { navigation } = props;
  const [text, setText] = useState('');

  const onChange = (value) => {
    setText(value.trim());
  };

  return (
    <View style={styles.container}>
      <SearchHeader text={text} onChange={onChange} />
      {text === '' ? (
        <Recent />
      ) : (
        <FlatList
          data={suggestionjson}
          renderItem={({ item }) => (
            <SuggestItem
              key={item.id}
              id={item.id}
              text={item.text}
              navigation={navigation}
            />
          )}
        />
      )}
      {/* <EmptySearch text={'jh'} /> */}
      {/* <SearchResult /> */}
    </View>
  );
};

export default Search;
