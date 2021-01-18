import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTranslation } from 'react-i18next';

const Section = (props) => {
  const { title, children, hideSeeall, navigation, nav, seeAllScreenName, navChildren } = props;
  const { t } = useTranslation('home');

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {hideSeeall === true ? null : (
          <TouchableOpacity onPress={() => navigation.navigate(nav, { title, seeAllScreenName, navigation, navChildren })}>
            <Text style={styles.seeAll}>{t('show_all')} &gt;</Text>
          </TouchableOpacity>
        )}
      </View>
      <View>{children}</View>
    </View>
  );
};

export default Section;
