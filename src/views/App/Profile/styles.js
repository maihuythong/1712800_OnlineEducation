import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollViewContainer: {
    paddingHorizontal: 10,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  interest: {
    marginTop: 15,
  },
  textInfo: {
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 10,
    borderColor: '#009dc4',
    flex: 1,
    borderWidth: 2,
    borderRadius: 3,
  },
  buttonText: {
    color: '#009dc4',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 7,
  },
});
