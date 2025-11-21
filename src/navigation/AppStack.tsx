import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainAppScreen from '@/screens/AppScreens/MainAppScreen';

export type AppStackParamList = {
  MainScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainAppScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;