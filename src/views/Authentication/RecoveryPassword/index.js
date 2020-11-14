import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecoveryPassword = (props) => {
  const { navigation } = props;
  const [text, setText] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <TextInput
        autoCapitalize={'none'}
        label='OTP'
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
        label='New Password'
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

      <TouchableOpacity
        style={styles.foot}
        onPress={() => navigation.navigate('SignInScreen')}
      >
        <Text style={styles.signin}>CONFIRM</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.signup}>Go to Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RecoveryPassword;
