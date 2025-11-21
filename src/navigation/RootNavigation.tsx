import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import RegistrationStack from './RegistrationStack';
import AppStack from './AppStack';

export type RootStackParamList = {
  Auth: undefined;
  Registration: undefined;
  App: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootNavigation = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name='Registration' component={RegistrationStack} /> */}
        <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
