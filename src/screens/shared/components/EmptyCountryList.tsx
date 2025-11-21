import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MailSearchIcon } from './MailSearchIcon';
import { useTheme } from '@/api/store/theme/ThemeContext';

type Props = {
  isLanguage?: boolean;
};

const EmptyCountryList: React.FC<Props> = ({ isLanguage }) => {
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <MailSearchIcon />
      {isLanguage ? (
        <Text style={[styles.textInfo, { color: theme.colors.text }]}>
          No matching results.{'\n'} Only supported countries/region are {'\n'}{' '}
          listed.
        </Text>
      ) : (
        <Text style={[styles.textInfo, { color: theme.colors.text }]}>No matching results.{'\n'}</Text>
      )}
    </View>
  );
};

export default EmptyCountryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.8,
    width: '100%',
  },
});
