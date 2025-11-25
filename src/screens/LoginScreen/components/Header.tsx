import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';
import { useLocale } from '@/api/store/locale/LocaleContext';
import Logo from '../../../../assets/img/logo.svg';

interface Props {
  onNavigate: () => void;
}

const Header = ({ onNavigate }: Props) => {
  const { language, flags } = useLocale();
  const { theme } = useTheme();

  return (
    <View style={styles.loginTop}>
      <View style={styles.logo}>
        <Logo width={18} height={18} />
        <Text style={[styles.label, { color: theme.colors.text }]}>
          Payoneer
        </Text>
      </View>
      <TouchableOpacity style={styles.langBtn} onPress={onNavigate}>
        <Image source={flags[language.code]} style={styles.flag} />
        <Text style={[styles.langCode, { color: theme.colors.text }]}>
          {language.code}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  loginTop: {
    paddingHorizontal: 15,
    paddingTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginLeft: 2,
    fontSize: 16,
    fontWeight: '600',
  },
  langBtn: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flag: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#75767f',
  },
  langCode: {
    fontSize: 14,
  },
});
