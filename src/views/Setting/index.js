import styles from './styles';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AccountInfo from '../../components/AccountInfo';
import SwitchSetting from '../../components/Setting/SwitchSetting';
import { SignInScreen } from '../../global/constants/screenName';

const Setting = ({ navigation }) => {
  const [lang, setLang] = useState(true);
  const [streaming, setStreaming] = useState(true);
  const [downloading, setDownloading] = useState(true);

  const languageSetting = () => {
    console.log('langue change');
    setLang(!lang);
  };
  const streamingSetting = () => {
    console.log('stream change');
    setStreaming(!streaming);
  };
  const downloadingSetting = () => {
    console.log('downloading change');
    setDownloading(!downloading);
  };

  return (
    <ScrollView style={styles.container}>
      <AccountInfo
        size={56}
        username={'Mai Huy Thong'}
        avatar={
          'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
        }
        nickname={'mai-thong'}
      />
      <View style={styles.section}>
        <Text style={styles.text}>Account</Text>
        <Text style={styles.text}>Subscription</Text>
        <Text style={styles.text}>Communication Preferences</Text>
      </View>
      <View style={styles.section}>
        <SwitchSetting
          content={'Default caption language'}
          note={'English'}
          isEnabled={lang}
          toggleSwitch={languageSetting}
        />
        <SwitchSetting
          content={'Require Wi-Fi for streaming'}
          isEnabled={streaming}
          toggleSwitch={streamingSetting}
        />
        <SwitchSetting
          content={'Require Wi-Fi for downloading'}
          isEnabled={downloading}
          toggleSwitch={downloadingSetting}
        />
      </View>
      <TouchableOpacity
        style={styles.signoutContainer}
        onPress={() => navigation.replace(SignInScreen)}
      >
        <Text style={styles.signoutText}>SIGN OUT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Setting;
