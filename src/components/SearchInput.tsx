import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';

const SearchInput = (props: TextInputProps) => {
  return (
    <>
      <TextInput />
    </>
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
  },
});
