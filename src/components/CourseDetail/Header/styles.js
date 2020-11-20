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
  descriptionContainer: {
    flex: 0.95,
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleButton: {
    flex: 0.05,
    backgroundColor: '#394249',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 3,
  },
  toggleIcon: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  textDescription: {
    color: 'white',
    fontSize: 12,
    flex: 1,
  },
  description: {
    color: 'gray',
  },
});
