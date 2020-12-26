import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { TextInput, FlatList } from "react-native-gesture-handler";
import SuggestItem from "../../../components/Search/SuggestItem";
import suggestionjson from "../../../json/searchsuggestion.json";
import styles from "./styles";
import EmptySearch from "../../../components/Search/EmptyResult";
import Recent from "../../../components/Search/Recent";
import SearchResult from "../../../components/Search/SearchResult";
import SearchHeader from "../../../components/SearchHeader";
import SearchRepo from "../../../services/search/repo";

const Search = (props) => {
  const { navigation } = props;
  const [text, setText] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [data, setData] = useState();

  const onSubmit = (text) => {
    setText(text);
    search(text);
  }

  const onChange = async (text) => {
    setText(text);
    // search(text);
    if(text ===  ''){
      setData();
      initSearchScreen();
    }
  }

  // const clearText = () => {
  //   setText('');
  //   // if(value.trim()===''){
  //   //   initSearchScreen();
  //   //   console.log('change');
  //   // }
  // };

  // const onSubmit = (value) => {
  //   setText(value);
  //   search(value);
  // }

  const onHistoryClick = (text) => {
    search(text);
    setText(text);
  };

  const search = async (text) => {
    SearchRepo.searchCourse({ keyword: text, limit: 50 })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const initSearchScreen = async () => {
    try {
      const res = await SearchRepo.getSearchHistory();
      if (res) {
        res.reverse();
        setSearchHistory(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const clearAll = async () => {
    const res = await SearchRepo.clearSearchHistory(searchHistory);
    if(res) {
      initSearchScreen();
    }
  }

  useEffect(() => {
    initSearchScreen();
  }, []);

  return (
    <View style={styles.container}>
      <SearchHeader text={text} onChange ={onChange} onSubmit = {onSubmit} />
      {text.trim() === "" && (!data) ? (
        <Recent data={searchHistory} onHistoryClick={onHistoryClick} clearAll ={clearAll}/>
      ) : (
        <SearchResultComp data={data} text={text} navigation = {navigation}/>
      )}
    </View>
  );
};

const SearchResultComp = (props) => {
  const { data, text, navigation } = props;
  return (
    <View style={{ flex: 1 }}>
      {data?.courses?.data.length > 0 || data?.instructors?.data.length > 0 ? (
        <SearchResult data={data} navigation={navigation} />
      ) : (
        <EmptySearch text={text ? text : null} />
      )}
    </View>
  );
};

export default Search;
