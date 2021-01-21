import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 15,
    marginHorizontal: 15
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#eceef0',
  },
  textDuration: {
    color: '#797b7e',
  },
  containerStarRating: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textRatingContainer: {
    justifyContent: 'flex-end',
  },
  textRating: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5
  },
  ratingBar: {
    paddingTop: -30
  },
  sendReview: {
    marginVertical: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, 
  text:{
    color: 'white',
    fontSize: 18,
    maxWidth: '90%',
  }
});
