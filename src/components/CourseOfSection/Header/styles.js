import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
