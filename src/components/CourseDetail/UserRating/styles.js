import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: '20%',
    marginVertical: 15
  },
  containerAvatar: {
    flex: 2
  },
  userReviews: {
    flex: 8,
    flexDirection: 'column'
  },
  avatar: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  reviewText:{
    color: 'white',
  }
});
