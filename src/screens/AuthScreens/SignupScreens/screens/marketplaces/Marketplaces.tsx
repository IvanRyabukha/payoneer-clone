import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../../SignupScreen';
import SearchInput from '@/screens/shared/components/SearchInput';
import { IMarketplaces, MARKETPLACES } from '../../data/marketplaces.data';
import ChipsList from './components/ChipsList';
import MarkeptplacesList from './components/MarkeptplacesList';
import CustomButton from '@/screens/shared/components/CustomButton';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { useScreenError } from '@/shared/hooks/useScreenError';
import { TriangleAlert } from 'lucide-react-native';
import { useTheme } from '@/api/store/theme/ThemeContext';
import ErrorBox from '../../components/ErrorBox';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'Marketplaces'>;
};

/* TODO: useCallback for toggle and delete function, 
  and mb make React.memo() for selectedList and List marketplaces component.
  use KeyboardAwareScrollView for screen.
*/

const Marketplaces: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<IMarketplaces[]>([]);
  const [error, setError] = useScreenError('');

  const debouncedSearch = useDebounce(searchQuery, 100);

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

  const handleNext = () => {
    if (selectedItems.length === 0) {
      setError('Choose an option');
      return;
    }

    navigation.navigate('SetUp');
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.top}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Which marketplaces?
        </Text>
        <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
      </View>

      {selectedItems && selectedItems.length > 0 && (
        <View style={styles.chipsWrapper}>
          <ChipsList data={selectedItems} onDeleted={deleteSelected} />
        </View>
      )}

      <MarkeptplacesList
        data={marketplaces}
        onSelect={toggleSelect}
        selectedItems={selectedItems}
      />

      <View style={styles.footer}>
        <CustomButton
          label="Next"
          colors={['#a059fd', '#6E5DFF', '#045DDA']}
          handlePress={handleNext}
        />
      </View>

      <ErrorBox error={error} />
    </View>
  );
};

export default Marketplaces;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
    paddingTop: 5,
    paddingBottom: 15,
  },
  footer: {
    borderTopColor: '#474747',
    borderTopWidth: 0.5,
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
