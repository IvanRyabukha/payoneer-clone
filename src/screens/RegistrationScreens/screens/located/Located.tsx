import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// import { RegistrationStackParamList } from '@/navigation/RegistrationStack';
import { RegistrationFlowStackParamList } from '@/screens/RegistrationScreens/RegistrationFlowStack';

import { type ICountry } from '../../data/country.data';
import { useTheme } from '@/api/store/theme/ThemeContext';
import ErrorBox from '../../components/ErrorBox';
import { useScreenError } from '@/screens/shared/hooks/useScreenError';
import SearchInput from '@/screens/shared/components/SearchInput';
import CountriesList from './component/CountriesList';
import CustomButton from '@/screens/shared/components/CustomButton';

type Props = {
  navigation: NativeStackNavigationProp<RegistrationFlowStackParamList, 'Located'>;
  suggestedCountry: ICountry | null;
};

const Located: React.FC<Props> = ({ navigation, suggestedCountry }) => {
  const { theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [selected, setSelected] = useState<ICountry | null>(null);
  const [error, setError] = useScreenError('');

  const handleNext = () => {
    if (!selected) {
      setError('Enter your country');
      return;
    }

    navigation.navigate('BusinessDescribe');
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <View style={styles.top}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Where are you located?
        </Text>
        <SearchInput value={searchQuery} onChangeText={setSearchQuery} />
      </View>

      <CountriesList
        searchQuery={searchQuery}
        selected={selected}
        suggestedCountry={suggestedCountry}
        onSelected={setSelected}
      />

      <View style={styles.footer}>
        <CustomButton
          label={'Next'}
          colors={['#a059fd', '#6E5DFF', '#045DDA']}
          handlePress={handleNext}
        />
      </View>

      <ErrorBox error={error} />
    </View>
  );
};

export default Located;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
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
  footer: {
    borderTopColor: '#474747',
    borderTopWidth: 0.5,
    padding: 15,
  },
});
