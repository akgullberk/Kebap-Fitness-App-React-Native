import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import styles from './styles';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button
        text="Üye Kaydı Oluştur"
        onPress={() => navigation.navigate('Member')}
      />
    </View>
  );
};

export default Welcome;
