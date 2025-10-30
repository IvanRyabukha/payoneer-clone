import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export type SignupStackParamList = {

};

const Stack = createNativeStackNavigator<SignupStackParamList>();

const SignupScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen />
      <Stack.Screen />
      <Stack.Screen />
      <Stack.Screen />
    </Stack.Navigator>
  )
}

export default SignupScreen;