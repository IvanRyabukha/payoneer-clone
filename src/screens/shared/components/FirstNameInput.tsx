import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/api/store/theme/ThemeContext';

const FirstNameInput = (props: TextInputProps) => {
  const { theme } = useTheme();

  const [isBlur, setIsBlur] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const [isInputError, setIsInputError] = useState('');

  useEffect(() => {
    if (isBlur) {
      if (!props.value) {
        setIsInputError('First Name is required');
        return;
      } else if (props.value.length < 2) {
        setIsInputError('First Name must contain at least 2 cheracters');
        return;
      }

      setIsInputError('');
      return;
    }
  }, [props.value, isBlur]);

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: !isInputError ? theme.colors.inputBorder : '#ee0a0a',
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.text,
          },
        ]}
        placeholderTextColor={!isInputError ? '#75767f' : '#ee0a0a'}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setIsBlur(true);
        }}
      />
      {isInputError && <Text style={styles.errorText}>{isInputError}</Text>}
    </View>
  );
};

export default FirstNameInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingRight: 40,
  },
  errorText: {
    paddingHorizontal: 15,
    paddingTop: 5,
    color: '#ee0a0a',
  },
});
