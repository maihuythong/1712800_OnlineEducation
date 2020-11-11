import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  avatarContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
  },
  avatar: {
    flex: 1,
  },
  authorName: {
    // flex: 1,
    // flexDirection: 'row',
    // flexShrink: 1,
    flexGrow: 1,
    alignItems: 'center',
  },
  name: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
    // flexWrap: 'wrap',
    // alignItems: 'center',
    flexShrink: 1,
    // flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
