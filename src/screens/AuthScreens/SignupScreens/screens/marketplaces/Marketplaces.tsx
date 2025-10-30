import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../../SignupScreen';
import SearchInput from '@/screens/shared/components/SearchInput';
import { IMarketplaces, MARKETPLACES } from '../../data/marketplaces.data';
import ChipsList from './components/ChipsList';
import MarkeptplacesList from './components/MarkeptplacesList';
import CustomButton from '@/screens/shared/components/CustomButton';
import { useDebounce } from '@/shared/hooks/useDebounce';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'Marketplaces'>;
};

/* TODO: useCallback for toggle and delete function, 
  and mb make React.memo() for selectedList and List marketplaces componentn.
  use KeyboardAwareScrollView for screen.
*/

const Marketplaces: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<IMarketplaces[]>([]);

  const debouncedSearch = useDebounce(searchQuery, 150);

  const toggleSelect = (item: IMarketplaces) => {
    setSelectedItems(prev => {
      const isSelected = prev.some(i => i.id === item.id);

      return isSelected ? prev.filter(i => i.id !== item.id) : [...prev, item];
    });
  };

  const deleteSelected = (item: IMarketplaces) => {
    setSelectedItems(prev => prev.filter(i => i.id !== item.id));
  };

  const marketplaces = useMemo(() => {
    return MARKETPLACES.filter(mark =>
      mark.name.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [debouncedSearch]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Which marketplaces?</Text>
        <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
      </View>

      {selectedItems && selectedItems.length > 0 && (
        <View style={styles.chipsWrapper}>
          <ChipsList data={selectedItems} onDeleted={deleteSelected} />
        </View>
      )}

      <View style={styles.content}>
        <MarkeptplacesList
          data={marketplaces}
          onSelect={toggleSelect}
          selectedItems={selectedItems}
        />

        <View style={styles.footer}>
          <CustomButton
            label="Next"
            colors={['#a059fd', '#6E5DFF', '#045DDA']}
            handlePress={() => navigation.navigate('SetUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default Marketplaces;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '500',
  },
  chipsWrapper: {
    paddingVertical: 8,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },

  footer: {
    padding: 15,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
});
