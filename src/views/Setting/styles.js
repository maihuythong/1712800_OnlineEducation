import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
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
  section: {
    borderBottomColor: '#80808080',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 10,
  },
  signoutContainer: {
    marginTop: 10,
    borderColor: '#009dc4',
    flex: 1,
    borderWidth: 2,
    borderRadius: 3,
  },
  signoutText: {
    color: '#009dc4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 7,
  },
});
