import { SectionList, StyleSheet, Text } from 'react-native';
import React from 'react';
import EmptyCountryList from '@/screens/shared/components/EmptyCountryList';
import CountryItem from '@/screens/shared/components/CountryItem';

import {
  type ICountry,
  countries,
  defaultCountries,
} from '../../../data/country.data';

interface Props {
  selected: ICountry | null;
  searchQuery: string;
  suggestedCountry: ICountry | null;
  onSelected: (item: ICountry) => void;
}

const CountriesList = ({ selected, searchQuery, suggestedCountry, onSelected }: Props) => {
  const filtered = countries
    .filter(item =>
      item.counrtyName.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((item1, item2) => item1.counrtyName.localeCompare(item2.counrtyName));

  const section = searchQuery
    ? [
        {
          title: '',
          data: filtered,
        },
      ]
    : [
        !selected
          ? {
              title: 'Suggested',
              data: [suggestedCountry || defaultCountries],
            }
          : {
              title: 'Selected',
              data: [selected],
            },
        {
          title: 'All countries',
          data: countries
            .filter(c => c.id !== selected?.id && c.id !== defaultCountries.id)
            .sort((item1, item2) =>
              item1.counrtyName.localeCompare(item2.counrtyName),
            ),
        },
      ];

  return filtered.length === 0 ? (
    <EmptyCountryList />
  ) : (
    <SectionList
      sections={section}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <CountryItem
          language={item.counrtyName}
          flag={item.countryFlag}
          isSelected={selected?.id === item.id}
          onSelected={() => {
            onSelected(item);
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

export default CountriesList;

const styles = StyleSheet.create({
  sectionTitle: {
    color: '#8f8f8f',
    paddingBottom: 5,
  },
});