import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Header';
import BusinessAbout from './screens/BusinessAbout';
import Located from './screens/located/Located';
import BusinessDescribe from './screens/BusinessDescribe';
import HowToUse from './screens/HowToUse';
import ReceiveMoney from './screens/ReceiveMoney';
import Marketplaces from './screens/marketplaces/Marketplaces';

import RegistrationLayout from './components/RegistrationLayout';
import SetUp from './screens/setup/SetUp';
import FinalRegisterStep from './screens/FinalRegisterStep';
import SignUpForm from './screens/SignUpForm';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import { WebViewScreen } from './screens/WebViewScreen';

export type SignupStackParamList = {
  BusinessAbout: undefined;
  Located: undefined;
  BusinessDescribe: undefined;
  HowToUse: undefined;
  ReceiveMoney: undefined;
  Marketplaces: undefined;

  SetUp: undefined;
  FinalRegisterStep: undefined;
  SignUpForm: undefined;
  ConfirmEmailScreen: undefined;

  LoginScreen: undefined;
  WebViewScreen: { url: string };
};

const Stack = createNativeStackNavigator<SignupStackParamList>();

const SignupScreen: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // header: () => (<Header title={'Registration'} />),
        animation: 'fade_from_bottom',
      }}
    >
      {/* <Stack.Screen name="BusinessAbout" component={BusinessAbout} /> */}
      <Stack.Screen name="Located" component={Located} />
      {/* <Stack.Screen name="BusinessDescribe" component={BusinessDescribe} /> */}
      {/* <Stack.Screen name="HowToUse" component={HowToUse} /> */}
      {/* <Stack.Screen name="ReceiveMoney" component={ReceiveMoney} /> */}
      {/* <Stack.Screen name="Marketplaces" component={Marketplaces} /> */}

      {/* <Stack.Screen name="SetUp" component={SetUp} />
      <Stack.Screen name="FinalRegisterStep" component={FinalRegisterStep} /> */}
      {/* <Stack.Screen name="SignUpForm" component={SignUpForm} /> */}
      {/* <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} /> */}

      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
    </Stack.Navigator>
  );
};

export default SignupScreen;

// <Stack.Screen name="BusinessAbout">
//   {props => (
//     <RegistrationLayout step={1} total={5}>
//       <BusinessAbout {...props} />
//     </RegistrationLayout>
//   )}
// </Stack.Screen>
// <Stack.Screen name="Located">
//   {props => (
//     <RegistrationLayout step={2} total={5}>
//       <Located {...props} />
//     </RegistrationLayout>
//   )}
// </Stack.Screen>
// <Stack.Screen name="BusinessDescribe">
//   {props => (
//     <RegistrationLayout step={3} total={5}>
//       <BusinessDescribe {...props} />
//     </RegistrationLayout>
//   )}
// </Stack.Screen>
// <Stack.Screen name="HowToUse">
//   {props => (
//     <RegistrationLayout step={4} total={5}>
//       <HowToUse {...props} />
//     </RegistrationLayout>
//   )}
// </Stack.Screen>
// <Stack.Screen name="ReceiveMoney">
//   {props => (
//     <RegistrationLayout step={5} total={5}>
//       <ReceiveMoney {...props} />
//     </RegistrationLayout>
//   )}
// </Stack.Screen>
// <Stack.Screen name="Marketplaces">
//   {props => (
//     <RegistrationLayout step={5} total={5}>
//       <Marketplaces {...props} />
//     </RegistrationLayout>
//   )}
// </Stack.Screen>
