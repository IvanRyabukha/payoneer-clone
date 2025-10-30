import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import SignupScreen from '../screens/AuthScreens/SignupScreen';
import LanguageScreen from '../screens/LanguageScreen';
import TestScreen from '../screens/TestScreen';

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  Language: undefined;
  TestScreens: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Register" component={SignupScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="TestScreens" component={TestScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
