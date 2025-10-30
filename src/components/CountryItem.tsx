import { StyleSheet, Text, Image, Pressable } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && { backgroundColor: '#e7e7e7' },
        isSelected && { backgroundColor: '#e7e7e7' },
      ]}
      onPress={onSelected}
      disabled={isSelected}
    >
      <Image source={flag} style={styles.flag} />
      <Text style={styles.language}>{language}</Text>
      {isSelected && (
        <Ionicons
          name="checkmark-outline"
          size={22}
          color={'#6a009b'}
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
    borderRadius: 9,
    borderColor: '#75767f',
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
