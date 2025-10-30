import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';

interface Props {
  name: string;
  selected: boolean;
  onSelect: () => void;
}

const MarkeptplacesListItem = ({ name, onSelect, selected }: Props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        pressed && { backgroundColor: '#e7e7e7' },
      ]}
      onPress={onSelect}
    >
      <Text style={styles.label}>{name}</Text>
      <Checkbox
        status={selected ? 'checked' : 'unchecked'}
        color={selected ? '#5b04cc' : ''}
      />
    </Pressable>
  );
};

export default MarkeptplacesListItem;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  label: {
    letterSpacing: 0.8
  }
});
