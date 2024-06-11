import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome, MemberSign, MemberResult} from '../screens';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Member" component={MemberSign} />
      <Stack.Screen name="MemberResult" component={MemberResult} />
    </Stack.Navigator>
  );
};

export default Navigation;
