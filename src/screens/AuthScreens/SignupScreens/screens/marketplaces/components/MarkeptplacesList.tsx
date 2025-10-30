import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IMarketplaces } from '../../../data/marketplaces.data';
import MarkeptplacesListItem from './MarkeptplacesListItem';

interface Props {
  data: IMarketplaces[];
  selectedItems: IMarketplaces[];
  onSelect: (item: IMarketplaces) => void;
}

const MarkeptplacesList = ({ data, onSelect, selectedItems }: Props) => {
  const isSelected = (item: IMarketplaces) =>
    selectedItems.some(i => i.id === item.id);

  return (
    <FlatList
      data={data}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <MarkeptplacesListItem
          name={item.name}
          onSelect={() => onSelect(item)}
          selected={isSelected(item)}
        />
      )}
      ListHeaderComponent={<Text style={styles.sectionHeader}>Popular</Text>}
      showsVerticalScrollIndicator={false}
      overScrollMode="always"
      contentContainerStyle={{ paddingBottom: 20}}
      style={styles.list}
    />
  );
};

export default MarkeptplacesList;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 15,
  },
  sectionHeader: {
    color: '#666',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
});
