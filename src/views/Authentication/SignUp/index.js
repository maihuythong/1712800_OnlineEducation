import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignUp = () => {
  const [text, setText] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

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
        autoCapitalize={'none'}
        label='Email'
        value={email}
        onChangeText={(text) => setEmail(text)}
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
            selectionColor: '#0000',
          },
        }}
      />
      <TextInput
        style={{}}
        secureTextEntry={true}
        label='Confirm password'
        value={confirmPassword}
        onChangeText={(password) => setConfirmPassword(password)}
        theme={{
          colors: {
            label: 'white',
            text: 'white',
            placeholder: 'white',
            background: '#0f1014',
            selectionColor: '#0000',
          },
        }}
      />

      <TouchableOpacity style={styles.foot}>
        <Text style={styles.signin}>SIGN UP</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signup}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUp;
