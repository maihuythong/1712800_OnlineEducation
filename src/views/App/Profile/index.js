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

const Profile = ({ navigation }) => {
  const loggedAccount = useSelector(getLoggedAccount);

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
            <Section title="Interests" hideSeeall={true}>
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
            <TextInformation content={"Activity insights (last 30 days)"} />
            <TextInformation
              title={"TOTAL ACTIVE DAYS)"}
              content={"1"}
              note={"1 day streak"}
            />
            <TextInformation
              title={"MOST ACTIVE TIME OF DAY"}
              content={"10:00 PM"}
            />
            <TextInformation title={"MOST VIEWED SUBJECT"} content={"N/A"} />
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => changePassword()}
          >
            <Text style={styles.buttonText}>CHANGE PASSWORD</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => changeProfile()}
          >
            <Text style={styles.buttonText}>EDIT PROFILE</Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
  );
};

export default Profile;
