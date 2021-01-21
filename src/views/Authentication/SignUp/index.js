import React, { useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { showFlashMessage } from "../../../services/app/actions";
import MessageType from "../../../services/app/MessageType";
import { SIGNUP } from "../../../services/user/constants";
import * as ScreenName from '../../../global/constants/screenName';
import { useTranslation } from 'react-i18next';
import styles from "./styles";

const SignUp = (props) => {
  const { navigation } = props;
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const dispatch = useDispatch();
  const { t } = useTranslation(['authentication', 'notification']);

  const onSignUpPress = useCallback(() => {
    if(password !== confirmPassword){
      dispatch(
        showFlashMessage({
          type: MessageType.Type.DANGER,
          description: t("notification:password_not_match"),
        })
      );
      return;
    }
    const params = { username, email, phone, password };
    dispatch({
      type: SIGNUP,
      payload: params,
      meta: {
        callback: () => {
          dispatch(
            showFlashMessage({
              type: MessageType.Type.SUCCESS,
              description: t("notification:check_email"),
            })
          );
          navigation.navigate(ScreenName.SignInScreen);
        },
      },
    });
  });

  return (
    <ScrollView style={styles.container}>
      <TextInput
        autoCapitalize={"none"}
        label= {t("authentication:username")}
        value={username}
        onChangeText={(text) => setUsername(text)}
        theme={{
          colors: {
            text: "white",
            placeholder: "white",
            background: "#0f1014",
          },
        }}
      />
      <TextInput
        autoCapitalize={"none"}
        label={t("authentication:email")}
        value={email}
        onChangeText={(text) => setEmail(text)}
        theme={{
          colors: {
            text: "white",
            placeholder: "white",
            background: "#0f1014",
          },
        }}
      />
      <TextInput
        autoCapitalize={"none"}
        label={t("authentication:phone")}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        theme={{
          colors: {
            text: "white",
            placeholder: "white",
            background: "#0f1014",
          },
        }}
      />
      <TextInput
        style={{}}
        secureTextEntry={true}
        label={t("authentication:password")}
        value={password}
        onChangeText={(password) => setPassword(password)}
        theme={{
          colors: {
            label: "white",
            text: "white",
            placeholder: "white",
            background: "#0f1014",
            selectionColor: "#0000",
          },
        }}
      />
      <TextInput
        style={{}}
        secureTextEntry={true}
        label={t("authentication:confirm_password")}
        value={confirmPassword}
        onChangeText={(password) => setConfirmPassword(password)}
        theme={{
          colors: {
            label: "white",
            text: "white",
            placeholder: "white",
            background: "#0f1014",
            selectionColor: "#0000",
          },
        }}
      />

      <TouchableOpacity style={styles.foot} onPress={() => onSignUpPress()}>
        <Text style={styles.signin}>{t("authentication:sign_up")}</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.text}>{t("authentication:already_have")}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={styles.signup}>{t("authentication:sign_in")}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
