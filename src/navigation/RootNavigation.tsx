import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import AuthNavigation from './AuthNavigation';

export type RootStackParamList = {
  Auth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const RootNavigation = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Auth"
        component={AuthNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
