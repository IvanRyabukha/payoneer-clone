import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';
import CustomButton from '@/screens/shared/components/CustomButton';

interface Props {
  onNavigate: () => void;
}

//TODO: create login function

const Footer = ({ onNavigate }: Props) => {
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
    <View style={styles.footer}>
      <CustomButton
        label="Sign in"
        colors={['#a059fd', '#6E5DFF', '#045DDA']}
        handlePress={() => {}}
      />
      <Animated.View style={[styles.registerContainer, { opacity: fadeAnim }]}>
        <Text style={[styles.registerText, { color: theme.colors.text }]}>
          New to Payoneer?
        </Text>
        <Pressable onPress={onNavigate}>
          <Text style={styles.registerLink}>Register</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  registerText: {
    fontSize: 15,
    textAlign: 'center',
  },
  registerLink: {
    color: '#3f90f3',
    textDecorationLine: 'underline',
  },
});
