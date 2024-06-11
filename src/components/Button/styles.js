import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#1976d2',
    borderRadius: windowWidth * 0.01,
    padding: windowWidth * 0.02,
    margin: windowWidth * 0.02,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
