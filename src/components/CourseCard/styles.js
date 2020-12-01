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
    flex: 1,
    height: '50%',
    maxHeight: 150,
    padding: 10,
    overflow: 'hidden',
    width: '100%',
    // maxWidth: '50%',
  },
  title: {
    color: 'white',
    fontSize: 16,
    // overflow: 'hidden',
    flexWrap: 'wrap',
  },
  defaultText: {
    color: '#9da0a7',
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'flex-start',
  },
  voteCount: {
    marginLeft: 5,
    color: '#9da0a7',
  },
});
