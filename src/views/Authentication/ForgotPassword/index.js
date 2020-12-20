import React, { useCallback, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { SignInScreen } from "../../../global/constants/screenName";
import { showFlashMessage } from "../../../services/app/actions";
import MessageType from "../../../services/app/MessageType";
import { RESET_PASSWORD } from "../../../services/user/constants";
import styles from "./styles";

const ForgotPassword = (props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const onConfirmPress = useCallback(async () => {
    const params = { email };
    dispatch({
      type: RESET_PASSWORD,
      payload: params,
      meta: {
        callback: () => {
          dispatch(
            showFlashMessage({
              type: MessageType.Type.SUCCESS,
              description: "Please check your email to reset your password",
            })
          );
          navigation.navigate(SignInScreen);
        },
      },
    });
  });

  return (
    <ScrollView style={styles.container}>
      <TextInput
        autoCapitalize={"none"}
        style={{}}
        label="Enter your email"
        value={email}
        onChangeText={(email) => setEmail(email)}
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
      <TouchableOpacity style={styles.foot} onPress={() => onConfirmPress()}>
        <Text style={styles.signin}>CONFIRM</Text>
      </TouchableOpacity>
      <View style={styles.footContainer}>
        <TouchableOpacity onPress={() => navigation.navigate(SignInScreen)}>
          <Text style={styles.directText}>Go to Sign in?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
