import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Search, X } from 'lucide-react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';

const SearchInput = (props: TextInputProps) => {
  const { theme } = useTheme();

  const [isFocused, setIsFocused] = useState(false);
  // const [isBlur, setIsBlur] = useState(false);

  return (
    <View>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: isFocused ? '#056eed' : theme.colors.inputBorder,
            backgroundColor: theme.colors.inputBackground,
            color: theme.colors.text,
          },
        ]}
        placeholder="Search"
        placeholderTextColor={isFocused ? '#056eed' : '#75767f'}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      <Search
        size={20}
        color={theme.colors.text}
        style={styles.iconSearch}
        strokeWidth={1}
      />

      {props.value && (
        <Pressable
          style={styles.iconClear}
          onPress={() => props.onChangeText?.('')}
        >
          <X size={20} color={theme.colors.text} />
        </Pressable>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 40,
    paddingRight: 40,
  },
  iconSearch: {
    position: 'absolute',
    left: 12,
    top: 12,
  },
  iconClear: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
});
