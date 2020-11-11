import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 0.2,
    flexDirection: 'column',
    marginTop: 5,
    marginLeft: 5,
    width: 180,
    height: 60,
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
