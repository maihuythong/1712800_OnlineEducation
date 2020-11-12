import React from 'react';
import { View, Switch, Text } from 'react-native';
import styles from './styles';

const SwitchSetting = ({ content, note, isEnabled, toggleSwitch }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.content}>{content}</Text>
        {note ? <Text style={styles.note}>{note}</Text> : null}
      </View>
      <Switch
        // style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }] }}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#009dc4' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchSetting;
