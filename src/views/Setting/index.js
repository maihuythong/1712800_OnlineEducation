import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import AccountInfo from "../../components/AccountInfo";
import SwitchSetting from "../../components/Setting/SwitchSetting";
import { LANGUAGE } from '../../constants';
import { SignInScreen } from "../../global/constants/screenName";
import { getLoggedAccount } from "../../services/app/getHelper";
import { SIGNOUT, UPDATE_LANGUAGE } from "../../services/user/constants";
import styles from "./styles";
import AsyncStorage from '../../utils/storage/asyncStorage';


const Setting = ({ navigation }) => {
  const [lang, setLang] = useState(true);
  // const [streaming, setStreaming] = useState(true);
  // const [downloading, setDownloading] = useState(true);
  const dispatch = useDispatch();
  const loggedAccount = useSelector(getLoggedAccount);
  const { t } = useTranslation('settings');

  useEffect(() => {
    const setLangInit = async () => {
      const language = (await AsyncStorage.getLanguage()) || LANGUAGE.EN;
      if(language === 'en'){
        setLang(true)
      }else{
        setLang(false)
      }
    }
    setLangInit();
  },[])

  const languageSetting = () => {
    setLang(!lang);
    dispatch({
      type: UPDATE_LANGUAGE,
      payload: {
        language: lang ? LANGUAGE.VI : LANGUAGE.EN
      },
    });
  };
  // const streamingSetting = () => {
  //   console.log("stream change");
  //   setStreaming(!streaming);
  // };
  // const downloadingSetting = () => {
  //   console.log("downloading change");
  //   setDownloading(!downloading);
  // };

  const onSignOutPress = () => {
    dispatch({
      type: SIGNOUT,
    });
    navigation.reset({
      routes: [{ name: SignInScreen }]
    });
    // navigation.replace();
  };

  return (
    <ScrollView style={styles.container}>
      {loggedAccount && (
        <>
          <AccountInfo
            size={56}
            username={loggedAccount.name}
            avatar={
              loggedAccount?.avatar ??
              "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            }
            nickname={loggedAccount.email}
          />
          <View style={styles.section}>
            <Text style={styles.text}>{t('setting')}</Text>
            {/* <Text style={styles.text}>Subscription</Text> */}
            {/* <Text style={styles.text}>Communication Preferences</Text> */}
          </View>
          <View style={styles.section}>
            <SwitchSetting
              content={t('change_language')}
              note={lang ? "English": "Tiếng Việt"}
              isEnabled={lang}
              toggleSwitch={languageSetting}
            />
            {/* <SwitchSetting
              content={"Require Wi-Fi for streaming"}
              isEnabled={streaming}
              toggleSwitch={streamingSetting}
            />
            <SwitchSetting
              content={"Require Wi-Fi for downloading"}
              isEnabled={downloading}
              toggleSwitch={downloadingSetting} */}
            {/* /> */}
          </View>
          <View style={styles.section}>
            <Text style={styles.text}>App version: 1.0.0</Text>
          </View>
          <TouchableOpacity
            style={styles.signoutContainer}
            onPress={() => onSignOutPress()}
          >
            <Text style={styles.signoutText}>{t('logout')}</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

export default Setting;
