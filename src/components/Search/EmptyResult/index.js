import React from 'react';
import { View, Text } from 'react-native';
import SvgUri from 'expo-svg-uri';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const EmptySearch = ({ text }) => {
  const { t } = useTranslation('search');

  return (
    <View style={styles.container}>
      <View>
        <SvgUri
          width='100'
          height='100'
          source={require('../../../../assets/search.svg')}
        />
      </View>
      <View>
        <Text style={styles.text}>
          {t('empty_search')}'{text}'
        </Text>
      </View>
    </View>
  );
};

export default EmptySearch;
