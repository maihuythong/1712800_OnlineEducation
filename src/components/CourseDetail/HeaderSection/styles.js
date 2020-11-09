import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 15,
  },
  left: {
    flex: 1,
    flexDirection: 'row',
  },
  sectionId: {
    flex: 0.18,
    backgroundColor: '#2d3037',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderBottomColor: '#069959',
    borderBottomWidth: 3,
  },
  sectionName: {
    flex: 0.82,
    marginLeft: 15,
  },
  textId: {
    color: '#fff',
    alignContent: 'center',
  },
  textTitle: {
    color: '#d7d8dc',
    fontSize: 20,
  },
  textDuration: {
    color: '#797b7e',
  },
});
