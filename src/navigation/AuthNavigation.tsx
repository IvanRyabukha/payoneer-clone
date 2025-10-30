import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreens/SignupScreen';
import LanguageScreen from '../screens/LanguageScreen';
import TestScreen from '../screens/TestScreen';
import TestScreen2 from '../screens/TestScreen2';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Language: undefined;
  TestScreens: undefined;
  TestScreens2: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
      <Stack.Screen name="Register" component={SignupScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="TestScreens" component={TestScreen} />
      <Stack.Screen name="TestScreens2" component={TestScreen2} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
