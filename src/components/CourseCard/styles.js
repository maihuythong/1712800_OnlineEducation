import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    aspectRatio: 1,
    marginRight: 15,
    shadowColor: '#000',
    backgroundColor: '#1f242a',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardImage: {
    height: '50%',
    flex: 1,
  },
  cardContent: {
    color: '#FFF',
    height: '50%',
    maxHeight: 150,
    padding: 10,
    overflow: 'hidden',
  },
  title: {
    color: '#cbcfd2',
    fontSize: 20,
  },
  defaultText: {
    color: '#9da0a7',
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
