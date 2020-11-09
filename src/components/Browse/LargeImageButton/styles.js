import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: 'column',
    marginTop: 15,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
  },
  text: {
    opacity: 1,
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
