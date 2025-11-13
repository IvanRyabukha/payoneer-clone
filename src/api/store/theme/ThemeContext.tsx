import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LigthTheme, DarkTheme, Theme } from './types/theme';
import { Alert } from 'react-native';

interface IThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<Theme>(LigthTheme);

  //TODO: take phone theme

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('appTheme');
        if (storedTheme === 'dark') {
          setTheme(DarkTheme);
        } else {
          setTheme(LigthTheme);
        }
      } catch (error) {
        Alert.alert('Failed to load theme from Async Storage');
      }
    };

    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme.dark ? LigthTheme : DarkTheme;
    setTheme(newTheme);
    try {
      await AsyncStorage.setItem('appTheme', newTheme.dark ? 'dark' : 'light')
    } catch (error) {
      Alert.alert('Failed to save theme to Async Storage');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
