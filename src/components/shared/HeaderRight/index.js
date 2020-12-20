import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SvgUri from 'expo-svg-uri';
import styles from './styles';
import * as ScreenName from '../../../global/constants/screenName';

const HeaderRight = (props) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push(ScreenName.ProfileScreen)}
      >
        <SvgUri
          width='30'
          height='30'
          source={require('../../../../assets/user.svg')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push(ScreenName.SettingScreen)}
      >
        <SvgUri
          width='30'
          height='30'
          source={require('../../../../assets/settings.svg')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRight;
