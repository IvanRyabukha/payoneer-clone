import { useTheme } from '@/api/store/theme/ThemeContext';
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Pressable,
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Eye, EyeOff } from 'lucide-react-native';
/*
  1. Create animation for input: Default, Error, Focus
*/

const PasswordInput = (props: TextInputProps) => {
  const { theme } = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isBlur, setIsBlur] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [isPasswordError, setPasswordError] = useState('');

  useEffect(() => {
    if (isBlur) {
      if (!props.value) {
        setPasswordError('Password is required');
        return;
      } else if (props.value.length < 7) {
        setPasswordError('Password must contain at least 7 cheracters');
        return;
      }
      setPasswordError('');
      return;
    }
  }, [isBlur, props.value]);

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: !isPasswordError
              ? theme.colors.inputBorder
              : '#ee0a0a',
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.text,
          },
        ]}
        placeholderTextColor={!isPasswordError ? '#75767f' : '#ee0a0a'}
        {...props}
        secureTextEntry={!isPasswordVisible}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsBlur(true);
        }}
      />
      {props.value && (
        <Pressable
          style={styles.btnIcon}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          {isPasswordVisible ? (
            <Eye size={20} color={theme.colors.text} />
          ) : (
            <EyeOff size={20} color={theme.colors.text} />
          )}
        </Pressable>
      )}

      {isPasswordError && (
        <Text style={styles.errorText}>{isPasswordError}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingRight: 40,
  },
  btnIcon: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  errorText: {
    paddingHorizontal: 15,
    paddingTop: 5,
    color: '#ee0a0a',
  },
});

export default PasswordInput;
