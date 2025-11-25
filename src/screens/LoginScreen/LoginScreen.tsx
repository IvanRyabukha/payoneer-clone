import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/AuthStack';
import type { RootStackParamList } from '@/navigation/RootNavigation';

import { useTheme } from '@/api/store/theme/ThemeContext';
import Header from './components/Header';
import AnimatedContent from './components/AnimatedContent';
import Footer from './components/Footer';

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'Login'
>;

interface LoginScreenProps {
  navigation: LoginScreenNavigationProp;
}

//TODO: Make animation for input placeholder + styles for validation input

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { theme, toggleTheme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegistration = () => {
    const rootNav =
      navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();
    rootNav?.navigate('Registration');
  };

  const goToLogin = () => {
    const rootNav =
      navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();
    rootNav?.navigate('App');
  };

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <View
        style={[styles.container, { backgroundColor: theme.colors.background }]}
      >
        <Header onNavigate={() => navigation.navigate('Language')} />

        <AnimatedContent
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          onNavigate={() => {}}
        />

        <Button title="Toggle theme" onPress={toggleTheme} />

        <Footer onNavigate={goToRegistration} onLogin={goToLogin} />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
