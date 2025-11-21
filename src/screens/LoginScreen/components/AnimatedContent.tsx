import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';

import EmailInput from '@/screens/shared/components/EmailInput';
import PasswordInput from '@/screens/shared/components/PasswordInput';
import CustomForm from '@/screens/shared/components/CustomForm';

interface Props {
  email: string;
  password: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  onNavigate: () => void;
}

const AnimatedContent = ({
  email,
  password,
  setEmail,
  setPassword,
  onNavigate,
}: Props) => {
  const { theme } = useTheme();

  const fadeAnim = useRef(new Animated.Value(1)).current;
  const moveAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const keyboardShow = Keyboard.addListener('keyboardDidShow', () => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: -20,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });

    const keyboardHide = Keyboard.addListener('keyboardDidHide', () => {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    });

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, [fadeAnim, moveAnim]);

  return (
    <>
      <Animated.Text
        style={[
          styles.loginTitle,
          {
            opacity: fadeAnim,
            transform: [
              {
                translateY: moveAnim.interpolate({
                  inputRange: [-40, 0],
                  outputRange: [-10, 0],
                }),
              },
            ],
          },
        ]}
      >
        <Text style={[styles.loginTitle, { color: theme.colors.text }]}>
          Sign in
        </Text>
      </Animated.Text>
      <Animated.View
        style={{
          transform: [{ translateY: moveAnim }],
          flex: 1,
          paddingHorizontal: 15,
        }}
      >
        <CustomForm>
          <EmailInput
            placeholder="Email or username"
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
          />
          <PasswordInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </CustomForm>

        <TouchableOpacity style={styles.forgotPassLink} onPress={onNavigate}>
          <Text style={styles.forgotPassLinkText}>Forgot password?</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
};

export default AnimatedContent;

const styles = StyleSheet.create({
  loginTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingHorizontal: 15,
  },
  forgotPassLink: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  forgotPassLinkText: {
    fontSize: 13,
    color: '#3f90f3',
    textDecorationLine: 'underline',
  },
});
