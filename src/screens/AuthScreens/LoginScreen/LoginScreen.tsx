import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/AuthNavigation';
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
          onNavigate={() => navigation.navigate('TestScreens')}
        />

        <Button title="Toggle theme" onPress={toggleTheme} />

        <Footer onNavigate={() => navigation.navigate('Register')} />
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
