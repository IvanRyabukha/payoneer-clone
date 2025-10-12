import { ImageSourcePropType } from 'react-native';

export type LanguageCode = 'EN' | 'CN' | 'RU' | 'UA' | 'DE' | 'JP';

export type Language = {
  code: LanguageCode;
  label: string;
};

export const flags: Record<LanguageCode, ImageSourcePropType> = {
  EN: require('../../assets/img/countryFlags/uk.png'),
  CN: require('../../assets/img/countryFlags/china.png'),
  RU: require('../../assets/img/countryFlags/russia.png'),
  UA: require('../../assets/img/countryFlags/ukraine.png'),
  DE: require('../../assets/img/countryFlags/germany.png'),
  JP: require('../../assets/img/countryFlags/japan.png'),
};

export const countries: Language[] = [
  { label: 'English', code: 'EN' },
  { label: '中国人', code: 'CN' },
  { label: 'Русский', code: 'RU' },
  { label: 'Українська', code: 'UA' },
  { label: 'Deutsch', code: 'DE' },
  { label: '日本語', code: 'JP' },
];
