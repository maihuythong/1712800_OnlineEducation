import React from 'react';
import { TextInput, View } from 'react-native';
import styles from './styles';

const SearchHeader = (props) => {
  const { text, onChange } = props;

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize={'none'}
        value={text}
        onChangeText={onChange}
        style={styles.text}
        placeholder='Search...'
        placeholderTextColor='#A9A9A9'
      />
    </View>
  );
};

export default SearchHeader;
