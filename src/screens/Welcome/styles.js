import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: windowWidth * 0.05,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: windowWidth * 0.02,
  },
});
