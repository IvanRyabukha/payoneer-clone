import { ScrollView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { useTheme } from '@/api/store/theme/ThemeContext';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import Header from './components/Header';

const HomeScreen = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Header />
      <ScrollView refreshControl={<Text>Loading...</Text>} style={{flex: 1, width: '100%'}}>
        <ThemeSwitcher isActive={theme.dark} onPress={toggleTheme} />
        
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

{
  /* <ThemeSwitcher isActive={theme.dark} onPress={toggleTheme} /> */
}
