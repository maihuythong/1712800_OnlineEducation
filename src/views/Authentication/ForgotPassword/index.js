import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import styles from './styles';
import { TextInput } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ForgotPassword = () => {
  const [email, setEmail] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={{}}
        label='Email or Username'
        value={email}
        onChangeText={(email) => setEmail(email)}
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
        <Text style={styles.signin}>CONFIRM</Text>
      </TouchableOpacity>
      <View style={styles.footContainer}>
        <TouchableOpacity>
          <Text style={styles.directText}>Go to Sign in?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;
