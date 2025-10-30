import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchInput = (props: TextInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  // const [isBlur, setIsBlur] = useState(false);

  return (
    <View>
      <Ionicons name="search-outline" size={16} style={styles.iconSearch} />
      <TextInput
        style={[
          styles.input,
          { borderColor: isFocused ? '#056eed' : '#75767f' },
        ]}
        placeholder="Search"
        placeholderTextColor={isFocused ? '#056eed' : '#414141'}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
      {props.value && (
        <Pressable
          style={styles.iconClear}
          onPress={() => props.onChangeText?.('')}
        >
          <Ionicons name="close-outline" size={22} />
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
    borderColor: '#75767f',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingLeft: 35,
    paddingRight: 40,
  },
  iconSearch: {
    position: 'absolute',
    top: 14,
    left: 15,
  },
  iconClear: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
});
