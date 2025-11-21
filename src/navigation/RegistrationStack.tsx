// import React from 'react';
// import {
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';

// import BusinessAbout from '@/screens/RegistrationScreens/screens/BusinessAbout';
// import BusinessDescribe from '@/screens/RegistrationScreens/screens/BusinessDescribe';
// import ConfirmEmailScreen from '@/screens/RegistrationScreens/screens/ConfirmEmailScreen';
// import FinalRegisterStep from '@/screens/RegistrationScreens/screens/FinalRegisterStep';
// import HowToUse from '@/screens/RegistrationScreens/screens/HowToUse';
// import Located from '@/screens/RegistrationScreens/screens/located/Located';
// import Marketplaces from '@/screens/RegistrationScreens/screens/marketplaces/Marketplaces';
// import ReceiveMoney from '@/screens/RegistrationScreens/screens/ReceiveMoney';
// import SetUp from '@/screens/RegistrationScreens/screens/setup/SetUp';
// import SignUpForm from '@/screens/RegistrationScreens/screens/SignUpForm';
// import { WebViewScreen } from '@/screens/RegistrationScreens/screens/WebViewScreen';
// import Header from '@/screens/RegistrationScreens/components/Header';
// import { useNavigationState } from '@react-navigation/native';
// import { useLocation } from '@/screens/shared/hooks/useLocation';
// import { View, Text } from 'react-native';

// export type RegistrationStackParamList = {
//   BusinessAbout: undefined;
//   Located: undefined;
//   BusinessDescribe: undefined;
//   HowToUse: undefined;
//   ReceiveMoney: undefined;
//   Marketplaces: undefined;

//   SetUp: undefined;
//   FinalRegisterStep: undefined;
//   SignUpForm: undefined;
//   ConfirmEmailScreen: undefined;

//   WebViewScreen: { url: string };
// };

// const Stack = createNativeStackNavigator<RegistrationStackParamList>();

// const routeToStep: Record<string, number> = {
//   BusinessAbout: 1,
//   Located: 2,
//   BusinessDescribe: 3,
//   HowToUse: 4,
//   ReceiveMoney: 5,
//   Marketplaces: 6,
// };

// const RegistrationStack = () => {
//   const state = useNavigationState(state => state.routes[state.index].state);
//   const headerScreens = Object.keys(routeToStep);

//   const activeScreen = state?.routes[state?.index ?? 0].name ?? 'BusinessAbout';
//   const step = routeToStep[activeScreen];

//   const { country: userCountry, loading } = useLocation();

//   if (loading) {
//     return (
//       <View>
//         <Text>Skeleton Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <Stack.Navigator
//       screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}
//       layout={({ children, state, navigation }) => {
//         const route = state.routes[state.index];
//         const screenName = route.name;

//         const shouldShowHeader = headerScreens.includes(screenName);

//         return (
//           <>
//             {shouldShowHeader && (
//               <Header nav={navigation} title="Registration" step={step} />
//             )}
//             {children}
//           </>
//         );
//       }}
//     >
//       <Stack.Screen name="BusinessAbout" component={BusinessAbout} />
//       <Stack.Screen name="Located">
//         {props => <Located {...props} suggestedCountry={userCountry} />}
//       </Stack.Screen>
//       <Stack.Screen name="BusinessDescribe" component={BusinessDescribe} />
//       <Stack.Screen name="HowToUse" component={HowToUse} />
//       <Stack.Screen name="ReceiveMoney" component={ReceiveMoney} />
//       <Stack.Screen name="Marketplaces" component={Marketplaces} />

//       {/*TODO: Create another stack, replace sreens without header*/}
//       <Stack.Screen name="SetUp" component={SetUp} />
//       <Stack.Screen name="FinalRegisterStep" component={FinalRegisterStep} />
//       <Stack.Screen name="SignUpForm" component={SignUpForm} />
//       <Stack.Screen name="ConfirmEmailScreen" component={ConfirmEmailScreen} />

//       <Stack.Screen name="WebViewScreen" component={WebViewScreen} />
//     </Stack.Navigator>
//   );
// };

// export default RegistrationStack;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationFlowStack from '@/screens/RegistrationScreens/RegistrationFlowStack';
import RegistrationHiddenStack from '@/screens/RegistrationHiddenScreens/RegistrationHiddenStack';

export type RegistrationStackParamList = {
  RegistrationFlowStack: undefined;
  RegistrationHiddenStack: undefined;
};

const Stack = createNativeStackNavigator<RegistrationStackParamList>();

const RegistrationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='RegistrationFlowStack' component={RegistrationFlowStack} />
      <Stack.Screen name='RegistrationHiddenStack' component={RegistrationHiddenStack} />
    </Stack.Navigator>
  );
};

export default RegistrationStack;
