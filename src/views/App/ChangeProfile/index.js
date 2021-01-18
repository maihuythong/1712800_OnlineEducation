import React, { useState, useEffect, useMemo } from "react";
import { ScrollView, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { showFlashMessage } from "../../../services/app/actions";
import { getLoggedAccount } from "../../../services/app/getHelper";
import MessageType from "../../../services/app/MessageType";
import { UPDATE_PROFILE } from "../../../services/user/constants";
import UserRepo from "../../../services/user/repo";
import styles from "./styles";
import { useTranslation } from 'react-i18next';


const ChangeProfile = (props) => {
  const { navigation } = props;
  const loggedAccount = useSelector(getLoggedAccount);
  const [name, setName] = React.useState(loggedAccount.name);
  const [phone, setPhone] = React.useState(loggedAccount.phone);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { t } = useTranslation(['authentication', 'notification']);

  const handleSubmit = async () => {
    if(!loading) {
      setLoading(true);
      const values = { id: loggedAccount.id, name, phone };
      try {
        const res = await UserRepo.changeProfile(values);
        if (res) {
          dispatch(
            showFlashMessage({
              type: MessageType.Type.INFO,
              description: t('notification:update_profile_success'),
            })
          );
          dispatch({
            type: UPDATE_PROFILE,
            payload: res,
          });
        }
      } catch (e) {
        dispatch(
          showFlashMessage({
            type: MessageType.Type.DANGER,
            description: t('authentication:update_profile_fail'),
          })
        );
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {}, []);

  return useMemo(() => {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          style={{}}
          label={t('authentication:full_name')}
          value={name}
          onChangeText={(name) => setName(name)}
          theme={{
            colors: {
              label: "white",
              text: "white",
              placeholder: "white",
              background: "#0f1014",
              selectionColor: "#fff",
            },
          }}
        />
        <TextInput
          style={{}}
          label={t('authentication:phone')}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          theme={{
            colors: {
              label: "white",
              text: "white",
              placeholder: "white",
              background: "#0f1014",
              selectionColor: "#fff",
            },
          }}
        />
        <TouchableOpacity style={styles.foot} onPress={() => handleSubmit()}>
          <Text style={styles.submit}>{t('authentication:submit')}</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }, [name, phone]);
};

export default ChangeProfile;
