import React, { useCallback, useContext, useMemo, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import SvgUri from "expo-svg-uri";
import { useDispatch } from "react-redux";
import * as ScreenName from "../../../global/constants/screenName";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { SIGNIN, AFTER_SIGN_IN_GOOGLE } from "../../../services/user/constants";
import styles from "./styles";
import { images } from "../../../components/shared/image";
import { useTranslation } from "react-i18next";
import UserRepo from "../../../services/user/repo";
import * as Google from "expo-google-app-auth";

const SignIn = (props) => {
  const { navigation } = props;
  const [username, setUsername] = React.useState("maihuythong99@gmail.com");
  const [password, setPassword] = React.useState("123123");
  const { setAuthentication } = useContext(AuthenticationContext);
  const dispatch = useDispatch();
  const { t } = useTranslation("authentication", { useSuspense: false });

  const handleLogin = useCallback(() => {
    const values = { email: username, password };
    dispatch({
      type: SIGNIN,
      payload: values,
      meta: {
        callback: () => {
          navigation.replace(ScreenName.AppNavigatorScreen);
        },
      },
    });
  });

  const onGoogleSign = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId:
          "835898859944-ucab3i7rpci7bmd35mssdl7hk06o9kpl.apps.googleusercontent.com",
        iosClientId:
          "835898859944-24henjntovj7pbo1asbvrq1qha3uua5v.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        const loginRes = await UserRepo.loginGoogle(result.user);
        if (loginRes) {
          dispatch({
            type: AFTER_SIGN_IN_GOOGLE,
            payload: { data: loginRes },
            meta: {
              callback: () => {
                navigation.replace(ScreenName.AppNavigatorScreen);
              },
            },
          });
        }
        // return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  };

  useEffect(() => {
    // GoogleSignGoogleSignInn.configure(configGoogle);
  }, []);

  return useMemo(() => {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          autoCapitalize={"none"}
          label={t("email")}
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
          style={{}}
          secureTextEntry={true}
          label={t("password")}
          value={password}
          onChangeText={(password) => setPassword(password)}
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

        <TouchableOpacity
          style={styles.foot}
          // onPress={() => navigation.replace(ScreenName.AppNavigatorScreen)}
          onPress={() => handleLogin()}
        >
          <Text style={styles.signin}>{t("sign_in")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.foot}
          onPress={() => navigation.navigate(ScreenName.ForgotPasswordScreen)}
        >
          <Text style={styles.signin}>{t("forgot_password")}</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <View style={styles.suggestion}>
            <Text style={styles.text}>{t("dont_have")}</Text>
            <TouchableOpacity
              onPress={() => navigation.push(ScreenName.SignUpScreen)}
            >
              <Text style={styles.signup}>{t("sign_up")}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.suggestion}
            onPress={() => onGoogleSign()}
          >
            <Text style={styles.googleSignIn}>Sign in with </Text>
            <SvgUri width="32" height="32" source={images.google.uri} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }, [username, password, setAuthentication]);

  // return useMemo(() => {
  //   return (
  //     <AuthenticationContext.Consumer>
  //       {({ setAuthentication }) => {
  //         return (
  //           <ScrollView style={styles.container}>
  //             <TextInput
  //               autoCapitalize={'none'}
  //               label='Username'
  //               value={username}
  //               onChangeText={(text) => setUsername(text)}
  //               theme={{
  //                 colors: {
  //                   text: 'white',
  //                   placeholder: 'white',
  //                   background: '#0f1014',
  //                 },
  //               }}
  //             />
  //             <TextInput
  //               style={{}}
  //               secureTextEntry={true}
  //               label='Password'
  //               value={password}
  //               onChangeText={(password) => setPassword(password)}
  //               theme={{
  //                 colors: {
  //                   label: 'white',
  //                   text: 'white',
  //                   placeholder: 'white',
  //                   background: '#0f1014',
  //                   selectionColor: '#fff',
  //                 },
  //               }}
  //             />

  //             <TouchableOpacity
  //               style={styles.foot}
  //               onPress={() =>
  //                 navigation.replace(ScreenName.AppNavigatorScreen)
  //               }
  //             >
  //               <Text style={styles.signin}>SIGN IN</Text>
  //             </TouchableOpacity>
  //             <TouchableOpacity
  //               style={styles.foot}
  //               onPress={() =>
  //                 navigation.navigate(ScreenName.ForgotPasswordScreen)
  //               }
  //             >
  //               <Text style={styles.signin}>FORGOT PASSWORD</Text>
  //             </TouchableOpacity>
  //             <View style={styles.signupContainer}>
  //               <Text style={styles.text}>Don't have account?</Text>
  //               <TouchableOpacity onPress={handleLogin(setAuthentication)}>
  //                 <Text style={styles.signup}> Sign up</Text>
  //               </TouchableOpacity>
  //             </View>
  //           </ScrollView>
  //         );
  //       }}
  //     </AuthenticationContext.Consumer>
  //   );
  // });
};

export default SignIn;
