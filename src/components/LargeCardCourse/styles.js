import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#BEBEBEBE',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  left: {
    flex: 0.3,
    alignSelf: 'center',
    // aspectRatio: 1,
  },
  image: {
    height: '80%',
  },
  right: {
    marginLeft: 10,
    flex: 0.8,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  text: {
    color: '#BEBEBEBE',
    fontSize: 12,
  },
});
