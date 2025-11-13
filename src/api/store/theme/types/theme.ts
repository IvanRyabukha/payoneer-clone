import { ColorValue } from 'react-native';

export type ThemeColors = {
  background: ColorValue;
  text: ColorValue;
  inputBorder: ColorValue;
  inputBackground: ColorValue;
};

export type Theme = {
  dark: boolean;
  colors: ThemeColors;
};

//TODO: change colors

export const LigthTheme: Theme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    text: '#000000',
    inputBorder: '#75767f',
    inputBackground: '#ffffff',
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    background: '#1c1c1e',
    text: '#FFFFFF',
    inputBorder: 'transparent',
    inputBackground: '#2A2A2A',
  },
};
