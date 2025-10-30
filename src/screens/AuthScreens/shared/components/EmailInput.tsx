import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Pressable,
  View,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

/*
  1. Create animation for input: Default, Error, Focus
*/

const EmailInput = (props: TextInputProps) => {
  const [isBlur, setIsBlur] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [isEmailError, setEmailError] = useState('');

  useEffect(() => {
    if (isBlur) {
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
  }, [props.value, isBlur]);

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: !isEmailError ? '#75767f' : '#ee0a0a',
          },
        ]}
        placeholderTextColor={!isEmailError ? '#75767f' : '#ee0a0a'}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsBlur(true);
        }}
      />
      {props.value && (
        <Pressable
          style={styles.btnIcon}
          onPress={() => props.onChangeText?.('')}
        >
          <Ionicons name="close-outline" size={20} />
        </Pressable>
      )}
      {isEmailError && <Text style={styles.errorText}>{isEmailError}</Text>}
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

export default EmailInput;
