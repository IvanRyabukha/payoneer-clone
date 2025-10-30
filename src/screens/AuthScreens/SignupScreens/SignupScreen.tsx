import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BusinessAbout from './screens/BusinessAbout';
import Located from './screens/Located';
import BusinessDescribe from './screens/BusinessDescribe';
import HowToUse from './screens/HowToUse';
import ReceiveMoney from './screens/ReceiveMoney';
import RegistrationLayout from './components/RegistrationLayout';
import SetUp from './screens/SetUp';
import Marketplaces from './screens/marketplaces/Marketplaces';
import FinalRegisterStep from './screens/FinalRegisterStep';

export type SignupStackParamList = {
  BusinessAbout: undefined;
  Located: undefined;
  BusinessDescribe: undefined;
  HowToUse: undefined;
  ReceiveMoney: undefined;
  Marketplaces: undefined;
  SetUp: undefined;

  FinalRegisterStep: undefined;
};

const Stack = createNativeStackNavigator<SignupStackParamList>();

const SignupScreen: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      {/* <Stack.Screen name="BusinessAbout">
        {props => (
          <RegistrationLayout step={1} total={5}>
            <BusinessAbout {...props} />
          </RegistrationLayout>
        )}
      </Stack.Screen>

      <Stack.Screen name="Located">
        {props => (
          <RegistrationLayout step={2} total={5}>
            <Located {...props} />
          </RegistrationLayout>
        )}
      </Stack.Screen>

      <Stack.Screen name="BusinessDescribe">
        {props => (
          <RegistrationLayout step={3} total={5}>
            <BusinessDescribe {...props} />
          </RegistrationLayout>
        )}
      </Stack.Screen>
      <Stack.Screen name="HowToUse">
        {props => (
          <RegistrationLayout step={4} total={5}>
            <HowToUse {...props} />
          </RegistrationLayout>
        )}
      </Stack.Screen>
      <Stack.Screen name="ReceiveMoney">
        {props => (
          <RegistrationLayout step={5} total={5}>
            <ReceiveMoney {...props} />
          </RegistrationLayout>
        )}
      </Stack.Screen> */}

      <Stack.Screen name="Marketplaces">
        {props => (
          <RegistrationLayout step={5} total={5}>
            <Marketplaces {...props} />
          </RegistrationLayout>
        )}
      </Stack.Screen>
      <Stack.Screen name='SetUp' component={SetUp}/>
      <Stack.Screen name='FinalRegisterStep' component={FinalRegisterStep}/>
    </Stack.Navigator>
  );
};

export default SignupScreen;
