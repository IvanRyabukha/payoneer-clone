import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetUp from './screens/setup/SetUp';
import FinalRegisterStep from './screens/FinalRegisterStep';
import SignUpForm from './screens/SignUpForm';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import { WebViewScreen } from './screens/WebViewScreen';

export type RegistrationHiddenStackParamList = {
  SetUp: undefined;
  FinalRegisterStep: undefined;
  SignUpForm: undefined;
  ConfirmEmailScreen: undefined;
  WebViewScreen: { url: string };
};

const Stack = createNativeStackNavigator<RegistrationHiddenStackParamList>();

const RegistrationHiddenStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SetUp" component={SetUp} />
      <Stack.Screen name="FinalRegisterStep" component={FinalRegisterStep} />
      <Stack.Screen name="SignUpForm" component={SignUpForm} />
      <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default RegistrationHiddenStack;
