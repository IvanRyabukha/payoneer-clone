import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/AppScreens/tabs/home/HomeScreen';
import CardsScreen from '@/screens/AppScreens/tabs/cards/CardsScreen';
import ActivityScreen from '@/screens/AppScreens/tabs/activity/ActivityScreen';
import ActionsScreen from '@/screens/AppScreens/tabs/actions/ActionsScreen';
import { useTheme } from '@/api/store/theme/ThemeContext';
import {
  House,
  ArrowLeftRight,
  Banknote,
  CreditCard,
} from 'lucide-react-native';
import { Text } from 'react-native';
import AnimatedGradientIcon from '@/screens/RegistrationScreens/components/AnimatedGradientIcon';
import CustomTabBar from '@/screens/AppScreens/components/CustomTabBar';

export type AppTabParamList = {
  Home: undefined;
  Activity: undefined;
  Actions: undefined;
  Cards: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

const AppStack = () => {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: theme.colors.text as string,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          height: 70,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedGradientIcon
              icon={House}
              selected={focused}
              colors={['#f31b14', '#045DDA', '#04da0f']}
              size={20}
              strokeWidth={2}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: focused ? '700' : '500',
                fontSize: focused ? 12 : 11,
                color: theme.colors.text,
              }}
            >
              Home
            </Text>
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedGradientIcon
              icon={ArrowLeftRight}
              selected={focused}
              colors={['#f31b14', '#045DDA', '#04da0f']}
              size={20}
              strokeWidth={2}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: focused ? '700' : '500',
                fontSize: focused ? 12 : 11,
                color: theme.colors.text,
              }}
            >
              Activity
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Actions"
        component={ActionsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedGradientIcon
              icon={Banknote}
              selected={focused}
              colors={['#f31b14', '#045DDA', '#04da0f']}
              size={20}
              strokeWidth={2}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: focused ? '700' : '500',
                fontSize: focused ? 12 : 11,
                color: theme.colors.text,
              }}
            >
              Actions
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={CardsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <AnimatedGradientIcon
              icon={CreditCard}
              selected={focused}
              colors={['#f31b14', '#045DDA', '#04da0f']}
              size={20}
              strokeWidth={2}
            />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontWeight: focused ? '700' : '500',
                fontSize: focused ? 12 : 11,
                color: theme.colors.text,
              }}
            >
              Cards
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
