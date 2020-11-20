import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#0f1014',
    marginLeft: 10,
    marginRight: 10,
  },
  info: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'white',
    fontSize: 16,
  },
  followButton: {
    width: '100%',
    flex: 1,
    height: 30,
    borderRadius: 3,
    marginTop: 5,
    backgroundColor: '#34cceb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  follow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  course: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  toggleButton: {
    flex: 1,
    backgroundColor: '#394249',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 3,
  },
  toggleIcon: {
    fontSize: 28,
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
