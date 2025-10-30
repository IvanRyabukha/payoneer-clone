import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Language } from '@/api/store/locale/data/language'
import { Countries } from '@/screens/AuthScreens/SignupScreens/data/countryData'
import CountryItem from '@/screens/shared/components/CountryItem';
import EmptyCountryList from '@/components/EmptyCountryList';
import { useLanguage } from '@/api/store/locale/LanguageContext';

// interface Props {
//   filteredCountries: Language[];
// }

const ListOfCountries = ({ filtered, searchQuery, navigation, handleScroll }) => {
  const { language, setLanguage, flags, countries } = useLanguage();

  const sections = searchQuery
    ? [
        {
          title: 'Results',
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
          data: countries.filter(c => c.code !== language.code),
        },
      ];

  return filtered.length === 0 ? (
    <EmptyCountryList isLanguage />
  ) : (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => (
        <CountryItem
          language={item.label}
          flag={flags[item.code]}
          isSelected={language.code === item.code}
          onSelected={() => {
            setLanguage(item);
            navigation.goBack();
          }}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <Text>{title}</Text>
      )}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingBottom: 50,
      }}
      stickySectionHeadersEnabled={false} // можешь включить true, если хочешь “прилипающие” заголовки
    />
  );
}

export default ListOfCountries

const styles = StyleSheet.create({})