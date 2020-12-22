import React, { useCallback, useContext, useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import * as ScreenName from "../../../global/constants/screenName";
import { AuthenticationContext } from "../../../provider/authentication-provider";
import { SIGNIN } from "../../../services/user/constants";
import styles from "./styles";

const SignIn = (props) => {
  const { navigation } = props;
  const [username, setUsername] = React.useState("maihuythong99@gmail.com");
  const [password, setPassword] = React.useState("huythong");
  const { setAuthentication } = useContext(AuthenticationContext);
  const dispatch = useDispatch();

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

  return useMemo(() => {
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
              selectionColor: "#fff",
            },
          }}
        />

        <TouchableOpacity
          style={styles.foot}
          // onPress={() => navigation.replace(ScreenName.AppNavigatorScreen)}
          onPress={() => handleLogin()}
        >
          <Text style={styles.signin}>SIGN IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.foot}
          onPress={() => navigation.navigate(ScreenName.ForgotPasswordScreen)}
        >
          <Text style={styles.signin}>FORGOT PASSWORD</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={styles.text}>Don't have account?</Text>
          <TouchableOpacity
            onPress={() => navigation.push(ScreenName.SignUpScreen)}
          >
            <Text style={styles.signup}> Sign up</Text>
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
