import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignupStackParamList } from '../SignupScreen';
import {
  type Countries,
  countries,
  defaultCountries,
} from '../data/countryData';
import CountryItem from '../../../shared/components/CountryItem';
import { useScreenError } from '../../../../shared/hooks/useScreenError';
import { TriangleAlert } from 'lucide-react-native';
import CustomButton from '../../../shared/components/CustomButton';
import SearchInput from '../../../shared/components/SearchInput';

type Props = {
  navigation: NativeStackNavigationProp<SignupStackParamList, 'Located'>;
};

const Located: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState<Countries | null>(null); // use geoloc for
  const [error, setError] = useScreenError('');

  const filtered = countries
    .filter(
      item =>
        item.id !== selected?.id &&
        item.counrtyName.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((item1, item2) => item1.counrtyName.localeCompare(item2.counrtyName));

  const handleNext = () => {
    if (!selected) {
      setError('Enter your country');
      return;
    }

    navigation.navigate('BusinessDescribe');
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Where are you located?</Text>
        <SearchInput
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <CountryItem
            language={item.counrtyName}
            flag={item.countryFlag}
            isSelected={selected?.id === item.id}
            onSelected={() => {
              setSelected(item);
            }}
          />
        )}
        ListHeaderComponent={
          <View style={styles.selected}>
            {!searchQuery && (
              <>
                <Text style={styles.sectionTitle}>
                  {selected ? 'Selected' : 'Suggested'}
                </Text>
                {selected ? (
                  <CountryItem
                    language={selected?.counrtyName || ''}
                    flag={selected?.countryFlag}
                    isSelected
                  />
                ) : (
                  <Pressable
                    style={({ pressed }) => [
                      styles.defaultItem,
                      pressed && { backgroundColor: '#e7e7e7' },
                    ]}
                    onPress={() => setSelected(defaultCountries)}
                  >
                    <Image
                      source={defaultCountries.countryFlag}
                      style={styles.flag}
                    />
                    <Text style={styles.language}>
                      {defaultCountries.counrtyName}
                    </Text>
                  </Pressable>
                )}
                <Text style={[styles.sectionTitle, {marginTop: 10}]}>
                  All countries
                </Text>
              </>
            )}
          </View>
        }
        // onScroll={handleScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}
      />
      {error && (
        <View style={[styles.errorBox]}>
          <TriangleAlert color={'red'} size={25} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <View style={styles.footer}>
        <CustomButton label={'Next'} colors={['#a059fd', '#6E5DFF', '#045DDA']} handlePress={handleNext} />
      </View>
    </View>
  );
};

export default Located;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  top: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 0.9,
    marginBottom: 15,
  },
  sectionTitle: {
    color: '#5a5a5a',
  },
  selected: {
    gap: 5,
  },
  footer: {
    borderTopColor: '#eee',
    borderTopWidth: 1,
    padding: 15,
  },
  defaultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    height: 50,
  },
  flag: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#75767f',
  },
  language: {
    fontSize: 16,
  },
  errorBox: {
    alignItems: 'center',
    backgroundColor: '#FFE5E5',
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 16,
    padding: 12,
    width: '100%',
  },
  errorText: {
    color: '#4A3428',
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
  },
});
