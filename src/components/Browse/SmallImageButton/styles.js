import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'column',
    marginTop: 15,
    width: 180,
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
