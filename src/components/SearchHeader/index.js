import SvgUri from "expo-svg-uri";
import React from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useTranslation } from 'react-i18next';

const SearchHeader = (props) => {
  const { text, onSubmit, onChange } = props;
  const { t } = useTranslation('search');

  // const [searchText, setSearchText] = useState('');

  // const onChange = (value) => {
  //   setSearchText(value);
  // }

  // if(searchText === ''){
  //   clearText();
  // }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textContainer}
        autoCapitalize={"none"}
        value={text}
        onChangeText={onChange}
        style={styles.text}
        placeholder={t('search_placeholder')}
        placeholderTextColor="#A9A9A9"
      />
      <TouchableOpacity style={styles.icon} onPress={() => onSubmit(text)}>
        <SvgUri
          width="32"
          height="32"
          source={require("../../../assets/magnify.svg")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchHeader;
