import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const MemberResult = ({route}) => {
  const {user} = route.params;
  return (
    <View>
      <Text style={styles.message}>Kayıt Tamamlandı!</Text>
      <Text style={styles.label}>Üye Adı:{user.userName}</Text>
      <Text style={styles.label}>Üye Soyadı:{user.userUsername}</Text>
      <Text style={styles.label}>Üye Yaşı:{user.userAge}</Text>
      <Text style={styles.label}>Üye E-posta:{user.userMail}</Text>
      <Text style={styles.label}>Üye Memleketi:{user.userHometown}</Text>
    </View>
  );
};

export default MemberResult;
