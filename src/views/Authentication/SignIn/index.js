import React, { useMemo, useContext } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ScreenName from '../../../global/constants/screenName';
import { AuthenticationContext } from '../../../provider/authentication-provider';

const SignIn = (props) => {
  const { navigation } = props;
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { setAuthentication } = useContext(AuthenticationContext);

  const handleLogin = (setAuthentication) => {
    if (username === 'admin' && password === '123123') {
      setAuthentication({ username: username });
      navigation.replace(ScreenName.AppNavigatorScreen);
    } else {
      console.log('wrong');
    }
  };

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
          onPress={() => handleLogin(setAuthentication)}
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
