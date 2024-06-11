import {Text, TextInput, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Input = ({label, onChangeText, placeholder}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </View>
  );
};

export default Input;
