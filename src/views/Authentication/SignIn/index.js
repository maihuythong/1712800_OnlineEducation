import React, { useCallback, useContext, useMemo, useEffect } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import SvgUri from 'expo-svg-uri';
import { useDispatch } from 'react-redux';
import * as ScreenName from '../../../global/constants/screenName';
import { AuthenticationContext } from '../../../provider/authentication-provider';
import { SIGNIN } from '../../../services/user/constants';
import styles from './styles';
import {images} from '../../../components/shared/image';
// import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
// import { GoogleSignIn } from 'react-native-google-signin';

// GoogleSignIn.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '835898859944-im9ire3ppntou4ff18hrtcu49nes158c.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//   forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: '835898859944-24henjntovj7pbo1asbvrq1qha3uua5v.apps.googleusercontent.com', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });
// const configGoogle = {
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'],
//   webClientId:
//     '835898859944-im9ire3ppntou4ff18hrtcu49nes158c.apps.googleusercontent.com',
//   offlineAccess: true,
//   forceCodeForRefreshToken: true,
// };

const SignIn = (props) => {
  const { navigation } = props;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
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

  const onGoogleSign = async () => {
  //   try {
  //     await GoogleSignIn.hasPlayServices();
  //     const userInfo = await GoogleSignIn.signIn();
  //     // this.setState({ userInfo });
  //     console.log(userInfo);
  //   } catch (error) {
  //     // if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //     //   // user cancelled the login flow
  //     // } else if (error.code === statusCodes.IN_PROGRESS) {
  //     //   // operation (f.e. sign in) is in progress already
  //     // } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //     //   // play services not available or outdated
  //     // } else {
  //     //   // some other error happened
  //     // }
  //   }
  }

  useEffect(() => {
    // GoogleSignGoogleSignInn.configure(configGoogle);
  }, [])

  return useMemo(() => {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          autoCapitalize={'none'}
          label='Username'
          value={username}
          onChangeText={(text) => setUsername(text)}
          theme={{
            colors: {
              text: 'white',
              placeholder: 'white',
              background: '#0f1014',
            },
          }}
        />
        <TextInput
          style={{}}
          secureTextEntry={true}
          label='Password'
          value={password}
          onChangeText={(password) => setPassword(password)}
          theme={{
            colors: {
              label: 'white',
              text: 'white',
              placeholder: 'white',
              background: '#0f1014',
              selectionColor: '#fff',
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
          {/* <TouchableOpacity onPress = {() => onGoogleSign()}>
            <Text>Login with google</Text>
            <SvgUri width='18' height='18' source={images.google.uri} />
          </TouchableOpacity> */}
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
