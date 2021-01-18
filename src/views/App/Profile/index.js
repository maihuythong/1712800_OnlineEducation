import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { FlatList, ScrollView, View, Text, TouchableOpacity } from "react-native";
import AccountInfo from "../../../components/AccountInfo";
import SkillBadge from "../../../components/Browse/SkillBadge";
import TextInformation from "../../../components/Profile/TextInfomation";
import Section from "../../../components/Section";
import interestsjson from "../../../json/interests.json";
import styles from "./styles";
import { getLoggedAccount } from "../../../services/app/getHelper";
import {ChangePasswordScreen, ChangeProfileScreen} from '../../../global/constants/screenName';
import { useTranslation } from 'react-i18next';

const Profile = ({ navigation }) => {
  const loggedAccount = useSelector(getLoggedAccount);
  const { t } = useTranslation('profile');

  const changePassword = () => {
    navigation.navigate(ChangePasswordScreen);
  }

  const changeProfile = () => {
    navigation.navigate(ChangeProfileScreen);
  }

  return (
    <ScrollView style={styles.scrollViewContainer}>
      {loggedAccount && (
        <>
          <View style={styles.info}>
            <AccountInfo
              size={64}
              username={loggedAccount.name}
              avatar={
                loggedAccount?.avatar ??
                "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
              }
            />
          </View>
          <View style={styles.interest}>
            <Section title={t('interest')} hideSeeall={true}>
              <FlatList
                horizontal
                data={interestsjson}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <SkillBadge
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    content={item.title}
                  />
                )}
              />
            </Section>
          </View>
          <View style={styles.textInfo}>
            <TextInformation content={t('activity_insight')} />
            <TextInformation
              title={t('total_active')}
              content={"1"}
              note={""}
            />
            <TextInformation
              title={t('most_active')}
              content={"10:00"}
            />
            {/* <TextInformation title={"MOST VIEWED SUBJECT"} content={"N/A"} /> */}
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => changePassword()}
          >
            <Text style={styles.buttonText}>{t('change_password')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => changeProfile()}
          >
            <Text style={styles.buttonText}>{t('edit_profile')}</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

export default Profile;
