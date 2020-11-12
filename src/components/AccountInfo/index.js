import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Avatar } from 'react-native-elements';

const AccountInfo = ({ avatar, size, username, nickname }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Avatar
        size={size}
        rounded
        source={{
          uri: avatar,
        }}
      />
      <View style={styles.name}>
        <Text style={styles.username}>{username}</Text>
        {nickname ? <Text style={styles.nickname}>{nickname}</Text> : null}
      </View>
    </TouchableOpacity>
  );
};

export default AccountInfo;
