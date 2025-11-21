import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from '@/screens/RegistrationScreens/components/Header';
import BusinessAbout from '@/screens/RegistrationScreens/screens/BusinessAbout';
import Located from '@/screens/RegistrationScreens/screens/located/Located';
import BusinessDescribe from '@/screens/RegistrationScreens/screens/BusinessDescribe';
import HowToUse from '@/screens/RegistrationScreens/screens/HowToUse';
import ReceiveMoney from '@/screens/RegistrationScreens/screens/ReceiveMoney';
import Marketplaces from '@/screens/RegistrationScreens/screens/marketplaces/Marketplaces';
import { routeToStep } from '@/screens/RegistrationScreens/data/steps';

import { useNavigationState } from '@react-navigation/native';
import { useLocation } from '@/screens/shared/hooks/useLocation';


export type RegistrationFlowStackParamList = {
  BusinessAbout: undefined;
  Located: undefined;
  BusinessDescribe: undefined;
  HowToUse: undefined;
  ReceiveMoney: undefined;
  Marketplaces: undefined;
};

const Stack = createNativeStackNavigator<RegistrationFlowStackParamList>();

const RegistrationFlowStack = () => {
  const state = useNavigationState(state => state.routes[state.index].state);

  const activeScreen = state?.routes[state?.index ?? 0].name ?? 'BusinessAbout';
  const step = routeToStep[activeScreen];

  const { country: userCountry, loading } = useLocation();

  if (loading) {
    return (
      <View>
        <Text>Skeleton Loading...</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
      layout={({ children, navigation }) => {
        return (
          <>
            <Header nav={navigation} title="Registration" step={step} />
            {children}
          </>
        );
      }}
    >
      <Stack.Screen name="BusinessAbout" component={BusinessAbout} />
      <Stack.Screen name="Located">
        {props => <Located {...props} suggestedCountry={userCountry} />}
      </Stack.Screen>
      <Stack.Screen name="BusinessDescribe" component={BusinessDescribe} />
      <Stack.Screen name="HowToUse" component={HowToUse} />
      <Stack.Screen name="ReceiveMoney" component={ReceiveMoney} />
      <Stack.Screen name="Marketplaces" component={Marketplaces} />
    </Stack.Navigator>
  );
};

export default RegistrationFlowStack;
