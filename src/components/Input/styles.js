import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {margin: windowWidth * 0.02},
  input_container: {
    borderWidth: 1,
    margin: windowWidth * 0.02,
    paddingLeft: windowWidth * 0.02,
    borderRadius: windowWidth * 0.01,
    borderColor: 'bdbdbd',
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
  },
  label: {
    fontSize: windowWidth * 0.04,
    fontWeight: 'bold',
    marginLeft: windowWidth * 0.02,
  },
});
