import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignIn = (props) => {
  const { navigation } = props;
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <TextInput
        autoCapitalize={'none'}
        label='Username'
        value={text}
        onChangeText={(text) => setText(text)}
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
        onPress={() => navigation.navigate('AppNavigatorScreen')}
      >
        <Text style={styles.signin}>SIGN IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.foot}
        onPress={() => navigation.navigate('ForgotPasswordScreen')}
      >
        <Text style={styles.signin}>FORGOT PASSWORD</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.text}>Don't have account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.signup}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignIn;
