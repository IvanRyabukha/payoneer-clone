import { StyleSheet, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { useTheme } from '@/api/store/theme/ThemeContext';
import { Check } from 'lucide-react-native';

type Props = {
  language: string;
  flag: any;
  isSelected?: boolean;
  onSelected?: () => void;
};

const CountryItem: React.FC<Props> = ({
  language,
  flag,
  isSelected,
  onSelected,
}) => {
  const { theme } = useTheme();

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && {
          backgroundColor: theme.dark
            ? theme.colors.inputBackground
            : '#e7e7e7',
        },
        isSelected && {
          backgroundColor: theme.dark
            ? theme.colors.inputBackground
            : '#e7e7e7',
        },
      ]}
      onPress={onSelected}
      disabled={isSelected}
    >
      <Image
        source={flag}
        style={[
          styles.flag,
          { borderColor: theme.dark ? theme.colors.text : '#75767f' },
        ]}
      />
      <Text style={[styles.language, { color: theme.colors.text }]}>
        {language}
      </Text>
      {isSelected && (
        <Check
          size={22}
          color={'#b278fd'}
          style={styles.selectedIconCheck}
        />
      )}
    </Pressable>
  );
};

export default CountryItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 50,
  },
  flag: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  language: {
    fontSize: 16,
  },
  selectedIconCheck: {
    position: 'absolute',
    top: '50%',
    right: 10,
  },
});
