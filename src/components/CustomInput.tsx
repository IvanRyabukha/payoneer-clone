import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Pressable,
  View,
  Text,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*
  1. Create animation for input: Default, Error, Focus
*/

const CustomInput = (props: TextInputProps & { isPassword?: boolean }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const [isEmailError, setEmailError] = useState('');
  const [isPasswordError, setPasswordError] = useState('');
 
  useEffect(() => {
    if (isBlur) {
      if (props.isPassword) {
        if (!props.value) {
          setPasswordError('Password is required');
          return;
        } else if (props.value.length < 7) {
          setPasswordError('Password must contain at least 7 cheracters');
          return;
        }
        setPasswordError('');
        return;
      } else {
        const emailRegEx = /^[a-zA-Z0-9._!?@-]{1,64}$/;
        if (!props.value) {
          setEmailError('Email or username is required');
          return;
        } else if (!emailRegEx.test(props.value)) {
          setEmailError('Enter a valid username');
          return;
        }

        setEmailError('');
        return;
      }
    }
  }, [props.value, isBlur]);

  // console.log('input render');

  return (
    <View>
      <TextInput
        style={[styles.input, {
          borderColor: !isEmailError && !isPasswordError ? '#75767f' : '#ee0a0a'
        }]}
        placeholderTextColor={!isEmailError && !isPasswordError ? '#75767f' : '#ee0a0a'}
        {...props}
        secureTextEntry={props.isPassword && !isPasswordVisible}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsBlur(true);
        }}
      />
      {props.value ? (
        props.isPassword ? (
          <Pressable
            style={styles.btnIcon}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons
              name={isPasswordVisible ? 'eye-outline' : 'eye-off-outline'}
              size={20}
            />
          </Pressable>
        ) : (
          <Pressable
            style={styles.btnIcon}
            onPress={() => props.onChangeText?.('')}
          >
            <Ionicons name="close-outline" size={20} />
          </Pressable>
        )
      ) : null}
      {props.isPassword ? (
        isPasswordError ? (
          <Text style={styles.errorText}>{isPasswordError}</Text>
        ) : null
      ) : isEmailError ? (
        <Text style={styles.errorText}>{isEmailError}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    borderColor: '#75767f',
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

export default CustomInput;
