import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchInput from '@/screens/shared/components/SearchInput';

import { ChevronLeft } from 'lucide-react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';

interface Props {
  searchQuery: string;
  onChangeText: (value: string) => void;
  onNavigate: () => void;
}

const Header = ({
  searchQuery,
  onChangeText,
  onNavigate,
}: Props) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.header]}>
      <View style={styles.headerTop}>
        <Pressable style={styles.btnBack} onPress={onNavigate}>
          <ChevronLeft
            size={30}
            color={theme.colors.text}
            strokeWidth={1.5}
            style={styles.iconBack}
          />
        </Pressable>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Language
        </Text>
      </View>
      <SearchInput value={searchQuery} onChangeText={onChangeText} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    paddingVertical: 15,
  },
  btnBack: {
    zIndex: 10,
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    left: 0,
    right: 0,
    zIndex: 1,
  },
  iconBack: {
    left: -7,
  },
});
