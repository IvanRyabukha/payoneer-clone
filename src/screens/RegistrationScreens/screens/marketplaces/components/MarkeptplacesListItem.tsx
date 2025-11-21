import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Checkbox } from 'react-native-paper';
import { useTheme } from '@/api/store/theme/ThemeContext';

interface Props {
  name: string;
  selected: boolean;
  onSelect: () => void;
}

const MarkeptplacesListItem = ({ name, onSelect, selected }: Props) => {
  const { theme } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.btn,
        pressed && {
          backgroundColor: theme.dark
            ? theme.colors.inputBackground
            : '#e7e7e7',
        },
      ]}
      onPress={onSelect}
    >
      <Text style={[styles.label, { color: theme.colors.text }]}>{name}</Text>
      <Checkbox
        status={selected ? 'checked' : 'unchecked'}
        color={selected ? '#b278fd' : ''}
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
    letterSpacing: 0.8,
  },
});
