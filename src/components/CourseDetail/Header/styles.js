import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#1f242a',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
  },
  title: {
    color: '#cbcfd2',
    fontSize: 28,
  },
  defaultText: {
    color: '#9da0a7',
  },
  author: {
    margin: 10,
  },
  courseInfo: {
    flex: 1,
    flexDirection: 'row',
  },
  vote: {
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
  },
  operation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  description: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
  },
  textDescription: {
    flex: 0.85,
  },
  showMoreDescription: {
    flex: 0.15,
    alignSelf: 'center',
    alignItems: 'center',
    transform: [{ rotate: '90deg' }],
    backgroundColor: '#394249',
    width: '100%',
    // height: '100%',
    // width: '100%',
  },
  showMoreText: {
    color: '#bcc0c7',
    fontSize: 20,
    width: '100%',
    // height: '100%',
  },
  textNormalColor: {
    color: '#d5d7d9',
  },
  bottom: {
    flex: 1,
    marginTop: 15,
  },
});
