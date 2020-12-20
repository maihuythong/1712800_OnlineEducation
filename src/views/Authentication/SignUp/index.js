import React, { useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { showFlashMessage } from "../../../services/app/actions";
import MessageType from "../../../services/app/MessageType";
import { SIGNUP } from "../../../services/user/constants";
import styles from "./styles";

const SignUp = (props) => {
  const { navigation } = props;
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const dispatch = useDispatch();

  const onSignUpPress = useCallback(() => {
    // if(password !== confirmPassword){

    // }
    const params = { username, email, phone, password };
    dispatch(
      showFlashMessage({
        type: MessageType.Type.SUCCESS,
        description:
          "Đăng kí thành công! Có mail được gửi vào địa chỉ email của bạn.",
      })
    );
    dispatch({
      type: SIGNUP,
      payload: params,
      meta: {
        callback: () => {
          dispatch(
            showFlashMessage({
              type: MessageType.Type.SUCCESS,
              description:
                "Đăng kí thành công! Có mail được gửi vào địa chỉ email của bạn.",
            })
          );
          navigation.navigate("SignInScreen");
        },
      },
    });
  });

  return (
    <ScrollView style={styles.container}>
      <TextInput
        autoCapitalize={"none"}
        label="Username"
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
        label="Email"
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
        label="Phone number"
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
        label="Password"
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
        label="Confirm password"
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
        <Text style={styles.signin}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
          <Text style={styles.signup}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
