import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  label: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    margin: windowWidth * 0.02,
  },
  message: {
    fontWeight: 'bold',
    fontSize: windowWidth * 0.05,
    textAlign: 'center',
  },
});
