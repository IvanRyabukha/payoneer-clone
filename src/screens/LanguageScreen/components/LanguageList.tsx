import React from 'react';
import { SectionList, StyleSheet, Text } from 'react-native';
import { useLocale } from '@/api/store/locale/LocaleContext';
import { ILanguage } from '@/api/store/locale/data/languages.data';
import CountryItem from '@/screens/shared/components/CountryItem';
import EmptyCountryList from '@/screens/shared/components/EmptyCountryList';

interface Props {
  filtered: ILanguage[];
  searchQuery: string;
  onNavigate: () => void;
}

const LanguageList = ({ filtered, searchQuery, onNavigate }: Props) => {
  const { language, languages, flags, setLanguage } = useLocale();

  const section = searchQuery
    ? [
        {
          title: '',
          data: filtered,
        },
      ]
    : [
        {
          title: 'Selected',
          data: [language],
        },
        {
          title: 'Supported',
          data: languages.filter(l => l.code !== language.code),
        },
      ];

  return filtered.length === 0 ? (
    <EmptyCountryList isLanguage />
  ) : (
    <SectionList
      sections={section}
      keyExtractor={item => item.code}
      renderItem={({ item }) => (
        <CountryItem
          language={item.label}
          flag={flags[item.code]}
          isSelected={language.code === item.code}
          onSelected={() => {
            setLanguage(item);
            onNavigate();
          }}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          style={[styles.sectionTitle, { paddingTop: searchQuery ? 0 : 20 }]}
        >
          {title}
        </Text>
      )}
      overScrollMode="always"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingBottom: 40,
      }}
    />
  );
};

export default LanguageList;

const styles = StyleSheet.create({
  sectionTitle: {
    color: '#8f8f8f',
    paddingBottom: 5,
  },
});
