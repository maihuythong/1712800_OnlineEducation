import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: '#BEBEBEBE',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  left: {
    flex: 0.3,
    alignSelf: 'center',
    // backgroundColor: '#505050',
    aspectRatio: 1,
  },
  image: {
    height: '90%',
    width: '60%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  right: {
    marginLeft: 10,
    flex: 0.8,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  text: {
    color: '#BEBEBEBE',
    fontSize: 12,
  },
  avatar: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
