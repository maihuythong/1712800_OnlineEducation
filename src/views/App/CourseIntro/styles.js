import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  courseDetailContainer: {
    flex: 1,
  },
  video: {
    flex: 0.4,
    width: '100%'
  },
  other: {
    flex: 0.6,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.8,
  },
});
