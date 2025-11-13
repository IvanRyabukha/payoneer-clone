import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';

export type RootStackParamList = {
  Auth: undefined;
  App: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootNavigation = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={AuthNavigation} />
        <Stack.Screen name="App" component={AppNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
