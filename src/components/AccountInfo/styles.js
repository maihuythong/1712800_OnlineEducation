import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  name: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    marginLeft: 10,
  },
  username: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  nickname: {
    color: '#80808080',
    fontSize: 14,
  },
});
